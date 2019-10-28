'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterClosingWheels', [
      {
        name: 'Schlagel', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Martin', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Yetter', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FurrowForce', id: 4,
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
      return queryInterface.bulkDelete('PlanterClosingWheels', null, {});
    
  }
};
