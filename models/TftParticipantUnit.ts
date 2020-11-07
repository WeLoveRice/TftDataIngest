/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftParticipantUnitAttributes {
  tftParticipantUnitId?: number;
  tftParticipantId?: number;
  tftUnitId?: number;
}

export class TftParticipantUnit extends Model<TftParticipantUnitAttributes, TftParticipantUnitAttributes> implements TftParticipantUnitAttributes {
  tftParticipantUnitId?: number;
  tftParticipantId?: number;
  tftUnitId?: number;

  static initModel(sequelize: Sequelize) {
    TftParticipantUnit.init({
    tftParticipantUnitId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_participant_unit_id'
    },
    tftParticipantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_participant',
        key: 'tft_participant_id'
      },
      field: 'tft_participant_id'
    },
    tftUnitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tft_unit_id'
    }
  }, {
    sequelize,
    tableName: 'tft_participant_unit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_participant_unit_pkey",
        unique: true,
        fields: [
          { name: "tft_participant_unit_id" },
        ]
      },
    ]
  });
  return TftParticipantUnit;
  }
}
