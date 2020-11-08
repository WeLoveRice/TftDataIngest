import { Op } from "sequelize";
import { TftSummoner, TftSummonerElo } from "../../models/init-models";
import { insertDataForMatch } from "../database/insert";
import { fetchRecentUnprocessedMatches } from "../database/matchFinder";

export const ingestDataForHighElo = async () => {
  const summonerElos = await TftSummonerElo.findAll({
    where: {
      tftSummonerEloId: {
        [Op.gte]: 2000,
      },
    },
  });
  console.log(`Summoners to process: ${summonerElos.length}`);
  for await (const summonerElo of summonerElos) {
    const summoner = await TftSummoner.findByPk(summonerElo.tftSummonerId);
    const matches = await fetchRecentUnprocessedMatches(summoner);
    if (!matches) {
      continue;
    }

    for await (const match of matches) {
      await insertDataForMatch(match);
    }
  }
};
