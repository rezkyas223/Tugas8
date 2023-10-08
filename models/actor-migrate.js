'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor - migrate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  actor - migrate.init({
    actor_id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    last_update: DataTypes.DATE,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'actor',
  });
  return actor - migrate;
};