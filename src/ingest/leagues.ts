import { promises } from "fs-extra";
import sleep from "sleep-promise";
import { LeagueApi } from "twisted/dist/apis/lol/league/league";
import { Regions } from "twisted/dist/constants";
import { LeagueListDTO } from "twisted/dist/models-dto";
import {
  TftApiKey,
  TftSummonerApiKey,
  TftSummonerElo,
} from "../../models/init-models";
import { TftElo } from "../../models/TftElo";
import { TftSummoner } from "../../models/TftSummoner";
import { Postgres } from "../api/postgres";
import { releaseKey } from "../api/riot/keyManager";
import { getSummoner, getTftApi } from "../api/riot/riot";
import { Op } from "sequelize";

export const ingestHighEloLeagues = async () => {
  const [tftApi, key] = await getTftApi();
  const masterLeague = await tftApi.League.getMasterLeague(Regions.EU_WEST);
  await sleep(1200);
  const grandMasterLeague = await tftApi.League.getGrandMasterLeague(
    Regions.EU_WEST
  );
  await sleep(1200);
  const challengerLeague = await tftApi.League.getChallengerLeague(
    Regions.EU_WEST
  );

  await releaseKey(key);
  const eloTime = new Date();

  const leagues = [masterLeague, grandMasterLeague, challengerLeague];
  for await (const league of leagues) {
    await processLeague(league.response, eloTime);
  }
};

const processLeague = async (league: LeagueListDTO, eloTime: Date) => {
  let count = 0;
  // const summonerNames = league.entries.map((entry) => entry.summonerName);
  // const tftSummoners = await TftSummoner.findAll({
  //   where: {
  //     summonerName: {
  //       [Op.in]: summonerNames,
  //     },
  //   },
  // });
  // const summonersInDb = tftSummoners.map((summoner) => summoner.summonerName);
  // const summonersNotInDb = league.entries.filter(
  //   (entry) => !summonersInDb.includes(entry.summonerName)
  // );
  for await (const entry of league.entries) {
    console.log(`${league.tier} - ${count}/${league.entries.length}`);
    count += 1;

    const [summonerDto, key] = await getSummonerByName(entry.summonerName);
    if (!summonerDto) {
      continue;
    }
    const { id, name, puuid } = summonerDto.response;
    const transaction = await Postgres.newTransaction();
    const [summoner] = await TftSummoner.findOrCreate({
      where: {
        summonerName: name,
        summonerRegion: Regions.EU_WEST,
      },
      transaction,
    });
    const tftElo = await TftElo.findOne({
      where: {
        tier: league.tier,
        rank: entry.rank,
        lp: entry.leaguePoints,
      },
      transaction,
    });
    await TftSummonerElo.create(
      {
        tftEloId: tftElo?.tftEloId,
        tftSummonerId: summoner.tftSummonerId,
        summonerEloTimestamp: eloTime,
      },
      { transaction }
    );

    const [tftApiKey] = await TftApiKey.findOrCreate({
      where: {
        riotApiKey: key,
      },
      transaction,
    });
    await TftSummonerApiKey.findOrCreate({
      where: {
        tftSummonerId: summoner.tftSummonerId,
        tftApiKeyId: tftApiKey.tftApiKeyId,
        encryptedPlayerUuid: puuid,
        encryptedSummonerId: id,
      },
      transaction,
    });
    await transaction.commit();
  }
};

const getSummonerByName = async (name: string) => {
  const [tftApi, key] = await getTftApi();
  try {
    const summoner = await tftApi.Summoner.getByName(name, Regions.EU_WEST);
    return [summoner, key];
  } catch (error) {
    console.log(`Error finding ${name}`);
    return [null, null];
  } finally {
    await releaseKey(key);
  }
};
