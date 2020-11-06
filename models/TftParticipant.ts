/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftParticipantAttributes {
  tftParticipantId?: number;
  level?: number;
  goldLeft?: number;
  placement?: number;
  lastRound?: number;
  playersEliminated?: number;
  totalDmgToPlayers?: number;
}

export class TftParticipant extends Model<TftParticipantAttributes, TftParticipantAttributes> implements TftParticipantAttributes {
  tftParticipantId?: number;
  level?: number;
  goldLeft?: number;
  placement?: number;
  lastRound?: number;
  playersEliminated?: number;
  totalDmgToPlayers?: number;

  static initModel(sequelize: Sequelize) {
    TftParticipant.init({
    tftParticipantId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_participant_id'
    },
    level: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    goldLeft: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'gold_left'
    },
    placement: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    lastRound: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'last_round'
    },
    playersEliminated: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'players_eliminated'
    },
    totalDmgToPlayers: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'total_dmg_to_players'
    }
  }, {
    sequelize,
    tableName: 'tft_participant',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_participant_result_pkey",
        unique: true,
        fields: [
          { name: "tft_participant_id" },
        ]
      },
    ]
  });
  return TftParticipant;
  }
}
