import { TftApi, Constants } from "twisted";
import { Regions } from "twisted/dist/constants";
import {
  ApiResponseDTO,
  MatchTFTDTO,
  ParticipantDto,
  SummonerV4DTO,
} from "twisted/dist/models-dto";
import { LeagueEntryDTO } from "twisted/dist/models-dto/league/tft-league";
import { TftSummoner } from "../../../models/TftSummoner";
import { getKey, releaseKey } from "./keyManager";

export const getTftApi = async (): Promise<[TftApi, string]> => {
  const key = await getKey();

  return [new TftApi(key), key];
};

export const getSummoner = async (
  summonerName: string
): Promise<ApiResponseDTO<SummonerV4DTO>> => {
  const [api, key] = await getTftApi();

  const summoner = await api.Summoner.getByName(
    summonerName,
    Constants.Regions.EU_WEST
  );

  releaseKey(key);
  return summoner;
};

export const getMatchHistory = async (summonerPUUID: string) => {
  const [api, key] = await getTftApi();
  const matches = await api.Match.list(
    summonerPUUID,
    Constants.TftRegions.EUROPE
  );

  releaseKey(key);
  return matches;
};

export const getMatchDetail = async (
  matchId: string
): Promise<ApiResponseDTO<MatchTFTDTO>> => {
  const [api, key] = await getTftApi();
  const match = await api.Match.get(matchId, Constants.TftRegions.EUROPE);

  releaseKey(key);
  return match;
};

export const getParticipantFromMatch = (
  match: ApiResponseDTO<MatchTFTDTO>,
  summoner: TftSummoner
): ParticipantDto => {
  const participantIndex = match.response.metadata.participants.findIndex(
    (id) => id == summoner.encryptedPlayerUuid
  );

  return match.response.info.participants[participantIndex];
};

export const fetchLeagueBySummoner = async (
  summoner: TftSummoner
): Promise<ApiResponseDTO<LeagueEntryDTO[]>> => {
  const [api, key] = await getTftApi();

  releaseKey(key);
  return api.League.get(summoner.encryptedSummonerId, Regions.EU_WEST);
};
