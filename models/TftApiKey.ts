/* jshint indent: 2 */

import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface TftApiKeyAttributes {
  tftApiKeyId: number;
  riotApiKey: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
type TftApiKeyCreationAttributes = Optional<TftApiKeyAttributes, "tftApiKeyId">;

export class TftApiKey
  extends Model<TftApiKeyAttributes, TftApiKeyCreationAttributes>
  implements TftApiKeyAttributes {
  tftApiKeyId!: number;
  riotApiKey!: string;

  static initModel(sequelize: Sequelize) {
    TftApiKey.init(
      {
        tftApiKeyId: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          field: "tft_api_key_id",
        },
        riotApiKey: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: "riot_api_key_unq",
          field: "riot_api_key",
        },
      },
      {
        sequelize,
        tableName: "tft_api_key",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "riot_api_key_unq",
            unique: true,
            fields: [{ name: "riot_api_key" }],
          },
          {
            name: "tft_api_key_pkey",
            unique: true,
            fields: [{ name: "tft_api_key_id" }],
          },
        ],
      }
    );
    return TftApiKey;
  }
}
