'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('InventoryLocations', [
      {
        name: 'Location1', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Location2', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Location3', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete('InventoryLocations', null, {});

  }
};
