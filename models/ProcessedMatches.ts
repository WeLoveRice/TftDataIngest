/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ProcessedMatchesAttributes {
  uuid?: string;
  summonerName?: string;
  matchId?: string;
  level?: number;
  goldLeft?: number;
  lastRound?: number;
  placement?: number;
  playersEliminated?: number;
  timeEliminated?: number;
  totalDamageToPlayers?: number;
  chosenUnit?: string;
  chosenTrait?: string;
  tftSetNumber?: number;
  gameVersion?: string;
}

export class ProcessedMatches extends Model<ProcessedMatchesAttributes, ProcessedMatchesAttributes> implements ProcessedMatchesAttributes {
  uuid?: string;
  summonerName?: string;
  matchId?: string;
  level?: number;
  goldLeft?: number;
  lastRound?: number;
  placement?: number;
  playersEliminated?: number;
  timeEliminated?: number;
  totalDamageToPlayers?: number;
  chosenUnit?: string;
  chosenTrait?: string;
  tftSetNumber?: number;
  gameVersion?: string;

  static initModel(sequelize: Sequelize) {
    ProcessedMatches.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    matchId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'match_id'
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goldLeft: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'gold_left'
    },
    lastRound: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'last_round'
    },
    placement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    playersEliminated: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'players_eliminated'
    },
    timeEliminated: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'time_eliminated'
    },
    totalDamageToPlayers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'total_damage_to_players'
    },
    chosenUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'chosen_unit'
    },
    chosenTrait: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'chosen_trait'
    },
    tftSetNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tft_set_number'
    },
    gameVersion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'game_version'
    }
  }, {
    sequelize,
    tableName: 'processed_matches',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "processed_matches_pkey",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  return ProcessedMatches;
  }
}
