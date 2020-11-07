import { ApiResponseDTO, MatchTFTDTO } from "twisted/dist/models-dto";
import { TftMatch } from "../../../models/TftMatch";
import { Postgres } from "../../api/postgres";
import { createLogger } from "../../Logger";

export const insertMatch = async ({
  response,
}: ApiResponseDTO<MatchTFTDTO>): Promise<TftMatch> => {
  const logger = createLogger();
  const {
    game_datetime,
    game_length,
    game_version,
    queue_id,
    tft_set_number,
  } = response.info;

  const transaction = await Postgres.getTransaction();

  const [result] = await TftMatch.upsert(
    {
      tftMatchId: response.metadata.match_id,
      gameTimestamp: new Date(game_datetime),
      gameLength: Math.round(game_length),
      gameVersion: game_version,
      queueId: queue_id,
      tftSetNumber: tft_set_number,
    },
    { transaction }
  );

  logger.info(`Inserted match_detail with ID: ${result.tftMatchId}`);

  return result;
};
