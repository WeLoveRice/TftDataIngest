import sleep from "sleep-promise";
import { TftRegions } from "twisted/dist/constants";
import { TftSummoner } from "../../models/TftSummoner";
import { Postgres } from "../api/postgres";
import { getSummoner } from "../api/riot";
import { createLogger } from "../Logger";

export const initSummoner = async (summonerName: string) => {
  const { response } = await getSummoner(summonerName);
  const count = await TftSummoner.count({
    where: { encryptedSummonerId: response.id },
  });
  if (count > 0) {
    return;
  }
  const sequelize = await Postgres.getSequelize();

  await sequelize.transaction(async (transaction) => {
    await TftSummoner.create(
      {
        encryptedPlayerUuid: response.puuid,
        name: response.name,
        encryptedSummonerId: response.id,
        region: TftRegions.EUROPE,
      },
      { transaction }
    );
  });
  const logger = createLogger();
  logger.info(`${summonerName} added to db`);
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
    await sleep(1000);
  }
};
