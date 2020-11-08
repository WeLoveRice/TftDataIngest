import { Transaction } from "sequelize";
import {
  TftElo,
  TftParticipant,
  TftParticipantElo,
  TftSummoner,
} from "../../../models/init-models";
import { TftSummonerApiKey } from "../../../models/TftSummonerApiKey";
import { fetchLeagueBySummonerApiKey } from "../../api/riot/riot";
import { createLogger } from "../../Logger";

// We need to be specific with which api key we used as we can only
// fetch a summoner with their corresponding api key
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
