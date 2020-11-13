import { TftRegions } from "twisted/dist/constants";
import { TftSummoner } from "../../../../models/init-models";
import { Postgres } from "../../../api/postgres";
import { releaseKey } from "../../../api/riot/keyManager";
import { getParticipantFromMatch, getTftApi } from "../../../api/riot/riot";
import { Queue } from "../../../enum/Queue";
import { findOrCreateTftSummonerApiKey } from "../../search";
import { findOrCreateMatchByDto } from "../match";
import { insertParticipantElo } from "../participantElo";
import { insertParticipantData } from "./tftParticipant";

export const insertDataForMatchAndSummoner = async (
  matchId: string,
  summoner: TftSummoner
): Promise<void> => {
  const [tftApi, apiKey] = await getTftApi();
  const match = await tftApi.Match.get(matchId, TftRegions.EUROPE);
  await releaseKey(apiKey);

  await findOrCreateMatchByDto(match.response);
  const tftSummonerApiKey = await findOrCreateTftSummonerApiKey(
    summoner,
    apiKey
  );
  const participantDto = await getParticipantFromMatch(
    match,
    tftSummonerApiKey
  );

  const transaction = await Postgres.newTransaction();

  const participant = await insertParticipantData(
    participantDto,
    match.response,
    summoner,
    transaction
  );
  // Only check rank if game was ranked
  if (match.response.info.queue_id == Queue.RANKED_TFT) {
    await insertParticipantElo(participant, tftSummonerApiKey, transaction);
  }
  await transaction.commit();
};
