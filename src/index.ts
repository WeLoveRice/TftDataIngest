import { createLogger } from "./Logger";
import { fetchMatches } from "./periodicTask/TftSummonerMatchFetcher";
import { initialiseSummoners } from "./database/summonerInit";
import { Postgres } from "./api/postgres";
import { upsertApiKeys } from "./database/apiKeyInit";
import { ingestDataForHighElo } from "./ingest/summonerMatches";
import { initKeys } from "./api/riot/keyManager";

export const main = async (): Promise<void> => {
  try {
    await Postgres.getSequelize();
    await upsertApiKeys();
    await initKeys();
    await initialiseSummoners();
    await fetchMatches();
    while (true) {
      await ingestDataForHighElo();
    }
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
