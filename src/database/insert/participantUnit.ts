import { TftParticipantUnit, TftUnit } from "../../../models/init-models";
import { Postgres } from "../../api/postgres";

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
