'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PartCategories', [
      {
        name: 'Disk', id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Display', id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DownForce', id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DriveType', id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FieldView', id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Harnessing', id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Iron', id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Liquid', id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lubricant', id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marketing', id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meter', id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MeterMax', id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'RowCleaners', id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SeedDisk', id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SeederForce', id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SeedFirmer', id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SeedTube', id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ServiceTools', id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vaccum', id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSet', id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'YieldSense', id: 21,
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
      return queryInterface.bulkDelete('PartCategories', null, {});
    
  }
};
