import { Constants, TftApi } from "twisted";
import { Regions } from "twisted/dist/constants";
import { ApiResponseDTO, MatchTFTDTO, UnitDto } from "twisted/dist/models-dto";
import {
  TftApiKey,
  TftSummoner,
  TftSummonerApiKey,
  TftUnit,
} from "../../models/init-models";
import { TftMatch } from "../../models/TftMatch";
export const findSummonerByName = async (
  name: string
): Promise<TftSummoner> => {
  const summoner = await TftSummoner.findOne({
    where: { summonerName: name },
  });

  if (!summoner) {
    throw new Error(`Cannot find summoner by name ${name}`);
  }

  return summoner;
};

export const doesMatchExist = async ({
  response,
}: ApiResponseDTO<MatchTFTDTO>): Promise<boolean> => {
  const result = await TftMatch.count({
    where: {
      tftMatchId: response.metadata.match_id,
    },
  });

  return result > 0;
};

export const findTftUnitByDto = async (unit: UnitDto) => {
  return TftUnit.findOne({
    where: {
      tftCharacterId: unit.character_id,
      tier: unit.tier,
      chosen: unit.chosen ? unit.chosen : "None",
    },
  });
};

export const findOrCreateTftSummonerApiKey = async (
  summoner: TftSummoner,
  apiKey: string
) => {
  const tftApiKey = await TftApiKey.findOne({
    where: {
      riotApiKey: apiKey,
    },
  });
  const tftSummonerApiKey = await TftSummonerApiKey.findOne({
    where: {
      tftSummonerId: summoner.tftSummonerId,
      tftApiKeyId: tftApiKey?.tftApiKeyId,
    },
  });

  if (tftSummonerApiKey) {
    return tftSummonerApiKey;
  }

  const tftApi = new TftApi(apiKey);
  const summonerDto = await tftApi.Summoner.getByName(
    summoner.summonerName,
    Regions.EU_WEST
  );

  return TftSummonerApiKey.create({
    tftSummonerId: summoner.tftSummonerId,
    tftApiKeyId: tftApiKey?.tftApiKeyId,
    encryptedPlayerUuid: summonerDto.response.puuid,
    encryptedSummonerId: summonerDto.response.id,
  });
};
