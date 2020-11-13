import { Transaction } from "sequelize/types";
import { TftApiKey } from "../../../models/TftApiKey";

export const findApiKeyByRiotKey = async (
  riotApiKey: string,
  transaction?: Transaction
) => {
  return TftApiKey.findOne({
    where: {
      riotApiKey,
    },
    transaction,
  });
};
