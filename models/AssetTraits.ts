/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface AssetTraitsAttributes {
  key?: string;
  name?: string;
  description?: string;
  type?: string;
  innate?: string;
  minBronze?: number;
  minGold?: number;
  minChromatic?: number;
  maxBronze?: number;
  maxGold?: number;
  maxChromatic?: number;
  minSilver?: number;
  maxSilver?: number;
}

export class AssetTraits extends Model<AssetTraitsAttributes, AssetTraitsAttributes> implements AssetTraitsAttributes {
  key?: string;
  name?: string;
  description?: string;
  type?: string;
  innate?: string;
  minBronze?: number;
  minGold?: number;
  minChromatic?: number;
  maxBronze?: number;
  maxGold?: number;
  maxChromatic?: number;
  minSilver?: number;
  maxSilver?: number;

  static initModel(sequelize: Sequelize) {
    AssetTraits.init({
    key: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    innate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    minBronze: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'min_bronze'
    },
    minGold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'min_gold'
    },
    minChromatic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'min_chromatic'
    },
    maxBronze: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'max_bronze'
    },
    maxGold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'max_gold'
    },
    maxChromatic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'max_chromatic'
    },
    minSilver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'min_silver'
    },
    maxSilver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'max_silver'
    }
  }, {
    sequelize,
    tableName: 'asset_traits',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asset_traits_pkey",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
    ]
  });
  return AssetTraits;
  }
}
