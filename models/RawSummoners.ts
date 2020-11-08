/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface RawSummonersAttributes {
  uuid?: string;
  json?: any;
}

export class RawSummoners extends Model<RawSummonersAttributes, RawSummonersAttributes> implements RawSummonersAttributes {
  uuid?: string;
  json?: any;

  static initModel(sequelize: Sequelize) {
    RawSummoners.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    json: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'raw_summoners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "raw_summoners_pkey",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  return RawSummoners;
  }
}
