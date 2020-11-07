/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftParticipantLinkAttributes {
  tftParticipantId?: number;
  tftMatchId?: string;
  tftSummonerId?: number;
}

export class TftParticipantLink extends Model<TftParticipantLinkAttributes, TftParticipantLinkAttributes> implements TftParticipantLinkAttributes {
  tftParticipantId?: number;
  tftMatchId?: string;
  tftSummonerId?: number;

  static initModel(sequelize: Sequelize) {
    TftParticipantLink.init({
    tftParticipantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tft_participant',
        key: 'tft_participant_id'
      },
      unique: "tft_participant_match_unq",
      field: 'tft_participant_id'
    },
    tftMatchId: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'tft_match',
        key: 'tft_match_id'
      },
      unique: "tft_participant_match_unq",
      field: 'tft_match_id'
    },
    tftSummonerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tft_summoner',
        key: 'tft_summoner_id'
      },
      unique: "tft_match_summoner",
      field: 'tft_summoner_id'
    }
  }, {
    sequelize,
    tableName: 'tft_participant_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fki_tft_match_details_riot_id_fk",
        fields: [
          { name: "tft_match_id" },
        ]
      },
      {
        name: "fki_tft_participant_result_id_fk",
        fields: [
          { name: "tft_participant_id" },
        ]
      },
      {
        name: "tft_match_summoner",
        unique: true,
        fields: [
          { name: "tft_match_id" },
          { name: "tft_summoner_id" },
        ]
      },
      {
        name: "tft_participant_link_pkey",
        unique: true,
        fields: [
          { name: "tft_participant_id" },
        ]
      },
      {
        name: "tft_participant_match_unq",
        unique: true,
        fields: [
          { name: "tft_participant_id" },
          { name: "tft_match_id" },
        ]
      },
    ]
  });
  return TftParticipantLink;
  }
}
