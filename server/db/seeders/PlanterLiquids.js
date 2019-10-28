'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PlanterLiquids', [
      {
        name: 'vApply HD', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Furrow Jet', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Other', id: 3,
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
      return queryInterface.bulkDelete('PlanterLiquids', null, {});
    
  }
};
