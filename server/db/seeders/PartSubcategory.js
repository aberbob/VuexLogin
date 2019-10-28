'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PartSubcategories', [
      {
        name: 'vSetC', PartCategoriesId: 1, id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '20|20 Gen2', PartCategoriesId: 2, id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '20|20 Gen3', PartCategoriesId: 2, id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gen1', PartCategoriesId: 2, id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gen2', PartCategoriesId: 2, id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AirForce', PartCategoriesId: 3, id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DeltaForce', PartCategoriesId: 3, id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'RowFlow', PartCategoriesId: 4, id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vDrive', PartCategoriesId: 4, id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Accessories', PartCategoriesId: 5, id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Field View Accessory Kits for iPad-Ready SeedSense Display Units', PartCategoriesId: 5, id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FieldView Accessories', PartCategoriesId: 5, id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FieldView Repair Parts', PartCategoriesId: 5, id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gen3 Module', PartCategoriesId: 5, id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Display', PartCategoriesId: 6, id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SMC', PartCategoriesId: 6, id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SRM', PartCategoriesId: 6, id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Weigh Pins', PartCategoriesId: 6, id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'PP Row Unit', PartCategoriesId: 7, id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FlowSense', PartCategoriesId: 8, id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FurrowJet', PartCategoriesId: 8, id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vApplyHD', PartCategoriesId: 8, id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lubricant', PartCategoriesId: 9, id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sales/Show Materials', PartCategoriesId: 10, id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'eSet', PartCategoriesId: 11, id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Finger Meter', PartCategoriesId: 11, id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'mSet', PartCategoriesId: 11, id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSet', PartCategoriesId: 11, id: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSet Select', PartCategoriesId: 11, id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSet2', PartCategoriesId: 11, id: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vSetC', PartCategoriesId: 11, id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Complete Meters', PartCategoriesId: 12, id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Literature/Forms/Misc', PartCategoriesId: 12, id: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MeterMax Accessories', PartCategoriesId: 12, id: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MeterMax Plus Mounting Kits and Parts (Llimited Availability)', PartCategoriesId: 12, id: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MeterMax Ultra Parts and Accessories', PartCategoriesId: 12, id: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'CleanSweep', PartCategoriesId: 13, id: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'eSet', PartCategoriesId: 14, id: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blockage Sensors', PartCategoriesId: 15, id: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Power Harnesses', PartCategoriesId: 15, id: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Radar & Lift Switch', PartCategoriesId: 15, id: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rockshaft Control Kits', PartCategoriesId: 15, id: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rockshaft Manifold & Hose Kits', PartCategoriesId: 15, id: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Row Unit Parts', PartCategoriesId: 15, id: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Seeder SRM Backbone Harnesses', PartCategoriesId: 15, id: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Seeder SRM Base', PartCategoriesId: 15, id: 46,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Smart Connector - Gen 3', PartCategoriesId: 15, id: 47,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SRM Row Unit Harnesses', PartCategoriesId: 15, id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Keetons', PartCategoriesId: 16, id: 49,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bullseye', PartCategoriesId: 17, id: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SpeedTube', PartCategoriesId: 17, id: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Diagnostic Kits', PartCategoriesId: 18, id: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Repair Kit Parts', PartCategoriesId: 18, id: 53,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Service Kits', PartCategoriesId: 18, id: 54,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Service Tools', PartCategoriesId: 18, id: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blowers', PartCategoriesId: 19, id: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meter', PartCategoriesId: 20, id: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '20/20 & iPad', PartCategoriesId: 21, id: 58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Accessories', PartCategoriesId: 21, id: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Case IH 2x77, 2x88 YieldSense Base Kit', PartCategoriesId: 21, id: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Case IH x010, x120, x230 & x240 YieldSense Base Kit', PartCategoriesId: 21, id: 61,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Case IH x088, x130 & x140 (2015 and Older) YieldSense Base Kit', PartCategoriesId: 21, id: 62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Case IH x140 (2016 and Newer) YieldSense Base Kit', PartCategoriesId: 21, id: 63,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chain/Paddle Kit', PartCategoriesId: 21, id: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JD 00/10 Series YieldSense Base Kit', PartCategoriesId: 21, id: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JD 50/60/70/S Series YieldSense Base Kit', PartCategoriesId: 21, id: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lexion 6" Elevator Base Kit', PartCategoriesId: 21, id: 67,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lexion 9" Elevator Base Kit', PartCategoriesId: 21, id: 68,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lexion Adapter Harnesses', PartCategoriesId: 21, id: 69,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moisture Sensor', PartCategoriesId: 21, id: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'OEM Replacement Sprocket and Idlers', PartCategoriesId: 21, id: 71,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Parts and Specialty Kits', PartCategoriesId: 21, id: 72,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Replacement Paddles, Crud Brush, Grain Property Kits', PartCategoriesId: 21, id: 73,
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
      return queryInterface.bulkDelete('PartSubcategories', null, {});
    
  }
};
