import winston, { Logger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";

export const LOG_DIR = path.join(__dirname, "..", "logs");

export const createLogger = (suffix = ""): Logger => {
  const { Console } = transports;
  let filename = `${LOG_DIR}/%DATE%.log`;
  if (suffix) {
    filename = `${LOG_DIR}/%DATE% - ${suffix}.log`;
  }
  const dailyRotate = new DailyRotateFile({
    filename,
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
  });

  return winston.createLogger({
    format: format.combine(format.timestamp(), format.json()),
    // Error messages also go to console
    transports: [new Console({ level: "error" }), dailyRotate],
  });
};
