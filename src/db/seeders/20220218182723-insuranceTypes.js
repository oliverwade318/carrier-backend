'use strict';

const insuranceTypes = [
  {name: 'auto'},
  {name: 'fire'},
  {name: 'flood'},
]

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('InsuranceTypes', [...insuranceTypes]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('InsuranceTypes', null, {});
  }
};
