import sleep from "sleep-promise";
import { TftApi, Constants } from "twisted";
import { Regions } from "twisted/dist/constants";
import {
  ApiResponseDTO,
  MatchTFTDTO,
  ParticipantDto,
  SummonerV4DTO,
} from "twisted/dist/models-dto";
import { LeagueEntryDTO } from "twisted/dist/models-dto/league/tft-league";
import { TftApiKey } from "../../../models/TftApiKey";
import { TftSummoner } from "../../../models/TftSummoner";
import { TftSummonerApiKey } from "../../../models/TftSummonerApiKey";
import { Redis } from "../redis";
import { getKey, getSpecificKey, releaseKey } from "./keyManager";

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

  await releaseKey(key);
  return summoner;
};

export const getMatchHistory = async (summonerPUUID: string) => {
  const [api, key] = await getTftApi();
  const matches = await api.Match.list(
    summonerPUUID,
    Constants.TftRegions.EUROPE
  );

  await releaseKey(key);
  return matches;
};

export const getMatchDetail = async (
  matchId: string
): Promise<ApiResponseDTO<MatchTFTDTO>> => {
  const [api, key] = await getTftApi();
  const match = await api.Match.get(matchId, Constants.TftRegions.EUROPE);

  await releaseKey(key);
  return match;
};

export const getParticipantFromMatch = async (
  match: ApiResponseDTO<MatchTFTDTO>,
  tftSummonerApiKey: TftSummonerApiKey
): Promise<ParticipantDto> => {
  const participantIndex = match.response.metadata.participants.findIndex(
    (id) => id == tftSummonerApiKey.encryptedPlayerUuid
  );

  return match.response.info.participants[participantIndex];
};

export const fetchLeagueBySummonerApiKey = async (
  summonerApiKey: TftSummonerApiKey
): Promise<ApiResponseDTO<LeagueEntryDTO[]>> => {
  const { riotApiKey } = await TftApiKey.findByPk(summonerApiKey.tftApiKeyId);

  await getSpecificKey(riotApiKey);
  const tftApi = new TftApi(riotApiKey);
  const league = tftApi.League.get(
    summonerApiKey.encryptedSummonerId,
    Regions.EU_WEST
  );
  await releaseKey(riotApiKey);
  return league;
};
