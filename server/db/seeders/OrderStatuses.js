'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrderStatuses', [
      {
        name: 'Open', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'On Order', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Invoiced', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Paid', id: 4,
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
    return queryInterface.bulkDelete('OrderStatuses', null, {});

  }
};
