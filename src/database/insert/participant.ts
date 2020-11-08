import { Transaction } from "sequelize/types";
import { ParticipantDto } from "twisted/dist/models-dto";
import { TftParticipant } from "../../../models/init-models";
import { Postgres } from "../../api/postgres";
import { createLogger } from "../../Logger";

export const insertParticipant = async (
  {
    level,
    gold_left,
    placement,
    last_round,
    players_eliminated,
    total_damage_to_players,
  }: ParticipantDto,
  transaction: Transaction
): Promise<TftParticipant> => {
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

  return participant;
};
