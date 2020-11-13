import fs from "fs-extra";
import path from "path";
import { Redis } from "../redis";

const keysFile = path.resolve(__dirname, "..", "..", "..", "riot-api-keys.txt");
const REDIS_RIOT_KEYS = "RIOT_KEYS";

export const initKeys = async () => {
  const data = await fs.readFile(keysFile, "utf-8");
  const apiKeys = data.split("\n").filter((value) => value);
  const redis = await Redis.connect();
  await redis.flushall();

  for await (const key of apiKeys) {
    await redis.rpush(key, key);
  }
  await redis.quit();
  setInterval(async () => await keyTransfer(apiKeys), 1000);
};

const keyTransfer = async (keys: string[]) => {
  const redis = await Redis.connect();
  await Promise.all(
    keys.map(async (key) => {
      const apiKey = await redis.lpop(key);
      if (apiKey) {
        await redis.rpush(REDIS_RIOT_KEYS, apiKey);
      }
    })
  );
  await redis.quit();
};

export const getKey = async () => {
  const redis = await Redis.connect();
  const [redisKey, apiKey] = await redis.blpop(REDIS_RIOT_KEYS, 0);
  await redis.quit();

  return apiKey;
};

export const getSpecificKey = async (apiKey: string) => {
  const redis = await Redis.connect();
  const [redisKey, key] = await redis.blpop(apiKey, 0);
  await redis.quit();

  return key;
};

export const releaseKey = async (apiKey: string) => {
  setTimeout(async () => {
    const redis = await Redis.connect();
    await redis.rpush(apiKey, apiKey);
    await redis.quit();
  }, 1200);
};
