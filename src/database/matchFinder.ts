import { Op } from "sequelize";
import { Constants } from "twisted";
import { Regions, TftRegions } from "twisted/dist/constants";
import {
  TftMatch,
  TftParticipantLink,
  TftSummoner,
} from "../../models/init-models";
import { TftApiKey } from "../../models/TftApiKey";
import { TftSummonerApiKey } from "../../models/TftSummonerApiKey";
import { releaseKey } from "../api/riot/keyManager";
import { getTftApi } from "../api/riot/riot";
import { initSummonerApiKey } from "./summonerApiKeyInit";

const fetchMatchListBySummoner = async (summoner: TftSummoner) => {
  const [tftApi, apiKey] = await getTftApi();
  const tftApiKey = await TftApiKey.findOne({ where: { riotApiKey: apiKey } });
  let tftSummonerApiKey = await TftSummonerApiKey.findOne({
    where: {
      tftSummonerId: summoner.tftSummonerId,
      tftApiKeyId: tftApiKey?.tftApiKeyId,
    },
  });

  // If summonerApiKey doesn't exist, fetch it from API
  if (!tftSummonerApiKey) {
    tftSummonerApiKey = await initSummonerApiKey(summoner, tftApiKey);
  }

  const matches = await tftApi.Match.list(
    tftSummonerApiKey.encryptedPlayerUuid,
    TftRegions.EUROPE
  );

  await releaseKey(apiKey);
  return matches;
};

export const fetchLatestUnprocessedMatchId = async (
  summoner: TftSummoner
): Promise<string | null> => {
  const matches = await fetchMatchListBySummoner(summoner);
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

export const fetchRecentUnprocessedMatches = async (
  summoner: TftSummoner
): Promise<string[]> => {
  const { response } = await fetchMatchListBySummoner(summoner);
  // Use match and not links, as if we've seen a match before we don't care if there are participants for now
  const matches = await TftMatch.findAll({
    where: {
      tftMatchId: {
        [Op.in]: response,
      },
    },
  });

  const matchIdsInDb = matches.map((match) => match.tftMatchId);
  return response.filter((matchId) => !matchIdsInDb.includes(matchId));
};
