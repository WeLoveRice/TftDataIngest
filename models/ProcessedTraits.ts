/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ProcessedTraitsAttributes {
  matchId?: string;
  uuid?: string;
  summonerName?: string;
  name?: string;
  value?: number;
  trait?: string;
}

export class ProcessedTraits extends Model<ProcessedTraitsAttributes, ProcessedTraitsAttributes> implements ProcessedTraitsAttributes {
  matchId?: string;
  uuid?: string;
  summonerName?: string;
  name?: string;
  value?: number;
  trait?: string;

  static initModel(sequelize: Sequelize) {
    ProcessedTraits.init({
    matchId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'match_id'
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trait: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'processed_traits',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "processed_traits_pkey",
        unique: true,
        fields: [
          { name: "uuid" },
          { name: "name" },
          { name: "trait" },
        ]
      },
    ]
  });
  return ProcessedTraits;
  }
}
