import { Transaction } from "sequelize/types";
import { TftRegions } from "twisted/dist/constants";
import { MatchTFTDTO } from "twisted/dist/models-dto";
import { Postgres } from "../../../api/postgres";
import { releaseKey } from "../../../api/riot/keyManager";
import { getTftApi } from "../../../api/riot/riot";
import { Queue } from "../../../enum/Queue";
import { createLogger } from "../../../Logger";
import { hasLinkBeenProcessed } from "../../search/participantLink";
import { hasSummonerRank } from "../../search/summonerElo";
import { initSummonerByApiKey } from "../../summonerInit";
import { findOrCreateMatchByDto } from "../match";
import { insertSummonerElo } from "../summonerElo";
import { insertParticipantData } from "./tftParticipant";

export const insertDataForMatch = async (matchId: string): Promise<void> => {
  const logger = createLogger();
  const [tftApi, apiKey] = await getTftApi();

  logger.info(`Match ${matchId} | Using key: ${apiKey}`);
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);
  const [tftMatch, created] = await findOrCreateMatchByDto(match.response);

  logger.info(`Match Id: ${tftMatch.tftMatchId} - created: ${created}`);
  if (!isMatchValid(match.response)) {
    await releaseKey(apiKey);
    return;
  }
  await processParticipants(match.response, apiKey);
  await releaseKey(apiKey);
};

const isMatchValid = async (match: MatchTFTDTO) => {
  const logger = createLogger();
  if (!match.info.game_version.startsWith("Version 10.23")) {
    logger.info(
      `Not processing participants match id: ${match.metadata.match_id} as old version | ${match.info.game_version}`
    );
    return;
  }
  if (match.info.queue_id != Queue.RANKED_TFT) {
    logger.info(
      `Not processing participants | match id: ${match.metadata.match_id} as not ranked`
    );
    return;
  }
};

const processParticipants = async (match: MatchTFTDTO, apiKey: string) => {
  const logger = createLogger();
  const matchId = match.metadata.match_id;
  const transaction = await Postgres.newTransaction();

  for await (const participantDto of match.info.participants) {
    const summoner = await initSummonerByApiKey(
      participantDto.puuid,
      apiKey,
      transaction
    );

    if (await hasLinkBeenProcessed(matchId, summoner, transaction)) {
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
  }
  await transaction.commit();
};
