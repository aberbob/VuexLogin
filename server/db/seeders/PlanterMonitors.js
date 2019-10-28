'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterMonitors', [
      {
        name: '20|20 Gen3', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '20/20 Gen2', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '20/20 Gen1', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Trimble', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Deere', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ag Leader', id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Case IH', id: 7,
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
      return queryInterface.bulkDelete('PlanterMonitors', null, {});
    
  }
};
