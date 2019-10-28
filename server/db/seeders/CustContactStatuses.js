'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('CustContactStatuses', [
      {
        name: 'Active', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Deceased', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moved On', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete('CustContactStatuses', null, {});

  }
};
