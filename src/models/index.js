const { Sequelize } = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(
  config.postgreSQL.database,
  config.postgreSQL.username,
  config.postgreSQL.password,
  config.postgreSQL
);

module.exports = sequelize;
