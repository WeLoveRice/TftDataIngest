import {
  ApiResponseDTO,
  MatchTFTDTO,
  ParticipantDto,
  UnitDto,
} from "twisted/dist/models-dto";
import {
  TftElo,
  TftParticipant,
  TftParticipantElo,
  TftParticipantLink,
  TftParticipantUnit,
  TftUnit,
} from "../../../models/init-models";
import { TftMatch } from "../../../models/TftMatch";
import { TftSummoner } from "../../../models/TftSummoner";
import { Postgres } from "../../api/postgres";
import {
  fetchLeagueBySummoner,
  getMatchDetail,
  getParticipantFromMatch,
} from "../../api/riot";
import { Queue } from "../../enum/Queue";
import { createLogger } from "../../Logger";
import { matchExists } from "./search";

export const insertDataForMatch = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const transaction = await Postgres.getTransaction();
  const match = await getMatchDetail(matchId);
  if (!(await matchExists(match))) {
    await insertMatch(match);
  }
  const participantDto = await getParticipantFromMatch(match, summoner);
  const participant = await insertParticipant(participantDto);

  // Only check rank if game was ranked
  if (match.response.info.queue_id == Queue.RANKED_TFT) {
    await insertParticipantElo(participant, summoner);
  }
  await insertParaticipantLink(match, participant, summoner);
  await insertParticipantUnit(participant, participantDto.units);
  await transaction.commit();
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

  const transaction = await Postgres.getTransaction();

  const [result] = await TftMatch.upsert(
    {
      tftMatchId: response.metadata.match_id,
      gameTimestamp: new Date(game_datetime),
      gameLength: Math.round(game_length),
      gameVersion: game_version,
      queueId: queue_id,
      tftSetNumber: tft_set_number,
    },
    { transaction }
  );

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
  const transaction = await Postgres.getTransaction();

  const participant = await TftParticipant.create(
    {
      level,
      goldLeft: gold_left,
      placement,
      lastRound: last_round,
      playersEliminated: players_eliminated,
      totalDmgToPlayers: total_damage_to_players,
    },
    { transaction }
  );

  logger.info(`Inserted participant with ID: ${participant.tftParticipantId}`);

  return participant;
};

const insertParticipantElo = async (
  participant: TftParticipant,
  summoner: TftSummoner
) => {
  const { response } = await fetchLeagueBySummoner(summoner);
  if (response.length === 0) {
    const logger = createLogger();
    logger.info(`${summoner.name} does not have a rank`);
    return;
  }
  const { tier, rank, leaguePoints } = response[0];

  const elo = await TftElo.findOne({
    where: {
      tier,
      rank,
      lp: leaguePoints,
    },
  });

  const transaction = await Postgres.getTransaction();

  await TftParticipantElo.create(
    {
      tftEloId: elo?.tftEloId,
      tftParticipantId: participant.tftParticipantId,
    },
    { transaction }
  );
};

export const insertParaticipantLink = async (
  { response }: ApiResponseDTO<MatchTFTDTO>,
  participant: TftParticipant,
  summoner: TftSummoner
): Promise<TftParticipantLink> => {
  const logger = createLogger();
  const transaction = await Postgres.getTransaction();

  const result = await TftParticipantLink.create(
    {
      tftMatchId: response.metadata.match_id,
      tftParticipantId: participant.tftParticipantId,
      tftSummonerId: summoner.tftSummonerId,
    },
    { transaction }
  );

  logger.info(`Inserted participant_link with ID: ${result.tftParticipantId}`);

  return result;
};

export const insertParticipantUnit = async (
  participant: TftParticipant,
  units: UnitDto[]
) => {
  for await (const unit of units) {
    const tftUnit = await TftUnit.findOne({
      where: {
        tftCharacterId: unit.character_id,
        tier: unit.tier,
        chosen: unit.chosen ? unit.chosen : "None",
      },
    });

    const transaction = await Postgres.getTransaction();
    await TftParticipantUnit.create(
      {
        tftParticipantId: participant.tftParticipantId,
        tftUnitId: tftUnit?.tftUnitId,
      },
      { transaction }
    );
  }
};
