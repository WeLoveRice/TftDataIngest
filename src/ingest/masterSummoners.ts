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

export const ingestMasterSummoners = async () => {
  const [tftApi, key] = await getTftApi();
  const league = await tftApi.League.getMasterLeague(Regions.EU_WEST);
  await releaseKey(key);
  await processLeague(league.response);
};

const processLeague = async (league: LeagueListDTO) => {
  const eloTime = new Date();
  let count = 0;
  for await (const entry of league.entries) {
    console.log(`${count}/${league.entries.length}`);
    count += 1;
    const summCount = await TftSummoner.count({
      where: { summonerName: entry.summonerName },
    });
    if (summCount > 0) {
      continue;
    }
    const [summonerDto, key] = await getSummonerByName(entry.summonerName);
    if (!summonerDto) {
      continue;
    }
    const { id, name, puuid } = summonerDto.response;
    const transaction = await Postgres.newTransaction();
    const summoner = await TftSummoner.create(
      {
        summonerName: name,
        summonerRegion: Regions.EU_WEST,
      },
      { transaction }
    );
    const tftElo = await TftElo.findOne({
      where: {
        tier: "MASTER",
        rank: entry.rank,
        lp: entry.leaguePoints,
      },
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
    await TftSummonerApiKey.create(
      {
        tftSummonerId: summoner.tftSummonerId,
        tftApiKeyId: tftApiKey.tftApiKeyId,
        encryptedPlayerUuid: puuid,
        encryptedSummonerId: id,
      },
      { transaction }
    );
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
