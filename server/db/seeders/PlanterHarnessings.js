'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterHarnessings', [
      {
        name: 'SRM', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SMC', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SeedTube', id: 3,
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
      return queryInterface.bulkDelete('PlanterHarnessings', null, {});
    
  }
};
