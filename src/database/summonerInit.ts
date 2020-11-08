import { Regions } from "twisted/dist/constants";
import { TftSummoner } from "../../models/TftSummoner";
import { getSummoner } from "../api/riot/riot";
import { createLogger } from "../Logger";

const initSummoner = async (summonerName: string) => {
  const { response } = await getSummoner(summonerName);
  const count = await TftSummoner.count({
    where: { summonerName },
  });
  if (count > 0) {
    return;
  }

  await TftSummoner.create({
    summonerName: response.name,
    summonerRegion: Regions.EU_WEST,
  });
};

export const initialiseSummoners = async () => {
  const logger = createLogger();

  logger.info(`Initialising Summoners: ${process.env.LOL_USERS}`);
  if (!process.env.LOL_USERS) {
    return;
  }

  const summoners = process.env.LOL_USERS.split(",");
  for await (const summonerName of summoners) {
    await initSummoner(summonerName);
  }
};
