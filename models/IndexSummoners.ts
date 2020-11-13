/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface IndexSummonersAttributes {
  uuid?: string;
  summonerName?: string;
}

export class IndexSummoners extends Model<IndexSummonersAttributes, IndexSummonersAttributes> implements IndexSummonersAttributes {
  uuid?: string;
  summonerName?: string;

  static initModel(sequelize: Sequelize) {
    IndexSummoners.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'index_summoners',
    schema: 'public',
    timestamps: false
  });
  return IndexSummoners;
  }
}
