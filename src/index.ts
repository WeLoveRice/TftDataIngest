import { createLogger } from "./Logger";
import postgres from "./api/postgres";
import { initialiseSummoners } from "./tft/SummonerInit";
import { fetchMatches } from "./periodicTask/TftMatchFetcher";

export const main = async (): Promise<void> => {
  try {
    const sequelize = await postgres.connect();

    // await initialiseSummoners();
    await fetchMatches();
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
