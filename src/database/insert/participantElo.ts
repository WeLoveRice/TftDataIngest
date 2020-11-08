import { Transaction } from "sequelize/types";
import {
  TftElo,
  TftParticipant,
  TftParticipantElo,
  TftSummoner,
} from "../../../models/init-models";
import { TftSummonerApiKey } from "../../../models/TftSummonerApiKey";
import { fetchLeagueBySummonerApiKey } from "../../api/riot/riot";
import { createLogger } from "../../Logger";

export const insertParticipantElo = async (
  participant: TftParticipant,
  tftSummonerApiKey: TftSummonerApiKey,
  transaction: Transaction
) => {
  const { response } = await fetchLeagueBySummonerApiKey(tftSummonerApiKey);
  if (response.length === 0) {
    const logger = createLogger();
    const summoner = await TftSummoner.findByPk(
      tftSummonerApiKey.tftSummonerId
    );
    logger.info(`${summoner?.summonerName} does not have a rank`);
    return;
  }
  const { tier, rank, leaguePoints } = response[0];

  const elo = await TftElo.findOne({
    where: {
      tier,
      rank,
      lp: leaguePoints,
    },
  });

  await TftParticipantElo.create(
    {
      tftEloId: elo?.tftEloId,
      tftParticipantId: participant.tftParticipantId,
    },
    { transaction }
  );
};
