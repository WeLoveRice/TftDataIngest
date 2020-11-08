/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftSummonerEloAttributes {
  tftSummonerEloId?: number;
  tftSummonerId?: number;
  tftEloId?: number;
  summonerEloTimestamp?: Date;
}

export class TftSummonerElo extends Model<TftSummonerEloAttributes, TftSummonerEloAttributes> implements TftSummonerEloAttributes {
  tftSummonerEloId?: number;
  tftSummonerId?: number;
  tftEloId?: number;
  summonerEloTimestamp?: Date;

  static initModel(sequelize: Sequelize) {
    TftSummonerElo.init({
    tftSummonerEloId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_summoner_elo_id'
    },
    tftSummonerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_summoner',
        key: 'tft_summoner_id'
      },
      unique: "tft_summoner_elo_timestamp_unq",
      field: 'tft_summoner_id'
    },
    tftEloId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_elo',
        key: 'tft_elo_id'
      },
      unique: "tft_summoner_elo_timestamp_unq",
      field: 'tft_elo_id'
    },
    summonerEloTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: "tft_summoner_elo_timestamp_unq",
      field: 'summoner_elo_timestamp'
    }
  }, {
    sequelize,
    tableName: 'tft_summoner_elo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_summoner_elo_pkey",
        unique: true,
        fields: [
          { name: "tft_summoner_elo_id" },
        ]
      },
      {
        name: "tft_summoner_elo_timestamp_unq",
        unique: true,
        fields: [
          { name: "tft_summoner_id" },
          { name: "tft_elo_id" },
          { name: "summoner_elo_timestamp" },
        ]
      },
    ]
  });
  return TftSummonerElo;
  }
}
