'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('EIParts', [
      {
        name: 'Parallel Arms',
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gauge Wheel Arm',
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Opening Discs',
        id: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SeedTube Guard',
        id: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Closing Arm',
        id: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkDelete('EIParts', null, {});

  }
};
