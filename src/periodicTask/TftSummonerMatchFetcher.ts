import sleep from "sleep-promise";
import { Logger } from "winston";
import { TftSummoner } from "../../models/init-models";
import { createLogger } from "../Logger";
import { findSummonerByName } from "../database/search";
import { fetchLatestUnprocessedMatchId } from "../database/matchFinder";
import { insertDataForMatchAndSummoner } from "../database/insert/tft/tftMatchSummoner";

export class TftSummonerMatchFetcher {
  summonerName: string;
  summoner!: TftSummoner;
  interval = 30 * 1000;
  logger: Logger;

  public constructor(summonerName: string) {
    this.summonerName = summonerName;
    this.logger = createLogger();
  }

  async getSummoner(): Promise<void> {
    if (!this.summoner) {
      this.summoner = await findSummonerByName(this.summonerName);
    }
  }

  async execute(): Promise<void> {
    try {
      this.logger.info(`Periodic check for ${this.summonerName}`);
      await this.getSummoner();

      const matchId = await fetchLatestUnprocessedMatchId(this.summoner);

      if (!matchId) {
        return;
      }

      await insertDataForMatchAndSummoner(matchId, this.summoner);
    } catch (error) {
      console.log(
        `Error fetching periodically for summoner: ${this.summoner.summonerName} - ${error}`
      );
      this.logger.error(error);
    }
  }
}

export const fetchMatches = async () => {
  if (!process.env.LOL_USERS) {
    return;
  }

  const summoners = process.env.LOL_USERS.split(",");
  for (const summonerName of summoners) {
    const matchFetcher = new TftSummonerMatchFetcher(summonerName);

    await matchFetcher.execute();
    await sleep(1000);
    setInterval(async () => {
      await matchFetcher.execute();
    }, 10 * 60 * 1000);
  }
};
