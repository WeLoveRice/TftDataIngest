import { Transaction } from "sequelize/types";
import { ParticipantDto } from "twisted/dist/models-dto";
import {
  TftParticipant,
  TftParticipantUnit,
} from "../../../models/init-models";
import { TftParticipantUnitItem } from "../../../models/TftParticipantUnitItem";
import { Postgres } from "../../api/postgres";
import { findTftUnitByDto } from "../search";

export const insertParticipantUnitItem = async (
  participant: TftParticipant,
  participantDto: ParticipantDto,
  transaction: Transaction
) => {
  for (const unit of participantDto.units) {
    if (unit.items.length == 0) {
      continue;
    }

    const tftUnit = await findTftUnitByDto(unit);
    for (const itemId of unit.items) {
      const tftParticipantUnit = await TftParticipantUnit.findOne({
        where: {
          tftParticipantId: participant.tftParticipantId,
          tftUnitId: tftUnit?.tftUnitId,
        },
        transaction,
      });
      await TftParticipantUnitItem.create(
        {
          tftParticipantUnitId: tftParticipantUnit?.tftParticipantUnitId,
          tftItemId: itemId,
        },
        { transaction }
      );
    }
  }
};
