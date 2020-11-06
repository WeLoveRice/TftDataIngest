/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ProcessedUnitsAttributes {
  matchId?: string;
  uuid?: string;
  summonerName?: string;
  name?: string;
  value?: string;
  champion?: string;
}

export class ProcessedUnits extends Model<ProcessedUnitsAttributes, ProcessedUnitsAttributes> implements ProcessedUnitsAttributes {
  matchId?: string;
  uuid?: string;
  summonerName?: string;
  name?: string;
  value?: string;
  champion?: string;

  static initModel(sequelize: Sequelize) {
    ProcessedUnits.init({
    matchId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'match_id'
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    champion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'processed_units',
    schema: 'public',
    timestamps: false
  });
  return ProcessedUnits;
  }
}
