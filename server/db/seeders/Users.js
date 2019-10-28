'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        id: 13,
        fn: "test",
        ln: "user",
        permgroup: 5,
        username: "test.user",
        password: "$2b$12$ynhzAMMp4gHhFsFrzNqbjeSzplmdEDJ40rRTztkJ5RjnJuZwZBUnm",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
