/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface IndexMatchesAttributes {
  matchId?: string;
  set?: number;
  queueId?: number;
  date?: Date;
  dataVer?: string;
  gameVersion?: string;
}

export class IndexMatches extends Model<IndexMatchesAttributes, IndexMatchesAttributes> implements IndexMatchesAttributes {
  matchId?: string;
  set?: number;
  queueId?: number;
  date?: Date;
  dataVer?: string;
  gameVersion?: string;

  static initModel(sequelize: Sequelize) {
    IndexMatches.init({
    matchId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      field: 'match_id'
    },
    set: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    queueId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'queue_id'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataVer: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'data_ver'
    },
    gameVersion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'game_version'
    }
  }, {
    sequelize,
    tableName: 'index_matches',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "index_matches_pkey",
        unique: true,
        fields: [
          { name: "match_id" },
        ]
      },
    ]
  });
  return IndexMatches;
  }
}
