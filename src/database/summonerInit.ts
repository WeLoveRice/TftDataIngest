import { Transaction } from "sequelize/types";
import sleep from "sleep-promise";
import { TftApi } from "twisted";
import { Regions, TftRegions } from "twisted/dist/constants";
import { TftApiKey, TftSummonerApiKey } from "../../models/init-models";
import { TftSummoner } from "../../models/TftSummoner";
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
  apiKey: string,
  transaction: Transaction
) => {
  const tftApiKey = await TftApiKey.findOne({ where: { riotApiKey: apiKey } });

  const tftSummonerApiKey = await TftSummonerApiKey.findOne({
    where: {
      tftApiKeyId: tftApiKey?.tftApiKeyId,
      encryptedPlayerUuid: summonerPuuid,
    },
    transaction,
  });

  if (tftSummonerApiKey) {
    return TftSummoner.findByPk(tftSummonerApiKey.tftSummonerId);
  }
  const tftApi = new TftApi(apiKey);
  const summonerDto = await tftApi.Summoner.getByPUUID(
    summonerPuuid,
    Regions.EU_WEST
  );
  await sleep(1200);

  const [tftSummoner] = await TftSummoner.findOrCreate({
    where: {
      summonerName: summonerDto.response.name,
      summonerRegion: Regions.EU_WEST,
    },
    transaction,
  });

  await TftSummonerApiKey.upsert(
    {
      tftSummonerId: tftSummoner?.tftSummonerId,
      tftApiKeyId: tftApiKey?.tftApiKeyId,
      encryptedPlayerUuid: summonerDto.response.puuid,
      encryptedSummonerId: summonerDto.response.id,
    },
    { transaction }
  );

  return tftSummoner;
};
