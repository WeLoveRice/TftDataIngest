import { Transaction } from "sequelize/types";
import { TftSummoner, TftSummonerElo } from "../../../models/init-models";

export const hasSummonerRank = async (
  summoner: TftSummoner,
  transaction: Transaction
) => {
  const count = await TftSummonerElo.count({
    where: {
      tftSummonerId: summoner?.tftSummonerId,
    },
    transaction,
  });

  return count > 0;
};
