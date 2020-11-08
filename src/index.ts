import { createLogger } from "./Logger";
import { addKeysToRedis } from "./api/riot/keyManager";
import { fetchMatches } from "./periodicTask/TftSummonerMatchFetcher";
import { initialiseSummoners } from "./database/summonerInit";
import { Postgres } from "./api/postgres";
import { upsertApiKeys } from "./database/apiKeyInit";
import { ingestDataForHighElo } from "./ingest/summonerMatches";

export const main = async (): Promise<void> => {
  try {
    await Postgres.getSequelize();
    await upsertApiKeys();
    await addKeysToRedis();
    await initialiseSummoners();
    await fetchMatches();

    await ingestDataForHighElo();
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
