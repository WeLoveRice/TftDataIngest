import { createLogger } from "../Logger";
import { default as IORedis } from "ioredis";

export class Redis {
  static connection: IORedis.Redis;

  static connect = async () => {
    const logger = createLogger();
    const client = new IORedis(6380, "redis");

    client.on("error", (error) => {
      logger.error(`redis error: ${error}`);
    });

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
