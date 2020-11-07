/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftParticipantUnitItemAttributes {
  tftParticipantUnitItemId?: number;
  tftParticipantUnitId?: number;
  tftItemId?: number;
}

export class TftParticipantUnitItem extends Model<TftParticipantUnitItemAttributes, TftParticipantUnitItemAttributes> implements TftParticipantUnitItemAttributes {
  tftParticipantUnitItemId?: number;
  tftParticipantUnitId?: number;
  tftItemId?: number;

  static initModel(sequelize: Sequelize) {
    TftParticipantUnitItem.init({
    tftParticipantUnitItemId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_participant_unit_item_id'
    },
    tftParticipantUnitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_participant_unit',
        key: 'tft_participant_unit_id'
      },
      field: 'tft_participant_unit_id'
    },
    tftItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_item',
        key: 'tft_item_id'
      },
      field: 'tft_item_id'
    }
  }, {
    sequelize,
    tableName: 'tft_participant_unit_item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_participant_unit_item_pkey",
        unique: true,
        fields: [
          { name: "tft_participant_unit_item_id" },
        ]
      },
    ]
  });
  return TftParticipantUnitItem;
  }
}
