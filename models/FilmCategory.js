const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");

const DataTypes = Sequelize;

const FilmCategory = db.define(
  "film_category",
  {
    film_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    category_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    last_update: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = FilmCategory;