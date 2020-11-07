import { createLogger } from "./Logger";
import { fetchMatches } from "./periodicTask/TftMatchFetcher";
import { Postgres } from "./api/postgres";
import { initialiseSummoners } from "./database/SummonerInit";

export const main = async (): Promise<void> => {
  try {
    await Postgres.getSequelize();
    await initialiseSummoners();
    await fetchMatches();
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
