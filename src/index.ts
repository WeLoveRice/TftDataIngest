import { createLogger } from "./Logger";
import { initialiseSummoners } from "./tft/SummonerInit";
import { fetchMatches } from "./periodicTask/TftMatchFetcher";
import fs from "fs";
import path from "path";
import { TftMatch } from "../models/TftMatch";
import { getParticipantFromMatch, getTftApi } from "./api/riot";
import { TftRegions } from "twisted/dist/constants";
import {
  TftParticipant,
  TftParticipantLink,
  TftParticipantTrait,
  TftParticipantUnit,
  TftSummoner,
  TftTrait,
  TftUnit,
} from "../models/init-models";
import sleep from "sleep-promise";
import { Postgres } from "./api/postgres";

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
