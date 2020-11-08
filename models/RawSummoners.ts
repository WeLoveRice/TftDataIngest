/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface RawSummonersAttributes {
  uuid?: string;
  key1?: any;
  key2?: any;
}

export class RawSummoners extends Model<RawSummonersAttributes, RawSummonersAttributes> implements RawSummonersAttributes {
  uuid?: string;
  key1?: any;
  key2?: any;

  static initModel(sequelize: Sequelize) {
    RawSummoners.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    key1: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'KEY_1'
    },
    key2: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'KEY_2'
    }
  }, {
    sequelize,
    tableName: 'raw_summoners',
    schema: 'public',
    timestamps: false
  });
  return RawSummoners;
  }
}
