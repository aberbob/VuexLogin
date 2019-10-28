'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterMeters', [
      {
        name: 'eSet', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSet', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSet Select', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Deere', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Case IH', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FingerMeter', id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:  */
      return queryInterface.bulkDelete('PlanterMeters', null, {});
  
  }
};
