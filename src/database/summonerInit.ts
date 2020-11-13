import { Transaction } from "sequelize/types";
import sleep from "sleep-promise";
import { TftApi } from "twisted";
import { Regions, TftRegions } from "twisted/dist/constants";
import { TftApiKey, TftSummonerApiKey } from "../../models/init-models";
import { TftSummoner } from "../../models/TftSummoner";
import { getSpecificKey, releaseKey } from "../api/riot/keyManager";
import { getSummoner } from "../api/riot/riot";
import { createLogger } from "../Logger";

const initSummoner = async (summonerName: string) => {
  const { response } = await getSummoner(summonerName);
  const count = await TftSummoner.count({
    where: { summonerName },
  });
  if (count > 0) {
    return;
  }

  await TftSummoner.create({
    summonerName: response.name,
    summonerRegion: Regions.EU_WEST,
  });
};

export const initialiseSummoners = async () => {
  const logger = createLogger();

  logger.info(`Initialising Summoners: ${process.env.LOL_USERS}`);
  if (!process.env.LOL_USERS) {
    return;
  }

  const summoners = process.env.LOL_USERS.split(",");
  for await (const summonerName of summoners) {
    await initSummoner(summonerName);
  }
};

export const initSummonerByApiKey = async (
  summonerPuuid: string,
  { tftApiKeyId, riotApiKey }: TftApiKey,
  transaction: Transaction
): Promise<[TftSummonerApiKey, TftSummoner]> => {
  let tftSummonerApiKey = await TftSummonerApiKey.findOne({
    where: {
      tftApiKeyId: tftApiKeyId,
      encryptedPlayerUuid: summonerPuuid,
    },
    transaction,
  });

  if (tftSummonerApiKey) {
    const summoner = await TftSummoner.findByPk(
      tftSummonerApiKey.tftSummonerId
    );
    return [tftSummonerApiKey, summoner];
  }

  await getSpecificKey(riotApiKey);
  const tftApi = new TftApi(riotApiKey);
  const summonerDto = await tftApi.Summoner.getByPUUID(
    summonerPuuid,
    Regions.EU_WEST
  );

  await releaseKey(riotApiKey);

  const [tftSummoner] = await TftSummoner.findOrCreate({
    where: {
      summonerName: summonerDto.response.name,
      summonerRegion: Regions.EU_WEST,
    },
    transaction,
  });

  [tftSummonerApiKey] = await TftSummonerApiKey.upsert(
    {
      tftSummonerId: tftSummoner?.tftSummonerId,
      tftApiKeyId: tftApiKeyId,
      encryptedPlayerUuid: summonerDto.response.puuid,
      encryptedSummonerId: summonerDto.response.id,
    },
    { transaction }
  );

  return [tftSummonerApiKey, tftSummoner];
};
