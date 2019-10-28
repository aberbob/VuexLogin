'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('UserPerms', [
      {
        name: 'Tech', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Office', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Accounting', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SuperAdmin', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      */
      return queryInterface.bulkDelete('UserPerms', null, {});
    
  }
};
