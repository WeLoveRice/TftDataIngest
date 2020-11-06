/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftParticipantEloAttributes {
  tftParticipantsEloId?: number;
  tftParticipantId?: number;
  tftEloId?: number;
}

export class TftParticipantElo extends Model<TftParticipantEloAttributes, TftParticipantEloAttributes> implements TftParticipantEloAttributes {
  tftParticipantsEloId?: number;
  tftParticipantId?: number;
  tftEloId?: number;

  static initModel(sequelize: Sequelize) {
    TftParticipantElo.init({
    tftParticipantsEloId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_participants_elo_id'
    },
    tftParticipantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_participant',
        key: 'tft_participant_id'
      },
      unique: "tft_participant_elo_id_unq",
      field: 'tft_participant_id'
    },
    tftEloId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_elo',
        key: 'tft_elo_id'
      },
      unique: "tft_participant_elo_id_unq",
      field: 'tft_elo_id'
    }
  }, {
    sequelize,
    tableName: 'tft_participant_elo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_participant_elo_id_unq",
        unique: true,
        fields: [
          { name: "tft_participant_id" },
          { name: "tft_elo_id" },
        ]
      },
      {
        name: "tft_participants_elos_pkey",
        unique: true,
        fields: [
          { name: "tft_participants_elo_id" },
        ]
      },
    ]
  });
  return TftParticipantElo;
  }
}
