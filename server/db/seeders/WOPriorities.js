'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('WOPriorities', [
      {
        name: 'Soon', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Normal', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Urgent', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('WOPriorities', null, {});
  }
};
