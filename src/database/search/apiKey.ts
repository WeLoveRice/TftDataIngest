import { Transaction } from "sequelize/types";
import { TftApiKey } from "../../../models/TftApiKey";

export const findApiKeyByRiotKey = async (
  riotApiKey: string,
  transaction?: Transaction
) => {
  const tftApiKey = await TftApiKey.findOne({
    where: {
      riotApiKey,
    },
    transaction,
  });
  if (!tftApiKey) {
    throw new Error(`Cannot find tftApiKey by riotApiKey ${riotApiKey}`);
  }
  return tftApiKey;
};
