'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actor', {      
      actor_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      last_update: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('actor-migrates');
  }
};