import { createLogger } from "./Logger";
import { initKeys } from "./api/riot/keyManager";
import { fetchMatches } from "./periodicTask/TftMatchFetcher";
import { initialiseSummoners } from "./database/SummonerInit";
import { Postgres } from "./api/postgres";

export const main = async (): Promise<void> => {
  try {
    await Postgres.getSequelize();
    await initKeys();
    await initialiseSummoners();
    await fetchMatches();
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
