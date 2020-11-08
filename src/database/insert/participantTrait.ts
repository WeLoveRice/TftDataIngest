import { Transaction } from "sequelize/types";
import { ParticipantDto } from "twisted/dist/models-dto";
import {
  TftParticipant,
  TftParticipantTrait,
  TftTrait,
} from "../../../models/init-models";
import { Postgres } from "../../api/postgres";

export const insertParticipantTrait = async (
  participant: TftParticipant,
  participantDto: ParticipantDto,
  transaction: Transaction
) => {
  for await (const traitDto of participantDto.traits) {
    const trait = await TftTrait.findOne({
      where: {
        tftTraitName: traitDto.name,
        tierCurrent: traitDto.tier_current,
      },
    });
    await TftParticipantTrait.create(
      {
        tftParticipantId: participant?.tftParticipantId,
        tftTraitId: trait?.tftTraitId,
        numUnits: traitDto.num_units,
      },
      { transaction }
    );
  }
};
