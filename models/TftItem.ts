/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftItemAttributes {
  tftItemId?: number;
  itemName?: string;
  itemDesc?: string;
}

export class TftItem extends Model<TftItemAttributes, TftItemAttributes> implements TftItemAttributes {
  tftItemId?: number;
  itemName?: string;
  itemDesc?: string;

  static initModel(sequelize: Sequelize) {
    TftItem.init({
    tftItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_item_id'
    },
    itemName: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "tft_item_name_unq",
      field: 'item_name'
    },
    itemDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'item_desc'
    }
  }, {
    sequelize,
    tableName: 'tft_item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_item_name_unq",
        unique: true,
        fields: [
          { name: "item_name" },
        ]
      },
      {
        name: "tft_item_pkey",
        unique: true,
        fields: [
          { name: "tft_item_id" },
        ]
      },
    ]
  });
  return TftItem;
  }
}
