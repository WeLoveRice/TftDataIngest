import { Transaction } from "sequelize/types";
import { ApiResponseDTO, MatchTFTDTO } from "twisted/dist/models-dto";
import {
  TftParticipant,
  TftParticipantLink,
  TftSummoner,
} from "../../../models/init-models";
import { Postgres } from "../../api/postgres";
import { createLogger } from "../../Logger";

export const insertParticipantLink = async (
  { response }: ApiResponseDTO<MatchTFTDTO>,
  participant: TftParticipant,
  summoner: TftSummoner,
  transaction: Transaction
): Promise<TftParticipantLink> => {
  const logger = createLogger();

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
