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
  await TftSummonerElo.hasOne(TftSummoner, {
    sourceKey: "tftSummonerId",
    foreignKey: "tftSummonerId",
    as: "tftSummoner",
  });
  const summonerElos = await TftSummonerElo.findAll({
    where: {
      tftEloId: {
        [Op.gte]: 2200,
      },
    },
    include: [TftSummonerElo.associations.tftSummoner],
    order: [["tft_elo_id", "ASC"]],
  });
  const logger = createLogger();
  const badMatches = ["EUW1_4894806985"];

  for await (const summonerElo of summonerElos) {
    const summoner = summonerElo.tftSummoner;
    let matches = [];
    try {
      matches = await fetchRecentUnprocessedMatches(summoner);
      if (matches.length === 0) {
        continue;
      }
    } catch (error) {
      console.log(
        `Error fetching matches for summoner: ${summoner?.summonerName} - ${error}`
      );
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
        try {
          await insertDataForMatch(match);
        } catch (error) {
          console.log(`Error for Match id: ${match} - ${error}`);
        }
      })
    );
  }
};
