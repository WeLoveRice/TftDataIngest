import { createLogger } from "./Logger";
import postgres from "./api/postgres";
import { initialiseSummoners } from "./tft/SummonerInit";
import { TftMatchFetcher } from "./periodicTask/TftMatchFetcher";
import sleep from "sleep-promise";

export const main = async (): Promise<void> => {
  try {
    await postgres.connect();

    await initialiseSummoners();
    if (!process.env.LOL_USERS) {
      return;
    }

    const summoners = process.env.LOL_USERS.split(",");
    for (const summonerName of summoners) {
      const matchFetcher = new TftMatchFetcher(summonerName);

      setInterval(async () => {
        await matchFetcher.execute()
      }, 60 * 1000);

      await sleep(1000);
    }
  } catch (e) {
    const logger = createLogger();
    logger.error(e);
    throw e;
  }
};

main();
