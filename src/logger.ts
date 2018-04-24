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
 * Creates a new logger with requested log level.
 * @param   {string} level - Log level.
 * @returns {void}
 * @private
 */
export function setLogLevel(level: keyof Logger): void {
  logger.transports[0].level = level;
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
