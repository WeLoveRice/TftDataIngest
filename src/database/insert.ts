import { TftSummoner } from "../../models/TftSummoner";
import { Postgres } from "../api/postgres";
import { getMatchDetail, getParticipantFromMatch } from "../api/riot";
import { Queue } from "../enum/Queue";
import { insertMatch } from "./insert/match";
import { insertParticipant } from "./insert/participant";
import { insertParticipantElo } from "./insert/participantElo";
import { insertParticipantLink } from "./insert/participantLink";
import { insertParticipantTrait } from "./insert/participantTrait";
import { insertParticipantUnit } from "./insert/participantUnit";
import { insertParticipantUnitItem } from "./insert/participantUnitItem";
import { matchExists } from "./search";

export const insertDataForMatchAndSummoner = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const transaction = await Postgres.newTransaction();
  const match = await getMatchDetail(matchId);
  if (!(await matchExists(match))) {
    await insertMatch(match, transaction);
  }
  const participantDto = await getParticipantFromMatch(match, summoner);
  const participant = await insertParticipant(participantDto, transaction);

  // Only check rank if game was ranked
  if (match.response.info.queue_id == Queue.RANKED_TFT) {
    await insertParticipantElo(participant, summoner, transaction);
  }

  await insertParticipantLink(match, participant, summoner, transaction);
  await insertParticipantUnit(participant, participantDto.units, transaction);
  await insertParticipantUnitItem(participant, participantDto, transaction);
  await insertParticipantTrait(participant, participantDto, transaction);

  await transaction.commit();
};
