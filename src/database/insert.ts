import { Transaction } from "sequelize/types";
import { Regions, TftRegions } from "twisted/dist/constants";
import { MatchTFTDTO, ParticipantDto } from "twisted/dist/models-dto";
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
import { findOrCreateTftSummonerApiKey, doesMatchExist } from "./search";
import { initSummonerByApiKey } from "./summonerInit";

const insertParticipantData = async (
  participantDto: ParticipantDto,
  match: MatchTFTDTO,
  summoner: TftSummoner,
  transaction: Transaction
) => {
  const participant = await insertParticipant(participantDto, transaction);
  await insertParticipantLink(match, participant, summoner, transaction);
  await insertParticipantUnit(participant, participantDto, transaction);
  await insertParticipantUnitItem(participant, participantDto, transaction);
  await insertParticipantTrait(participant, participantDto, transaction);

  return participant;
};

export const insertDataForMatchAndSummoner = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const [tftApi, apiKey] = await getTftApi();
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);

  if (!(await doesMatchExist(match))) {
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

  const participant = await insertParticipantData(
    participantDto,
    match.response,
    summoner,
    transaction
  );
  // Only check rank if game was ranked
  if (match.response.info.queue_id == Queue.RANKED_TFT) {
    await insertParticipantElo(participant, tftSummonerApiKey, transaction);
  }
  await releaseKey(apiKey);
  await transaction.commit();
};

export const insertDataForMatch = async (matchId: string): Promise<void> => {
  const logger = createLogger();
  const [tftApi, apiKey] = await getTftApi();

  logger.info(`Match ${matchId} | Using key: ${apiKey}`);
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);
  if (!(await doesMatchExist(match))) {
    await upsertMatch(match);
  }

  if (!match.response.info.game_version.startsWith("Version 10.22")) {
    logger.info(
      `Not processing participants match id: ${match.response.metadata.match_id} as old version | ${match.response.info.game_version}`
    );
    await releaseKey(apiKey);
    return;
  }
  if (match.response.info.queue_id != Queue.RANKED_TFT) {
    logger.info(
      `Not processing participants | match id: ${match.response.metadata.match_id} as not ranked`
    );
    await releaseKey(apiKey);
    return;
  }
  await processParticipants(match.response, apiKey);
  await releaseKey(apiKey);
};

const processParticipants = async (match: MatchTFTDTO, apiKey: string) => {
  const logger = createLogger();
  const matchId = match.metadata.match_id;
  for await (const participantDto of match.info.participants) {
    const transaction = await Postgres.newTransaction();
    const summoner = await initSummonerByApiKey(
      participantDto.puuid,
      apiKey,
      transaction
    );

    if (await hasParticipantBeenProcessed(matchId, summoner, transaction)) {
      logger.info(
        `Already processed participant. match id: ${matchId} | summoner id: ${summoner?.tftSummonerId}`
      );
      continue;
    }
    if (!(await hasSummonerRank(summoner, transaction))) {
      await insertSummonerElo(summoner, apiKey, transaction);
    }
    logger.info(
      `Inserting participant info name: ${summoner?.summonerName} | ${participantDto.puuid}`
    );
    await insertParticipantData(participantDto, match, summoner, transaction);
    await transaction.commit();
  }
};
const hasParticipantBeenProcessed = async (
  matchId: string,
  summoner: TftSummoner,
  transaction: Transaction
) => {
  const count = await TftParticipantLink.count({
    where: {
      tftMatchId: matchId,
      tftSummonerId: summoner?.tftSummonerId,
    },
    transaction,
  });

  return count > 0;
};

const hasSummonerRank = async (
  summoner: TftSummoner,
  transaction: Transaction
) => {
  const count = await TftSummonerElo.count({
    where: {
      tftSummonerId: summoner?.tftSummonerId,
    },
    transaction,
  });

  return count > 0;
};
