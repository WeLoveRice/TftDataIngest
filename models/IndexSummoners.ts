/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface IndexSummonersAttributes {
  summonerName?: string;
  id?: string;
  accountId?: string;
  puuid?: string;
}

export class IndexSummoners extends Model<IndexSummonersAttributes, IndexSummonersAttributes> implements IndexSummonersAttributes {
  summonerName?: string;
  id?: string;
  accountId?: string;
  puuid?: string;

  static initModel(sequelize: Sequelize) {
    IndexSummoners.init({
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
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
          { name: "summonerName" },
        ]
      },
    ]
  });
  return IndexSummoners;
  }
}
