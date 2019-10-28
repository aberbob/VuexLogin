'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterDrives', [
      {
        name: 'Ground', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'RowFlow', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Other Hydraulic', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vDrive', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Other Electric', id: 5,
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
      return queryInterface.bulkDelete('PlanterDrives', null, {});
    
  }
};
