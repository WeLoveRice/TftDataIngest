import fs from "fs-extra";
import path from "path";
import sleep from "sleep-promise";
import { createLogger } from "../../Logger";
import { Redis } from "../redis";

const keysFile = path.resolve(__dirname, "..", "..", "..", "riot-api-keys.txt");
const REDIS_RIOT_KEYS = "RIOT_KEYS";

export const addKeysToRedis = async () => {
  const data = await fs.readFile(keysFile, "utf-8");
  const keys = data.split("\n").filter((value) => value);
  console.log(keys);
  const redis = await Redis.getConnection();

  const keysInserted = await redis.rpush(REDIS_RIOT_KEYS, ...keys);
  if (keysInserted == 0) {
    throw new Error("Could not add keys to redis");
  }
};

export const getKey = async () => {
  const redis = await Redis.getConnection();
  const [redisKey, apiKey] = await redis.blpop(REDIS_RIOT_KEYS, 0);

  if (await redis.get(apiKey)) {
    await sleep(1200);
  }
  if (!apiKey) {
    throw new Error("Timeout waiting for key");
  }

  return apiKey;
};

export const releaseKey = async (key: string) => {
  await sleep(1200);
  const redis = await Redis.getConnection();
  await redis.rpush(REDIS_RIOT_KEYS, key);
};
