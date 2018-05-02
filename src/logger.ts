import { Logger, Data } from "./@types";
const winston = require("winston");

const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
      stderrLevels: ["error"],
    }),
  ],
});

/**
 * Sets default logger's level to given level.
 * @param   {string} level - Log level.
 * @returns {void}
 * @private
 */
export function setLogLevel(level: keyof Logger): void {
  logger.transports[0].level = level;
}

/**
 * Returns default logger's level.
 * @returns {string} - Log level.
 * @private
 */
export function getLogLevel(): keyof Logger {
  return logger.transports[0].level;
}

export default logger;

export const stubLogger: Logger = {
  error: () => {},
  warn: () => {},
  info: () => {},
  debug: () => {},
  verbose: () => {},
  silly: () => {},
};
