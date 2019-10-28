'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrgInvoicingTypes', [
      {
        name: 'Email', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Email & Mail', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mail', id: 3,
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
    return queryInterface.bulkDelete('OrgInvoicingTypes', null, {});

  }
};
