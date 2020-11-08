import { createLogger } from "./Logger";
import { fetchMatches } from "./periodicTask/TftMatchFetcher";
import { Postgres } from "./api/postgres";
import { initialiseSummoners } from "./database/SummonerInit";
import path from "path";
import fs from "fs";
import { TftItem } from "../models/TftItem";
import {
  TftElo,
  TftParticipantLink,
  TftParticipantUnit,
  TftSummoner,
  TftSummonerElo,
  TftUnit,
} from "../models/init-models";
import { getParticipantFromMatch, getTftApi } from "./api/riot";
import { Regions, TftRegions } from "twisted/dist/constants";
import { TftParticipantUnitItem } from "../models/TftParticipantUnitItem";
import sleep from "sleep-promise";

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
