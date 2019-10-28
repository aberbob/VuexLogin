'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrgAccountTypes', [
      {
        name: 'Cash Only', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '30 Days', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Discount', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete('OrgAccountTypes', null, {});

  }
};
