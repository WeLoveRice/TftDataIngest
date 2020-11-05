import { ApiResponseDTO, MatchTFTDTO, ParticipantDto } from "twisted/dist/models-dto";
import { TftMatchDetails, TftParticipantResult, TftMatchHistory } from "../../../models/init-models";
import { TftSummoner } from "../../../models/TftSummoner";
import { fetchLeagueBySummoner, getMatchDetail, getParticipantFromMatch } from "../../api/riot";
import { createLogger } from "../../Logger";
import { matchDetailExists } from "./search";

export const insertDataForMatch = async (matchId: string, summoner: TftSummoner): Promise<void> => {
  const match = await getMatchDetail(matchId);
  if (!(await matchDetailExists(match))) {
    await insertMatchDetail(match);
  }
  const participant = await getParticipantFromMatch(match, summoner);
  const participantResult = await insertParticipantResult(
    participant,
    summoner
  );
  await insertMatchHistory(participantResult, match, summoner);
}

export const insertMatchDetail = async ({
    response
  }: ApiResponseDTO<MatchTFTDTO>): Promise<TftMatchDetails> => {
    const logger = createLogger();
    const [result] = await TftMatchDetails.upsert({
      startTime: new Date(response.info.game_datetime),
      duration: Math.round(response.info.game_length),
      riotId: response.metadata.match_id
    });
  
    logger.info(`Inserted match_detail with ID: ${result.id}`);
  
    return result;
  };
  
  export const insertParticipantResult = async (
    participant: ParticipantDto,
    summoner: TftSummoner
  ): Promise<TftParticipantResult> => {
    const logger = createLogger();
  
    const { response } = await fetchLeagueBySummoner(summoner);
    const { tier, rank, leaguePoints } = response[0];
  
    const participantResult = await TftParticipantResult.create({
      goldLeft: participant.gold_left,
      placement: participant.placement,
      lastRound: participant.last_round,
      postMatchTier: tier,
      postMatchRank: rank,
      postMatchLp: leaguePoints
    });
    logger.info(`Inserted participant_detail with ID: ${participantResult.id}`);
  
    return participantResult;
  };
  
  export const insertMatchHistory = async (
    { id }: TftParticipantResult,
    { response }: ApiResponseDTO<MatchTFTDTO>,
    summoner: TftSummoner
  ): Promise<TftMatchHistory> => {
    const logger = createLogger();
    const result = await TftMatchHistory.create({
      tftParticipantResultId: id,
      tftMatchDetailsRiotId: response.metadata.match_id,
      tftSummonerId: summoner.id
    });
  
    logger.info(`Inserted match_history with ID: ${result.id}`);
  
    return result;
  };
  