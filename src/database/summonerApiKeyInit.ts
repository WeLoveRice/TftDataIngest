import { TftApi } from "twisted";
import { Regions } from "twisted/dist/constants";
import { TftSummoner } from "../../models/init-models";
import { TftSummonerApiKey } from "../../models/TftSummonerApiKey";

export const initSummonerApiKey = async (
  summoner: TftSummoner,
  tftApiKey: TftApiKey
) => {
  // Otherwise, fetch and add
  const tftApi = new TftApi(tftApiKey.riotApiKey);
  const summonerDto = await tftApi.Summoner.getByName(
    summoner.summonerName,
    Regions.EU_WEST
  );

  const { id, puuid } = summonerDto.response;
  return TftSummonerApiKey.create({
    encryptedPlayerUuid: puuid,
    encryptedSummonerId: id,
    tftApiKeyId: tftApiKey.tftApiKeyId,
    tftSummonerId: summoner.tftSummonerId,
  });
};
