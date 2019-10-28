'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('TransferStatuses', [
      {
        name: 'Open', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ready', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Transfered', id: 3,
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
      return queryInterface.bulkDelete('TransferStatuses', null, {});
    
  }
};
