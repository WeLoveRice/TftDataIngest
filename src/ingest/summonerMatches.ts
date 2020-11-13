import { Op } from "sequelize";
import {
  TftMatch,
  TftSummoner,
  TftSummonerElo,
} from "../../models/init-models";
import { insertDataForMatch } from "../database/insert/tft/tftMatch";
import { fetchRecentUnprocessedMatches } from "../database/matchFinder";
import { createLogger } from "../Logger";

const logger = createLogger();

export const ingestDataForHighElo = async () => {
  const summonerElos = await TftSummonerElo.findAll({
    where: {
      tftEloId: {
        [Op.gte]: 2000,
      },
    },
    include: [TftSummonerElo.associations.tftSummoner],
    order: [["tft_elo_id", "ASC"]],
  });

  for await (const summonerElo of summonerElos) {
    await ingestForSummoner(summonerElo);
  }
};

const ingestForSummoner = async (summonerElo: TftSummonerElo) => {
  const summoner = summonerElo.tftSummoner;
  if (!summoner) {
    return;
  }

  const matches = await fetchRecentUnprocessedMatches(summoner);
  if (matches.length === 0) {
    return;
  }
  logger.info(
    `Processing matches: ${matches} | summoner ${summoner?.summonerName}`
  );
  await Promise.all(
    matches.map(async (match) => {
      await insertDataForMatch(match);
    })
  );
};
