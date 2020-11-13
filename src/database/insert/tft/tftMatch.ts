import { Transaction } from "sequelize/types";
import { TftRegions } from "twisted/dist/constants";
import { MatchTFTDTO, ParticipantDto } from "twisted/dist/models-dto";
import { TftApiKey } from "../../../../models/TftApiKey";
import { Postgres } from "../../../api/postgres";
import { releaseKey } from "../../../api/riot/keyManager";
import { getTftApi } from "../../../api/riot/riot";
import { Queue } from "../../../enum/Queue";
import { createLogger } from "../../../Logger";
import { findApiKeyByRiotKey } from "../../search/apiKey";
import { hasLinkBeenProcessed } from "../../search/participantLink";
import { hasSummonerRank } from "../../search/summonerElo";
import { initSummonerByApiKey } from "../../summonerInit";
import { findOrCreateMatchByDto } from "../match";
import { insertSummonerElo } from "../summonerElo";
import { insertParticipantData } from "./tftParticipant";

const logger = createLogger();

export const insertDataForMatch = async (matchId: string): Promise<void> => {
  const [tftApi, apiKey] = await getTftApi();

  logger.info(`Match ${matchId} | Using key: ${apiKey}`);
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);
  await releaseKey(apiKey);

  const [tftMatch, created] = await findOrCreateMatchByDto(match.response);
  logger.info(`Match Id: ${tftMatch.tftMatchId} - created: ${created}`);
  if (!(await shouldProcessMatch(match.response))) {
    return;
  }
  await processParticipants(match.response, apiKey);
};

const shouldProcessMatch = async (match: MatchTFTDTO) => {
  const logger = createLogger();
  if (!match.info.game_version.startsWith("Version 10.23")) {
    logger.info(
      `Not processing participants match id: ${match.metadata.match_id} as old version | ${match.info.game_version}`
    );
    return false;
  }
  if (match.info.queue_id != Queue.RANKED_TFT) {
    logger.info(
      `Not processing participants | match id: ${match.metadata.match_id} as not ranked`
    );
    return false;
  }
  return true;
};

const processParticipants = async (match: MatchTFTDTO, apiKey: string) => {
  const tftApiKey = await findApiKeyByRiotKey(apiKey);
  if (!tftApiKey) {
    throw new Error(`Cannot find Api key ${apiKey}`);
  }

  const participants = match.info.participants;
  const transaction = await Postgres.newTransaction();
  await Promise.all(
    participants.map(async (participant) => {
      await processSingleParticipant(
        match,
        participant,
        tftApiKey,
        transaction
      );
    })
  );
  await transaction.commit();
};

const processSingleParticipant = async (
  match: MatchTFTDTO,
  participantDto: ParticipantDto,
  tftApiKey: TftApiKey,
  transaction: Transaction
) => {
  const matchId = match.metadata.match_id;

  const [tftSummonerApiKey, summoner] = await initSummonerByApiKey(
    participantDto.puuid,
    tftApiKey,
    transaction
  );

  if (await hasLinkBeenProcessed(matchId, summoner, transaction)) {
    logger.info(
      `Already processed participant. match id: ${matchId} | summoner id: ${summoner?.tftSummonerId}`
    );
    return;
  }
  if (!(await hasSummonerRank(summoner, transaction))) {
    await insertSummonerElo(
      summoner,
      tftApiKey,
      tftSummonerApiKey,
      transaction
    );
  }
  logger.info(
    `Inserting participant info name: ${summoner?.summonerName} | ${participantDto.puuid}`
  );
  await insertParticipantData(participantDto, match, summoner, transaction);
};
