const { Sequelize } = require("sequelize");

const db = new Sequelize("dvdrental", "postgres", "admin", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

module.exports = db;
