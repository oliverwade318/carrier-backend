'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InsuranceTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InsuranceTypes');
  }
};