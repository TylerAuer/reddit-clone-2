require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: 0,
    logging: false,
  },
  production: {},
};
