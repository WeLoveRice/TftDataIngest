import { Logger } from "winston";
import { TftSummoner } from "../../models/TftSummoner";
import { createLogger } from "../Logger";
import { insertDataForMatch } from "../tft/database/insert";
import { fetchLatestUnprocessedMatchId, findSummonerByName } from "../tft/database/search";

export class TftMatchFetcher {
  summonerName: string;
  summoner!: TftSummoner;
  interval = 30 * 1000;
  logger: Logger;

  public constructor(summonerName: string) {
    this.summonerName = summonerName;
    this.logger = createLogger();
  }

  async initialiseSummoner(): Promise<void> {
    if (!this.summoner) {
      this.summoner = await findSummonerByName(this.summonerName);
    }
  }

  async execute(): Promise<void> {
    await this.initialiseSummoner();
    const matchId = await fetchLatestUnprocessedMatchId(this.summoner);
    if (!matchId) {
      return;
    }

    await insertDataForMatch(matchId, this.summoner);
  }
}
