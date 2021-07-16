const { createLogger, format, transports } = require("winston");
const expressWinston = require("express-winston");

const consoleTransport = new transports.Console({ format: format.cli() });

const logger = {
  sequelize: createLogger({
    level: "info",
    format: format.json(),
    defaultMeta: { service: "sequelize" },
    transports: [
      new transports.File({
        filename: "logs/sequelize/error.log",
        level: "error",
      }),
      new transports.File({
        filename: "logs/sequelize/combined.log",
      }),
      process.env.NODE_ENV !== "production" && consoleTransport,
    ],
  }),
  express: {
    requests: expressWinston.logger({
      format: format.json(),
      msg: "{{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}} ms",
      colorize: true,
      transports: [
        new transports.File({
          filename: "logs/express/requests.log",
        }),
        process.env.NODE_ENV !== "production" && consoleTransport,
      ],
    }),

    errors: expressWinston.errorLogger({
      format: format.json(),
      colorize: true,
      transports: [
        new transports.File({
          filename: "logs/express/errors.log",
        }),
        process.env.NODE_ENV !== "production" && consoleTransport,
      ],
    }),
  },
};

module.exports = logger;
