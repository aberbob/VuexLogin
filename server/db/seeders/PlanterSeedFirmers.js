'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterSeedFirmers', [
      {
        name: 'Part#', id: 1,
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
      return queryInterface.bulkDelete('PlanterSeedFirmers', null, {});
    
  }
};
