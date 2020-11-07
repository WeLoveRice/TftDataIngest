/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftParticipantTraitAttributes {
  tftParticipantTraitId?: number;
  tftParticipantId?: number;
  tftTraitId?: number;
  numUnits?: number;
}

export class TftParticipantTrait extends Model<TftParticipantTraitAttributes, TftParticipantTraitAttributes> implements TftParticipantTraitAttributes {
  tftParticipantTraitId?: number;
  tftParticipantId?: number;
  tftTraitId?: number;
  numUnits?: number;

  static initModel(sequelize: Sequelize) {
    TftParticipantTrait.init({
    tftParticipantTraitId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_participant_trait_id'
    },
    tftParticipantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_participant',
        key: 'tft_participant_id'
      },
      unique: "tft_participant_trait_unq",
      field: 'tft_participant_id'
    },
    tftTraitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "tft_participant_trait_unq",
      field: 'tft_trait_id'
    },
    numUnits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'num_units'
    }
  }, {
    sequelize,
    tableName: 'tft_participant_trait',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_participant_trait_pkey",
        unique: true,
        fields: [
          { name: "tft_participant_trait_id" },
        ]
      },
      {
        name: "tft_participant_trait_unq",
        unique: true,
        fields: [
          { name: "tft_participant_id" },
          { name: "tft_trait_id" },
        ]
      },
    ]
  });
  return TftParticipantTrait;
  }
}
