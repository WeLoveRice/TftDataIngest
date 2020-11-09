import { Regions, TftRegions } from "twisted/dist/constants";
import {
  TftApiKey,
  TftElo,
  TftParticipantLink,
  TftSummonerApiKey,
  TftSummonerElo,
} from "../../models/init-models";
import { TftSummoner } from "../../models/TftSummoner";
import { Postgres } from "../api/postgres";
import { releaseKey } from "../api/riot/keyManager";
import {
  getMatchDetail,
  getParticipantFromMatch,
  getTftApi,
} from "../api/riot/riot";
import { Queue } from "../enum/Queue";
import { createLogger } from "../Logger";
import { upsertMatch } from "./insert/match";
import { insertParticipant } from "./insert/participant";
import { insertParticipantElo } from "./insert/participantElo";
import { insertParticipantLink } from "./insert/participantLink";
import { insertParticipantTrait } from "./insert/participantTrait";
import { insertParticipantUnit } from "./insert/participantUnit";
import { insertParticipantUnitItem } from "./insert/participantUnitItem";
import { insertSummonerElo } from "./insert/summonerElo";
import { findOrCreateTftSummonerApiKey, matchExists } from "./search";
import { initSummonerByApiKey } from "./summonerInit";

export const insertDataForMatchAndSummoner = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const [tftApi, apiKey] = await getTftApi();
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);

  if (!(await matchExists(match))) {
    await upsertMatch(match);
  }
  const tftSummonerApiKey = await findOrCreateTftSummonerApiKey(
    summoner,
    apiKey
  );
  const participantDto = await getParticipantFromMatch(
    match,
    tftSummonerApiKey
  );

  const transaction = await Postgres.newTransaction();
  const participant = await insertParticipant(participantDto, transaction);

  // Only check rank if game was ranked
  if (match.response.info.queue_id == Queue.RANKED_TFT) {
    await insertParticipantElo(participant, tftSummonerApiKey, transaction);
  }

  await insertParticipantLink(match, participant, summoner, transaction);
  await insertParticipantUnit(participant, participantDto.units, transaction);
  await insertParticipantUnitItem(participant, participantDto, transaction);
  await insertParticipantTrait(participant, participantDto, transaction);

  await transaction.commit();
};

export const insertDataForMatch = async (matchId: string): Promise<void> => {
  const logger = createLogger();
  logger.info(`Match ${matchId}`);

  const [tftApi, apiKey] = await getTftApi();

  logger.info(`Match ${matchId} | Using key: ${apiKey}`);
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);

  if (match.response.info.queue_id != Queue.RANKED_TFT) {
    logger.info(
      `Skipping match id: ${match.response.metadata.match_id} as not ranked`
    );
    await releaseKey(apiKey);
    return;
  }

  if (!(await matchExists(match))) {
    await upsertMatch(match);
  }

  for await (const participantDto of match.response.info.participants) {
    const transaction = await Postgres.newTransaction();
    const summoner = await initSummonerByApiKey(
      participantDto.puuid,
      apiKey,
      transaction
    );

    if (await hasParticipantBeenProcessed(matchId, summoner)) {
      logger.info(
        `Already processed participant. match id: ${matchId} | summoner id: ${summoner?.tftSummonerId}`
      );
      await transaction.commit();
      continue;
    }

    const participant = await insertParticipant(participantDto, transaction);

    if (!(await hasSummonerRank(summoner))) {
      await insertSummonerElo(summoner, apiKey, transaction);
    }
    await insertParticipantLink(match, participant, summoner, transaction);
    await insertParticipantUnit(participant, participantDto.units, transaction);
    await insertParticipantUnitItem(participant, participantDto, transaction);
    await insertParticipantTrait(participant, participantDto, transaction);
    await transaction.commit();
  }
  await releaseKey(apiKey);
};

const hasParticipantBeenProcessed = async (
  matchId: string,
  summoner: TftSummoner
) => {
  const count = await TftParticipantLink.count({
    where: {
      tftMatchId: matchId,
      tftSummonerId: summoner?.tftSummonerId,
    },
  });

  return count > 0;
};

const hasSummonerRank = async (summoner: TftSummoner) => {
  const count = await TftSummonerElo.count({
    where: {
      tftSummonerId: summoner?.tftSummonerId,
    },
  });

  return count > 0;
};
