import { Transaction } from "sequelize";
import { ParticipantDto, UnitDto } from "twisted/dist/models-dto";
import {
  TftParticipant,
  TftParticipantUnit,
  TftUnit,
} from "../../../models/init-models";
import { Postgres } from "../../api/postgres";
import { findTftUnitByDto } from "../search";

export const insertParticipantUnit = async (
  participant: TftParticipant,
  participantDto: ParticipantDto,
  transaction: Transaction
) => {
  for await (const unit of participantDto.units) {
    const tftUnit = await findTftUnitByDto(unit);

    await TftParticipantUnit.create(
      {
        tftParticipantId: participant.tftParticipantId,
        tftUnitId: tftUnit?.tftUnitId,
      },
      { transaction }
    );
  }
};
