/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface IndexSummonersAttributes {
  uuid?: string;
  summonerName?: string;
  id?: string;
  accountId?: string;
  puuid?: string;
}

export class IndexSummoners extends Model<IndexSummonersAttributes, IndexSummonersAttributes> implements IndexSummonersAttributes {
  uuid?: string;
  summonerName?: string;
  id?: string;
  accountId?: string;
  puuid?: string;

  static initModel(sequelize: Sequelize) {
    IndexSummoners.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accountId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    puuid: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'index_summoners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "index_summoners_pkey",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  return IndexSummoners;
  }
}
