import { Sequelize, Transaction } from "sequelize";
import { initModels } from "../../models/init-models";
import { createLogger } from "../Logger";

export class Postgres {
  static sequelize: Sequelize;

  static async newConnection() {
    const logger = createLogger("POSTGRES");

    const {
      POSTGRES_HOST,
      POSTGRES_USER,
      POSTGRES_PASSWORD,
      POSTGRES_DB,
    } = process.env;
    if (
      !POSTGRES_HOST ||
      !POSTGRES_DB ||
      !POSTGRES_USER ||
      !POSTGRES_PASSWORD
    ) {
      throw new Error("POSTGRES env not set");
    }

    return new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
      host: POSTGRES_HOST,
      dialect: "postgres",
      logging: (msg) => logger.info(msg),
      pool: {
        min: 0,
        max: 20,
        acquire: 60000,
        idle: 10000,
      },
    });
  }
  static async getSequelize() {
    if (Postgres.sequelize) {
      return Postgres.sequelize;
    }

    Postgres.sequelize = await Postgres.newConnection();
    await Postgres.sequelize.authenticate();
    await Postgres.sequelize.sync();
    await initModels(Postgres.sequelize);

    return Postgres.sequelize;
  }

  static async newTransaction() {
    const sequelize = await Postgres.getSequelize();
    return sequelize.transaction();
  }
}
