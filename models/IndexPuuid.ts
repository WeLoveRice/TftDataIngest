/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface IndexPuuidAttributes {
  uuid?: string;
  key1?: string;
  key2?: string;
}

export class IndexPuuid extends Model<IndexPuuidAttributes, IndexPuuidAttributes> implements IndexPuuidAttributes {
  uuid?: string;
  key1?: string;
  key2?: string;

  static initModel(sequelize: Sequelize) {
    IndexPuuid.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    key1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'KEY_1'
    },
    key2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'KEY_2'
    }
  }, {
    sequelize,
    tableName: 'index_puuid',
    schema: 'public',
    timestamps: false
  });
  return IndexPuuid;
  }
}
