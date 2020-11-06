/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TftEloAttributes {
  tftEloId?: number;
  tier?: string;
  rank?: string;
  lp?: number;
}

export class TftElo extends Model<TftEloAttributes, TftEloAttributes> implements TftEloAttributes {
  tftEloId?: number;
  tier?: string;
  rank?: string;
  lp?: number;

  static initModel(sequelize: Sequelize) {
    TftElo.init({
    tftEloId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tft_elo_id'
    },
    tier: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "tier_rank_lp_unq"
    },
    rank: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "tier_rank_lp_unq"
    },
    lp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "tier_rank_lp_unq"
    }
  }, {
    sequelize,
    tableName: 'tft_elo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tft_elo_id_pk",
        unique: true,
        fields: [
          { name: "tft_elo_id" },
        ]
      },
      {
        name: "tier_rank_lp_unq",
        unique: true,
        fields: [
          { name: "tier" },
          { name: "rank" },
          { name: "lp" },
        ]
      },
    ]
  });
  return TftElo;
  }
}
