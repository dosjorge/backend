const logger = require("./logger");

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: logger.sequelize.debug.bind(logger.sequelize),
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: logger.sequelize.debug.bind(logger.sequelize),
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    native: true,
    logging: logger.sequelize.debug.bind(logger.sequelize),
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
};
