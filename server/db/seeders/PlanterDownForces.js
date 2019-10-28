'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterDownForces', [
      {
        name: 'DeltaForce', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AirForce', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pneumatic Down Bags', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Springs', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JD Hyrdraulic', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ag Leader Hydraulic', id: 6,
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
      return queryInterface.bulkDelete('PlanterDownForces', null, {});
    
  }
};
