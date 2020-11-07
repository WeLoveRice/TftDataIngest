/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftTraitAttributes {
  tftTraitId?: number;
  tftTraitName?: string;
  tierCurrent?: number;
}

export class TftTrait extends Model<TftTraitAttributes, TftTraitAttributes> implements TftTraitAttributes {
  tftTraitId?: number;
  tftTraitName?: string;
  tierCurrent?: number;

  static initModel(sequelize: Sequelize) {
    TftTrait.init({
    tftTraitId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_trait_id'
    },
    tftTraitName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'tft_trait_name'
    },
    tierCurrent: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'tier_current'
    }
  }, {
    sequelize,
    tableName: 'tft_trait',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_trait_pkey",
        unique: true,
        fields: [
          { name: "tft_trait_id" },
        ]
      },
    ]
  });
  return TftTrait;
  }
}
