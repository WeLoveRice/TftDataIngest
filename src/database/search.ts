import { ApiResponseDTO, MatchTFTDTO, UnitDto } from "twisted/dist/models-dto";
import {
  TftParticipantLink,
  TftSummoner,
  TftUnit,
} from "../../models/init-models";
import { TftMatch } from "../../models/TftMatch";
import { getMatchHistory } from "../api/riot";

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

export const fetchLatestUnprocessedMatchId = async (
  summoner: TftSummoner
): Promise<string | null> => {
  const matches = await getMatchHistory(summoner.encryptedPlayerUuid);

  const result = await TftParticipantLink.count({
    where: {
      tftSummonerId: summoner.tftSummonerId,
      tftMatchId: matches.response[0],
    },
  });

  if (result > 0) {
    return null;
  }

  return matches.response[0];
};

export const matchExists = async ({
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