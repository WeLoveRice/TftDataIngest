/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface AssetItemsAttributes {
  id?: number;
  name?: string;
  description?: string;
}

export class AssetItems extends Model<AssetItemsAttributes, AssetItemsAttributes> implements AssetItemsAttributes {
  id?: number;
  name?: string;
  description?: string;

  static initModel(sequelize: Sequelize) {
    AssetItems.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asset_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asset_items_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return AssetItems;
  }
}
