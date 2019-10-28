'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('WOCategories', [
      {
        name: 'Meter Test', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Service Call', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Repair', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Install', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Inspection', id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('WOCategories', null, {});
  }
};
