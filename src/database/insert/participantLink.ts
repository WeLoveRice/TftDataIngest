import { Transaction } from "sequelize";
import { ApiResponseDTO, MatchTFTDTO } from "twisted/dist/models-dto";
import {
  TftParticipant,
  TftParticipantLink,
  TftSummoner,
} from "../../../models/init-models";

export const insertParticipantLink = async (
  match: MatchTFTDTO,
  participant: TftParticipant,
  summoner: TftSummoner,
  transaction: Transaction
): Promise<TftParticipantLink> => {
  return TftParticipantLink.create(
    {
      tftMatchId: match.metadata.match_id,
      tftParticipantId: participant.tftParticipantId,
      tftSummonerId: summoner.tftSummonerId,
    },
    { transaction }
  );
};
