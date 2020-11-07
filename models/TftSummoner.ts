/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftSummonerAttributes {
  tftSummonerId?: number;
  summonerName?: string;
  encryptedPlayerUuid?: string;
  encryptedSummonerId?: string;
  summonerRegion?: string;
}

export class TftSummoner extends Model<TftSummonerAttributes, TftSummonerAttributes> implements TftSummonerAttributes {
  tftSummonerId?: number;
  summonerName?: string;
  encryptedPlayerUuid?: string;
  encryptedSummonerId?: string;
  summonerRegion?: string;

  static initModel(sequelize: Sequelize) {
    TftSummoner.init({
    tftSummonerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_summoner_id'
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "tft_summoner_name_region_unq",
      field: 'summoner_name'
    },
    encryptedPlayerUuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'encrypted_player_uuid'
    },
    encryptedSummonerId: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "riot_id_unq",
      field: 'encrypted_summoner_id'
    },
    summonerRegion: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "tft_summoner_name_region_unq",
      field: 'summoner_region'
    }
  }, {
    sequelize,
    tableName: 'tft_summoner',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "riot_id_unq",
        unique: true,
        fields: [
          { name: "encrypted_summoner_id" },
        ]
      },
      {
        name: "tft_summoner_name_region_unq",
        unique: true,
        fields: [
          { name: "summoner_name" },
          { name: "summoner_region" },
        ]
      },
      {
        name: "tft_summoner_pkey",
        unique: true,
        fields: [
          { name: "tft_summoner_id" },
        ]
      },
    ]
  });
  return TftSummoner;
  }
}
