'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      abbreviation: {
        type: Sequelize.STRING,
        unique: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('States');
  }
};