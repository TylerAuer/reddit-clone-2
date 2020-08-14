module.exports = {
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    host: process.env.DATABASE_URL || 'postgres', // Reference to the name of the service in docker-compose.yml
    dialect: 'postgres',
    operatorsAliases: 0,
    logging: false,
  },
};
