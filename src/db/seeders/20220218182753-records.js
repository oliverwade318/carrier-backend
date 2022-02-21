'use strict';

const records = [
  {name: 'Allstate', state: 'IL', type: 'auto'},
  {name: 'Allstate', state: 'IL', type: 'fire'},
  {name: 'Allstate', state: 'IN', type: 'auto'},
  {name: 'Allstate', state: 'IN', type: 'fire'},

  {name: 'Founders', state: 'IL', type: 'auto'},

  {name: 'Guard', state: 'IL', type: 'fire'},

  {name: 'Hippo', state: 'IL', type: 'fire'},
  {name: 'Hippo', state: 'IN', type: 'fire'},

  {name: 'Lemonade', state: 'IL', type: 'fire'},
  {name: 'Lemonade', state: 'IN', type: 'fire'},
  {name: 'Lemonade', state: 'MI', type: 'fire'},

  {name: 'National General', state: 'IL', type: 'fire'},
  {name: 'National General', state: 'IL', type: 'auto'},
  {name: 'National General', state: 'IN', type: 'fire'},
  {name: 'National General', state: 'IN', type: 'auto'},
  {name: 'National General', state: 'MI', type: 'fire'},


  {name: 'Nationwide', state: 'IL', type: 'fire'},
  {name: 'Nationwide', state: 'IL', type: 'auto'},
  {name: 'Nationwide', state: 'IN', type: 'fire'},
  {name: 'Nationwide', state: 'IN', type: 'auto'},
  {name: 'Nationwide', state: 'MI', type: 'fire'},
  {name: 'Nationwide', state: 'MI', type: 'auto'},


  {name: 'Progressive', state: 'IL', type: 'fire'},
  {name: 'Progressive', state: 'IL', type: 'auto'},
  {name: 'Progressive', state: 'IN', type: 'fire'},
  {name: 'Progressive', state: 'IN', type: 'auto'},
  {name: 'Progressive', state: 'MI', type: 'auto'},


  {name: 'Seneca', state: 'IL', type: 'fire'},
  {name: 'Seneca', state: 'IL', type: 'auto'},
  {name: 'Seneca', state: 'IN', type: 'fire'},
  {name: 'Seneca', state: 'MI', type: 'auto'},

  {name: 'Swyfft', state: 'IL', type: 'fire'},
  {name: 'Swyfft', state: 'IN', type: 'fire'},
  {name: 'Swyfft', state: 'MI', type: 'fire'},

  {name: 'National General', state: 'IL', type: 'flood'},
  {name: 'National General', state: 'IN', type: 'flood'},
  {name: 'National General', state: 'MI', type: 'flood'},

  {name: 'Neptune', state: 'IN', type: 'flood'},
  {name: 'Neptune', state: 'MI', type: 'flood'},

  {name: 'Nationwide', state: 'IL', type: 'flood'},
  {name: 'Nationwide', state: 'IN', type: 'flood'},

  {name: 'Seneca', state: 'IL', type: 'flood'},
  {name: 'Seneca', state: 'IN', type: 'flood'},
  {name: 'Seneca', state: 'MI', type: 'flood'},
]

module.exports = {
  async up (queryInterface, Sequelize) {

    const updatedRecords = [];

    for(let i = 0; i < records.length; i++){
      const stateId = await queryInterface.rawSelect('States', {
        where: {
          abbreviation: records?.[i]?.state,
        },
      }, ['id']);
      const carrierId = await queryInterface.rawSelect('Carriers', {
        where: {
          name: records?.[i]?.name?.toLowerCase(),
        },
      }, ['id']);
      const insuranceTypeId = await queryInterface.rawSelect('InsuranceTypes', {
        where: {
          name: records?.[i]?.type.toLowerCase(),
        },
      }, ['id']);
      if(stateId, carrierId, insuranceTypeId){
        updatedRecords.push({stateId, carrierId, insuranceTypeId, createdAt: new Date(), updatedAt: new Date()})
      }
    }

    return queryInterface.bulkInsert('Records', [...updatedRecords ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Records', null, {});
  }
};
