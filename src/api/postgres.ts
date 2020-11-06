import { Sequelize, Transaction } from "sequelize";
import { initModels } from "../../models/init-models";
import { createLogger } from "../Logger";

export class Postgres {
  static sequelize: Sequelize;
  static transaciton: Transaction;

  static async getSequelize() {
    const logger = createLogger();

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

    if (Postgres.sequelize) {
      return Postgres.sequelize;
    }

    Postgres.sequelize = new Sequelize(
      POSTGRES_DB,
      POSTGRES_USER,
      POSTGRES_PASSWORD,
      {
        host: POSTGRES_HOST,
        dialect: "postgres",
        logging: (msg) => logger.info(msg),
      }
    );
    await Postgres.sequelize.authenticate();
    await Postgres.sequelize.sync();
    await initModels(Postgres.sequelize);

    return Postgres.sequelize;
  }

  static async getTransaction() {
    const sequelize = await Postgres.getSequelize();
    if (Postgres.transaciton) {
      return Postgres.transaciton;
    }

    Postgres.transaciton = await sequelize.transaction();
    return Postgres.transaciton;
  }
}
