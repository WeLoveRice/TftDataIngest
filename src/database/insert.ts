import { TftSummoner } from "../../models/TftSummoner";
import { Postgres } from "../api/postgres";
import { getMatchDetail, getParticipantFromMatch } from "../api/riot";
import { Queue } from "../enum/Queue";
import { insertMatch } from "./insert/match";
import { insertParticipant } from "./insert/participant";
import { insertParticipantElo } from "./insert/participantElo";
import { insertParaticipantLink } from "./insert/participantLink";
import { insertParticipantTrait } from "./insert/participantTrait";
import { insertParticipantUnit } from "./insert/participantUnit";
import { matchExists } from "./search";

export const insertDataForMatchAndSummoner = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const transaction = await Postgres.getTransaction();
  const match = await getMatchDetail(matchId);
  if (!(await matchExists(match))) {
    await insertMatch(match);
  }
  const participantDto = await getParticipantFromMatch(match, summoner);
  const participant = await insertParticipant(participantDto);

  // Only check rank if game was ranked
  if (match.response.info.queue_id == Queue.RANKED_TFT) {
    await insertParticipantElo(participant, summoner);
  }
  await insertParaticipantLink(match, participant, summoner);
  await insertParticipantUnit(participant, participantDto.units);
  await insertParticipantTrait(participantDto, participant);
  await transaction.commit();
  await Postgres.newTransaction();
};
