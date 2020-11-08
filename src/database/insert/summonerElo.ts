import { Transaction } from "sequelize/types";
import sleep from "sleep-promise";
import { TftApi } from "twisted";
import { Regions } from "twisted/dist/constants";
import {
  TftApiKey,
  TftElo,
  TftSummoner,
  TftSummonerApiKey,
  TftSummonerElo,
} from "../../../models/init-models";

export const insertSummonerElo = async (
  summoner: TftSummoner,
  apiKey: string,
  transaction: Transaction
) => {
  const tftApiKey = await TftApiKey.findOne({
    where: {
      riotApiKey: apiKey,
    },
    transaction,
  });

  const tftSummonerApiKey = await TftSummonerApiKey.findOne({
    where: {
      tftSummonerId: summoner?.tftSummonerId,
      tftApiKeyId: tftApiKey?.tftApiKeyId,
    },
    transaction,
  });

  const tftApi = new TftApi(apiKey);
  const leagueDto = await tftApi.League.get(
    tftSummonerApiKey?.encryptedSummonerId,
    Regions.EU_WEST
  );
  await sleep(1200);

  if (leagueDto.response.length === 0) {
    return;
  }
  const { rank, tier, leaguePoints } = leagueDto.response[0];
  const tftElo = await TftElo.findOne({
    where: {
      tier,
      rank,
      lp: leaguePoints,
    },
    transaction,
  });

  await TftSummonerElo.create(
    {
      tftSummonerId: summoner?.tftSummonerId,
      tftEloId: tftElo?.tftEloId,
      summonerEloTimestamp: new Date(),
    },
    { transaction }
  );
};
