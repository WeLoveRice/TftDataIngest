import { ParticipantDto } from "twisted/dist/models-dto";
import { TftParticipant } from "../../../models/init-models";
import { Postgres } from "../../api/postgres";
import { createLogger } from "../../Logger";

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
