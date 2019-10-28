'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('WOStatuses', [
      {
        name: 'Schedule', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Assigned', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Open', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Complete', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Invoice', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

    */
      return queryInterface.bulkDelete('WOStatuses', null, {});

  }
};
