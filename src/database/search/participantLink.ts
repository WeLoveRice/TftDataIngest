import { Transaction } from "sequelize/types";
import { TftParticipantLink, TftSummoner } from "../../../models/init-models";

export const hasLinkBeenProcessed = async (
  matchId: string,
  summoner: TftSummoner,
  transaction: Transaction
) => {
  const count = await TftParticipantLink.count({
    where: {
      tftMatchId: matchId,
      tftSummonerId: summoner?.tftSummonerId,
    },
    transaction,
  });

  return count > 0;
};
