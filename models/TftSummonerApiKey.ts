/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftSummonerApiKeyAttributes {
  tftSummonerApiKeyId?: number;
  tftSummonerId?: number;
  tftApiKeyId?: number;
  encryptedPlayerUuid?: string;
  encryptedSummonerId?: string;
}

export class TftSummonerApiKey extends Model<TftSummonerApiKeyAttributes, TftSummonerApiKeyAttributes> implements TftSummonerApiKeyAttributes {
  tftSummonerApiKeyId?: number;
  tftSummonerId?: number;
  tftApiKeyId?: number;
  encryptedPlayerUuid?: string;
  encryptedSummonerId?: string;

  static initModel(sequelize: Sequelize) {
    TftSummonerApiKey.init({
    tftSummonerApiKeyId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_summoner_api_key_id'
    },
    tftSummonerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_summoner',
        key: 'tft_summoner_id'
      },
      unique: "tft_summoner_api_key_unq",
      field: 'tft_summoner_id'
    },
    tftApiKeyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_api_key',
        key: 'tft_api_key_id'
      },
      unique: "tft_summoner_api_key_unq",
      field: 'tft_api_key_id'
    },
    encryptedPlayerUuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'encrypted_player_uuid'
    },
    encryptedSummonerId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'encrypted_summoner_id'
    }
  }, {
    sequelize,
    tableName: 'tft_summoner_api_key',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_summoner_api_key_pkey",
        unique: true,
        fields: [
          { name: "tft_summoner_api_key_id" },
        ]
      },
      {
        name: "tft_summoner_api_key_unq",
        unique: true,
        fields: [
          { name: "tft_summoner_id" },
          { name: "tft_api_key_id" },
        ]
      },
    ]
  });
  return TftSummonerApiKey;
  }
}
