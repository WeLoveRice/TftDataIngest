import {
  ApiResponseDTO,
  MatchTFTDTO,
  ParticipantDto,
} from "twisted/dist/models-dto";
import {
  TftElo,
  TftParticipant,
  TftParticipantElo,
  TftParticipantLink,
} from "../../../models/init-models";
import { TftMatch } from "../../../models/TftMatch";
import { TftSummoner } from "../../../models/TftSummoner";
import {
  fetchLeagueBySummoner,
  getMatchDetail,
  getParticipantFromMatch,
} from "../../api/riot";
import { createLogger } from "../../Logger";
import { matchExists } from "./search";

export const insertDataForMatch = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const match = await getMatchDetail(matchId);
  if (!(await matchExists(match))) {
    await insertMatch(match);
  }
  const participantDto = await getParticipantFromMatch(match, summoner);
  const participant = await insertParticipant(participantDto);
  await insertParticipantElo(participant, summoner);
  await insertParaticipantLink(match, participant, summoner);
};

export const insertMatch = async ({
  response,
}: ApiResponseDTO<MatchTFTDTO>): Promise<TftMatch> => {
  const logger = createLogger();
  const {
    game_datetime,
    game_length,
    game_version,
    queue_id,
    tft_set_number,
  } = response.info;

  const [result] = await TftMatch.upsert({
    tftMatchId: response.metadata.match_id,
    gameTimestamp: new Date(game_datetime),
    gameLength: Math.round(game_length),
    gameVersion: game_version,
    queueId: queue_id,
    tftSetNumber: tft_set_number,
  });

  logger.info(`Inserted match_detail with ID: ${result.tftMatchId}`);

  return result;
};

export const insertParticipant = async ({
  level,
  gold_left,
  placement,
  last_round,
  players_eliminated,
  total_damage_to_players,
}: ParticipantDto): Promise<TftParticipant> => {
  const logger = createLogger();

  const participant = await TftParticipant.create({
    level,
    goldLeft: gold_left,
    placement,
    lastRound: last_round,
    playersEliminated: players_eliminated,
    totalDmgToPlayers: total_damage_to_players,
  });
  logger.info(`Inserted participant with ID: ${participant.tftParticipantId}`);

  return participant;
};

const insertParticipantElo = async (
  participant: TftParticipant,
  summoner: TftSummoner
) => {
  const { response } = await fetchLeagueBySummoner(summoner);
  const { tier, rank, leaguePoints } = response[0];

  const elo = await TftElo.findOne({
    where: {
      tier,
      rank,
      lp: leaguePoints,
    },
  });

  await TftParticipantElo.create({
    tftEloId: elo?.tftEloId,
    tftParticipantId: participant.tftParticipantId,
  });
};

export const insertParaticipantLink = async (
  { response }: ApiResponseDTO<MatchTFTDTO>,
  participant: TftParticipant,
  summoner: TftSummoner
): Promise<TftParticipantLink> => {
  const logger = createLogger();
  const result = await TftParticipantLink.create({
    tftMatchId: response.metadata.match_id,
    tftParticipantId: participant.tftParticipantId,
    tftSummonerId: summoner.tftSummonerId,
  });

  logger.info(`Inserted participant_link with ID: ${result.tftParticipantId}`);

  return result;
};
