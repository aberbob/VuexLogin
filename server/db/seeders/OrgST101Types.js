'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrgST101Types', [
      {
        name: 'Yes', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'No', id: 2,
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
      return queryInterface.bulkDelete('OrgST101Types', null, {});
    
  }
};
