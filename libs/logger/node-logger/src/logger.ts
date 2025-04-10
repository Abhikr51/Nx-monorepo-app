import { createLogger, transports, format } from 'winston';

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] ${message}`;
});

export const logger = createLogger({
  level: 'debug',
  format: combine(
    colorize(), // Adds color to the console output
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log' }), // log to file
  ],
});