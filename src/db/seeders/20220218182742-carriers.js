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
const lowerCarriers = carriers?.map(carrier => ({name: carrier?.name?.toLowerCase()}));

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Carriers', [...lowerCarriers]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carriers', null, {});
  }
};
