import {
  TftElo,
  TftParticipant,
  TftParticipantElo,
  TftSummoner,
} from "../../../models/init-models";
import { Postgres } from "../../api/postgres";
import { fetchLeagueBySummoner } from "../../api/riot";
import { createLogger } from "../../Logger";

export const insertParticipantElo = async (
  participant: TftParticipant,
  summoner: TftSummoner
) => {
  const { response } = await fetchLeagueBySummoner(summoner);
  if (response.length === 0) {
    const logger = createLogger();
    logger.info(`${summoner.summonerName} does not have a rank`);
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

  const transaction = await Postgres.getTransaction();

  await TftParticipantElo.create(
    {
      tftEloId: elo?.tftEloId,
      tftParticipantId: participant.tftParticipantId,
    },
    { transaction }
  );
};
