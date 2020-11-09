import { Op } from "sequelize";
import {
  TftMatch,
  TftSummoner,
  TftSummonerElo,
} from "../../models/init-models";
import { insertDataForMatch } from "../database/insert";
import { fetchRecentUnprocessedMatches } from "../database/matchFinder";
import { createLogger } from "../Logger";

export const ingestDataForHighElo = async () => {
  const summonerElos = await TftSummonerElo.findAll({
    where: {
      tftEloId: {
        [Op.gte]: 2000,
      },
    },
    order: [["tft_elo_id", "DESC"]],
  });
  const logger = createLogger();
  const badMatches = ["EUW1_4894806985"];

  for await (const summonerElo of summonerElos) {
    const summoner = await TftSummoner.findByPk(summonerElo.tftSummonerId);
    const matches = await fetchUniqueRecentMatches(summoner);
    if (matches.length === 0) {
      continue;
    }

    await logger.info(
      `Processing matches: ${matches} | summoner ${summoner?.summonerName}`
    );
    // for await (const match of matches) {
    //   try {
    //     await insertDataForMatch(match);
    //   } catch (error) {
    //     logger.error(`Error processing match ${match} - ${error}`);
    //   }
    // }
    await Promise.all(
      matches.map(async (match) => {
        if (badMatches.includes(match)) {
          return;
        }
        await insertDataForMatch(match);
      })
    );
  }
};

export const fetchUniqueRecentMatches = async (summoner: TftSummoner) => {
  const matches = await fetchRecentUnprocessedMatches(summoner);
  if (!matches) {
    return [];
  }

  const tftMatches = await TftMatch.findAll({
    where: {
      tftMatchId: {
        [Op.in]: matches,
      },
    },
  });
  const matchesInDb = tftMatches.map((match) => match.tftMatchId);
  return matches.filter((matchId) => !matchesInDb.includes(matchId));
};
