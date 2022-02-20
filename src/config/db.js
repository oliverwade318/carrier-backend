require('dotenv').config();
const development = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development,
};