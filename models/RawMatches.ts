/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface RawMatchesAttributes {
  matchId?: string;
  json?: any;
}

export class RawMatches extends Model<RawMatchesAttributes, RawMatchesAttributes> implements RawMatchesAttributes {
  matchId?: string;
  json?: any;

  static initModel(sequelize: Sequelize) {
    RawMatches.init({
    matchId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'match_id'
    },
    json: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'raw_matches',
    schema: 'public',
    timestamps: false
  });
  return RawMatches;
  }
}
