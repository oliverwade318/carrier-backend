'use strict';

const carriers = [
  {name: 'Allstate'},
  {name: 'Founders'},
  {name: 'Guard'},
  {name: 'Hippo'},
  {name: 'Lemonade'},
  {name: 'National General'},
  {name: 'Nationwide'},
  {name: 'Progressive'},
  {name: 'Seneca'},
  {name: 'Swyfft'},
  {name: 'Neptune'},
  {name: 'TypTap'},
]

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Carriers', [...carriers]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carriers', null, {});
  }
};
