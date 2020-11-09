import { Transaction } from "sequelize";
import { ApiResponseDTO, MatchTFTDTO } from "twisted/dist/models-dto";
import { TftMatch } from "../../../models/TftMatch";

export const upsertMatch = async ({
  response,
}: ApiResponseDTO<MatchTFTDTO>): Promise<TftMatch> => {
  const {
    game_datetime,
    game_length,
    game_version,
    queue_id,
    tft_set_number,
  } = response.info;

  const [result] = await TftMatch.upsert({
    tftMatchId: response.metadata.match_id,
    gameTimestamp: new Date(game_datetime),
    gameLength: Math.round(game_length),
    gameVersion: game_version,
    queueId: queue_id,
    tftSetNumber: tft_set_number,
  });

  return result;
};
