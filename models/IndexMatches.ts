/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface IndexMatchesAttributes {
  matchId?: string;
  set?: number;
  queueId?: number;
}

export class IndexMatches extends Model<IndexMatchesAttributes, IndexMatchesAttributes> implements IndexMatchesAttributes {
  matchId?: string;
  set?: number;
  queueId?: number;

  static initModel(sequelize: Sequelize) {
    IndexMatches.init({
    matchId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      field: 'match_id'
    },
    set: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    queueId: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'queue_id'
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
