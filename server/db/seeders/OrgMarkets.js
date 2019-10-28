'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrgMarkets', [
      {
        name: 'Wendell', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Caldwell', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'La Grande', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Utah', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nevada', id: 5,
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
    return queryInterface.bulkDelete('OrgMarkets', null, {});

  }
};
