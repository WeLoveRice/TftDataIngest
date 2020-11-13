import { Transaction } from "sequelize/types";
import { TftApi } from "twisted";
import { Regions } from "twisted/dist/constants";
import {
  TftApiKey,
  TftElo,
  TftSummoner,
  TftSummonerApiKey,
  TftSummonerElo,
} from "../../../models/init-models";
import { getSpecificKey, releaseKey } from "../../api/riot/keyManager";

export const insertSummonerElo = async (
  summoner: TftSummoner,
  { riotApiKey }: TftApiKey,
  tftSummonerApiKey: TftSummonerApiKey,
  transaction: Transaction
) => {
  await getSpecificKey(riotApiKey);
  const tftApi = new TftApi(riotApiKey);
  const leagueDto = await tftApi.League.get(
    tftSummonerApiKey.encryptedSummonerId,
    Regions.EU_WEST
  );
  await releaseKey(riotApiKey);

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
