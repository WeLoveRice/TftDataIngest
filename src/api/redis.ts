import { createLogger } from "../Logger";
import { default as IORedis } from "ioredis";

export class Redis {
  static connection: IORedis.Redis;

  static connect = async () => {
    const logger = createLogger();
    const client = new IORedis(6379, "redis");

    client.on("ready", async () => {
      logger.info("Connected to redis");
    });

    client.on("error", (error) => {
      logger.error(`redis error: ${error}`);
    });

    await client.flushall();
    return client;
  };

  static getConnection = async () => {
    if (Redis.connection) {
      return Redis.connection;
    }
    Redis.connection = await Redis.connect();
    return Redis.connection;
  };
}
