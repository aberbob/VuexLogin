'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrgFarmTypes', [
      {
        name: 'Dairy', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Farm', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Custom', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkDelete('OrgFarmTypes', null, {});

  }
};
