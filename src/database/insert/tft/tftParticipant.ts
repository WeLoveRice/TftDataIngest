import { Transaction } from "sequelize/types";
import { MatchTFTDTO, ParticipantDto } from "twisted/dist/models-dto";
import { TftSummoner } from "../../../../models/init-models";
import { insertParticipant } from "../participant";
import { insertParticipantLink } from "../participantLink";
import { insertParticipantTrait } from "../participantTrait";
import { insertParticipantUnit } from "../participantUnit";
import { insertParticipantUnitItem } from "../participantUnitItem";

export const insertParticipantData = async (
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
