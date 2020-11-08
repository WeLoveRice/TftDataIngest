import sleep from "sleep-promise";
import { Logger } from "winston";
import { TftSummoner } from "../../models/init-models";
import { createLogger } from "../Logger";
import { insertDataForMatchAndSummoner } from "../database/insert";
import {
  fetchLatestUnprocessedMatchId,
  findSummonerByName,
} from "../database/search";

export class TftMatchFetcher {
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
    await this.getSummoner();
    const matchId = await fetchLatestUnprocessedMatchId(this.summoner);

    if (!matchId) {
      return;
    }

    await insertDataForMatchAndSummoner(matchId, this.summoner);
  }
}

export const fetchMatches = async () => {
  if (!process.env.LOL_USERS) {
    return;
  }

  const summoners = process.env.LOL_USERS.split(",");
  for (const summonerName of summoners) {
    const matchFetcher = new TftMatchFetcher(summonerName);

    await matchFetcher.execute();
    await sleep(1000);

    setInterval(async () => {
      await matchFetcher.execute();
    }, 60 * 1000);
  }
};
