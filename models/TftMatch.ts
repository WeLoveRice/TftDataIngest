/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftMatchAttributes {
  tftMatchId?: string;
  gameTimestamp?: Date;
  gameLength?: number;
  gameVersion?: string;
  queueId?: number;
  tftSetNumber?: number;
}

export class TftMatch extends Model<TftMatchAttributes, TftMatchAttributes> implements TftMatchAttributes {
  tftMatchId?: string;
  gameTimestamp?: Date;
  gameLength?: number;
  gameVersion?: string;
  queueId?: number;
  tftSetNumber?: number;

  static initModel(sequelize: Sequelize) {
    TftMatch.init({
    tftMatchId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: "riot_match_id",
      field: 'tft_match_id'
    },
    gameTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'game_timestamp'
    },
    gameLength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'game_length'
    },
    gameVersion: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'game_version'
    },
    queueId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'queue_id'
    },
    tftSetNumber: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'tft_set_number'
    }
  }, {
    sequelize,
    tableName: 'tft_match',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "riot_match_id",
        unique: true,
        fields: [
          { name: "tft_match_id" },
        ]
      },
      {
        name: "tft_matches_pkey",
        unique: true,
        fields: [
          { name: "tft_match_id" },
        ]
      },
    ]
  });
  return TftMatch;
  }
}
