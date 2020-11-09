import { Op } from "sequelize";
import sleep from "sleep-promise";
import { TftSummoner, TftSummonerElo } from "../../models/init-models";
import { insertDataForMatch } from "../database/insert";
import { fetchRecentUnprocessedMatches } from "../database/matchFinder";

export const ingestDataForHighElo = async () => {
  const summonerElos = await TftSummonerElo.findAll({
    where: {
      tftEloId: {
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

    // for await (const match of matches) {
    //   await insertDataForMatch(match);
    //   await sleep(10000);
    // }

    await Promise.all(
      matches.map(async (matchId) => {
        await insertDataForMatch(matchId);
        return;
      })
    );
  }
};
