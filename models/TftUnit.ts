/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftUnitAttributes {
  tftUnitId?: number;
  tftCharacterId?: string;
  cost?: number;
  tier?: number;
  chosen?: string;
}

export class TftUnit extends Model<TftUnitAttributes, TftUnitAttributes> implements TftUnitAttributes {
  tftUnitId?: number;
  tftCharacterId?: string;
  cost?: number;
  tier?: number;
  chosen?: string;

  static initModel(sequelize: Sequelize) {
    TftUnit.init({
    tftUnitId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_unit_id'
    },
    tftCharacterId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'tft_character_id'
    },
    cost: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    tier: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    chosen: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tft_unit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_unit_pkey",
        unique: true,
        fields: [
          { name: "tft_unit_id" },
        ]
      },
    ]
  });
  return TftUnit;
  }
}
