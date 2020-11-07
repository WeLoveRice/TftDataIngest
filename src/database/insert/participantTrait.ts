import { ParticipantDto } from "twisted/dist/models-dto";
import {
  TftParticipant,
  TftParticipantTrait,
  TftTrait,
} from "../../../models/init-models";
import { Postgres } from "../../api/postgres";

export const insertParticipantTrait = async (
  participantDto: ParticipantDto,
  participant: TftParticipant
) => {
  const transaction = await Postgres.getTransaction();
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
