/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface AssetChampionsAttributes {
  name?: string;
  championId?: string;
  cost?: number;
  traits?: string;
}

export class AssetChampions extends Model<AssetChampionsAttributes, AssetChampionsAttributes> implements AssetChampionsAttributes {
  name?: string;
  championId?: string;
  cost?: number;
  traits?: string;

  static initModel(sequelize: Sequelize) {
    AssetChampions.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    championId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    traits: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asset_champions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asset_champions_pkey",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  return AssetChampions;
  }
}
