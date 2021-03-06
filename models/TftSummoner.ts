/* jshint indent: 2 */

import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface TftSummonerAttributes {
  tftSummonerId: number;
  summonerName: string;
  summonerRegion: string;
}

type TftSummonerCreationAttributes = Optional<
  TftSummonerAttributes,
  "tftSummonerId"
>;

export class TftSummoner
  extends Model<TftSummonerAttributes, TftSummonerCreationAttributes>
  implements TftSummonerAttributes {
  tftSummonerId!: number;
  summonerName!: string;
  summonerRegion!: string;

  static initModel(sequelize: Sequelize) {
    TftSummoner.init(
      {
        tftSummonerId: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          field: "tft_summoner_id",
        },
        summonerName: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: "tft_summoner_name_region_unq",
          field: "summoner_name",
        },
        summonerRegion: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: "tft_summoner_name_region_unq",
          field: "summoner_region",
        },
      },
      {
        sequelize,
        tableName: "tft_summoner",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "tft_summoner_name_region_unq",
            unique: true,
            fields: [{ name: "summoner_name" }, { name: "summoner_region" }],
          },
          {
            name: "tft_summoner_pkey",
            unique: true,
            fields: [{ name: "tft_summoner_id" }],
          },
        ],
      }
    );
    return TftSummoner;
  }
}
