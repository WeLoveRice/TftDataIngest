import { createLogger } from "./Logger";
import { addKeysToRedis } from "./api/riot/keyManager";
import { fetchMatches } from "./periodicTask/TftMatchFetcher";
import { initialiseSummoners } from "./database/summonerInit";
import { Postgres } from "./api/postgres";
import { upsertApiKeys } from "./database/apiKeyInit";

export const main = async (): Promise<void> => {
  try {
    await Postgres.getSequelize();
    await upsertApiKeys();
    await addKeysToRedis();
    await initialiseSummoners();
    await fetchMatches();
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
