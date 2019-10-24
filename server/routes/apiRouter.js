const express = require("express");
const apiRouter = express.Router();
const reset = "yes"
// const Sequelize = require('sequelize');
// const db = require('../config/db');
const passport = require('passport');

//Databases
const PartsTable = require("../models/inventory/PartsTable");
const ServicesTable = require("../models/inventory/ServicesTable");
const PartsCategoryTable = require("../models/inventory/PartsCategoryTable");
const PartsSubcategoryTable = require("../models/inventory/PartsSubcategoryTable");
const CustContactsTable = require("../models/custContacts/CustContactsTable");
const UsersTable = require("../models/UsersTable");
const CustOrganizationsTable = require("../models/organization/CustOrganizationsTable");
const InventoryLocationsTable = require("../models/inventory/InventoryLocationsTable");
const LocationPartQtyTable = require("../models/inventory/LocationPartQtyTable");
const OrdersTable = require("../models/orders/OrdersTable");
const OrderItemsTable = require("../models/orders/OrderItemsTable");
const OrderStatusesTable = require("../models/orders/OrderStatusesTable");
const TransfersTable = require("../models/transfers/TransfersTable");
const TransferItemsTable = require("../models/transfers/TransferItemsTable");
const TransferStatusesTable = require("../models/transfers/TransferStatusesTable");
const EquipmentProfilesTable = require("../models/EquipmentProfilesTable");
const UserPermsTable = require("../models/UserPermsTable");
const WOCategoriesTable = require("../models/workOrders/WOCategoriesTable");
const WorkOrdersTable = require("../models/workOrders/WorkOrdersTable");
const WOStatusesTable = require("../models/workOrders/WOStatusesTable");
const WOPrioritiesTable = require("../models/workOrders/WOPrioritiesTable");
const CustContactStatusesTable = require("../models/custContacts/CustContactStatusesTable");
const OrgST101TypesTable = require("../models/organization/OrgST101TypesTable");
const OrgServicePlanTypesTable = require("../models/organization/OrgServicePlanTypesTable");
const OrgMarketsTable = require("../models/organization/OrgMarketsTable");
const OrgInvoicingTypesTable = require("../models/organization/OrgInvoicingTypesTable");
const OrgFarmTypesTable = require("../models/organization/OrgFarmTypesTable");
const OrgAccountTypesTable = require("../models/organization/OrgAccountTypesTable");
const PlanterClosingWheelsTable = require("../models/planter/PlanterClosingWheelsTable");
const PlanterDepthAdjustTable = require("../models/planter/PlanterDepthAdjustTable");
const PlanterDownForceTable = require("../models/planter/PlanterDownForceTable");
const PlanterDriveTable = require("../models/planter/PlanterDriveTable");
const PlanterHarnessingTable = require("../models/planter/PlanterHarnessingTable");
const PlanterInsecticideTable = require("../models/planter/PlanterInsecticideTable");
const PlanterLiquidTable = require("../models/planter/PlanterLiquidTable");
const PlanterMeterTable = require("../models/planter/PlanterMeterTable");
const PlanterMonitorTable = require("../models/planter/PlanterMonitorTable");
const PlanterSeedFirmersTable = require("../models/planter/PlanterSeedFirmersTable");
const PlanterSeedTubesTable = require("../models/planter/PlanterSeedTubesTable");

apiRouter.get('/createTest', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'test.user') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    OrgST101TypesTable.hasMany(CustOrganizationsTable);
    OrgServicePlanTypesTable.hasMany(CustOrganizationsTable);
    OrgMarketsTable.hasMany(CustOrganizationsTable);
    OrgInvoicingTypesTable.hasMany(CustOrganizationsTable);
    OrgFarmTypesTable.hasMany(CustOrganizationsTable);
    OrgAccountTypesTable.hasMany(CustOrganizationsTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/createDatabaseTables1', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'test.user') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    CustOrganizationsTable.sync({ alter: true })
    OrgST101TypesTable.sync({ alter: true })
    OrgServicePlanTypesTable.sync({ alter: true })
    OrgMarketsTable.sync({ alter: true })
    OrgInvoicingTypesTable.sync({ alter: true })
    OrgFarmTypesTable.sync({ alter: true })
    OrgAccountTypesTable.sync({ alter: true })

    OrgST101TypesTable.hasMany(CustOrganizationsTable);
    OrgServicePlanTypesTable.hasMany(CustOrganizationsTable);
    OrgMarketsTable.hasMany(CustOrganizationsTable);
    OrgInvoicingTypesTable.hasMany(CustOrganizationsTable);
    OrgFarmTypesTable.hasMany(CustOrganizationsTable);
    OrgAccountTypesTable.hasMany(CustOrganizationsTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/createDatabaseTables2', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'test.user') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    CustContactsTable.sync({ alter: true })
    UsersTable.sync({ alter: true })
    UserPermsTable.sync({ alter: true })
    CustContactStatusesTable.sync({ alter: true })

    CustOrganizationsTable.hasMany(EquipmentProfilesTable);
    CustOrganizationsTable.hasMany(CustContactsTable);
    CustContactStatusesTable.hasMany(CustContactsTable);
    UserPermsTable.hasMany(UsersTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/createDatabaseTables3', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'test.user') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    OrdersTable.sync({ alter: true })
    OrderItemsTable.sync({ alter: true })
    OrderStatusesTable.sync({ alter: true })
    CustOrganizationsTable.sync({ alter: true })

    TransfersTable.sync({ alter: true })
    TransferItemsTable.sync({ alter: true })
    TransferStatusesTable.sync({ alter: true })
    WOCategoriesTable.sync({ alter: true })
    WorkOrdersTable.sync({ alter: true })
    WOStatusesTable.sync({ alter: true })
    WOPrioritiesTable.sync({ alter: true })

    EquipmentProfilesTable.hasMany(WorkOrdersTable);
    WOCategoriesTable.hasMany(WorkOrdersTable);
    WOStatusesTable.hasMany(WorkOrdersTable);
    CustContactsTable.hasMany(WorkOrdersTable);
    CustOrganizationsTable.hasMany(WorkOrdersTable);
    UsersTable.hasMany(WorkOrdersTable);
    WOPrioritiesTable.hasMany(WorkOrdersTable);
    CustOrganizationsTable.hasMany(OrdersTable);
    OrdersTable.hasMany(OrderItemsTable);
    OrderStatusesTable.hasMany(OrdersTable);
    CustOrganizationsTable.hasMany(TransfersTable);
    TransfersTable.hasMany(TransferItemsTable);
    TransferStatusesTable.hasMany(TransfersTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/createDatabaseTables4', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'test.user') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    EquipmentProfilesTable.sync({ alter: true })
    PlanterClosingWheelsTable.sync({ alter: true })
    PlanterDepthAdjustTable.sync({ alter: true })
    PlanterDownForceTable.sync({ alter: true })
    PlanterDriveTable.sync({ alter: true })
    PlanterHarnessingTable.sync({ alter: true })
    PlanterInsecticideTable.sync({ alter: true })
    PlanterLiquidTable.sync({ alter: true })
    PlanterMeterTable.sync({ alter: true })
    PlanterMonitorTable.sync({ alter: true })
    PlanterSeedFirmersTable.sync({ alter: true })
    PlanterSeedTubesTable.sync({ alter: true })

    PlanterClosingWheelsTable.hasMany(EquipmentProfilesTable);
    PlanterDepthAdjustTable.hasMany(EquipmentProfilesTable);
    PlanterDownForceTable.hasMany(EquipmentProfilesTable);
    PlanterDriveTable.hasMany(EquipmentProfilesTable);
    PlanterHarnessingTable.hasMany(EquipmentProfilesTable);
    PlanterInsecticideTable.hasMany(EquipmentProfilesTable);
    PlanterLiquidTable.hasMany(EquipmentProfilesTable);
    PlanterMeterTable.hasMany(EquipmentProfilesTable);
    PlanterMonitorTable.hasMany(EquipmentProfilesTable);
    PlanterSeedFirmersTable.hasMany(EquipmentProfilesTable);
    PlanterSeedTubesTable.hasMany(EquipmentProfilesTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/createDatabaseTables5', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'test.user') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    PartsSubcategoryTable.sync({ alter: true })
    LocationPartQtyTable.sync({ alter: true })
    ServicesTable.sync({ alter: true })
    PartsTable.sync({ alter: true })
    PartsCategoryTable.sync({ alter: true })

    InventoryLocationsTable.sync({ alter: true })

    PartsCategoryTable.hasMany(PartsSubcategoryTable);
    PartsSubcategoryTable.hasMany(PartsTable);
    PartsCategoryTable.hasMany(PartsTable);
    PartsTable.hasMany(LocationPartQtyTable);
    InventoryLocationsTable.hasMany(LocationPartQtyTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/deleteDefaultData', (req, res) => {
  if (reset === "yes") {
    OrderStatusesTable.destroy({
      where: {}
    })
    TransferStatusesTable.destroy({
      where: {}
    })
    PartsSubcategoryTable.destroy({
      where: {}
    })
    PartsCategoryTable.destroy({
      where: {}
    })
    WOCategoriesTable.destroy({
      where: {}
    })
    WOStatusesTable.destroy({
      where: {}
    })
    WOPrioritiesTable.destroy({
      where: {}
    })
    CustContactStatusesTable.destroy({
      where: {}
    })
    OrgST101TypesTable.destroy({
      where: {}
    })
    OrgServicePlanTypesTable.destroy({
      where: {}
    })
    OrgMarketsTable.destroy({
      where: {}
    })
    OrgInvoicingTypesTable.destroy({
      where: {}
    })
    OrgFarmTypesTable.destroy({
      where: {}
    })
    OrgAccountTypesTable.destroy({
      where: {}
    })
    UserPermsTable.destroy({
      where: {}
    })
    PlanterClosingWheelsTable.destroy({
      where: {}
    })
    PlanterDepthAdjustTable.destroy({
      where: {}
    })
    PlanterDownForceTable.destroy({
      where: {}
    })
    PlanterDriveTable.destroy({
      where: {}
    })
    PlanterHarnessingTable.destroy({
      where: {}
    })
    PlanterInsecticideTable.destroy({
      where: {}
    })
    PlanterLiquidTable.destroy({
      where: {}
    })
    PlanterMeterTable.destroy({
      where: {}
    })
    PlanterMonitorTable.destroy({
      where: {}
    })
    PlanterSeedFirmersTable.destroy({
      where: {}
    })
    PlanterSeedTubesTable.destroy({
      where: {}
    })

  }
  res.sendStatus(200)
});

apiRouter.get('/createDefaultData', (req, res) => {
  if (reset === "yes") {
    //Default Values

    PartsCategoryTable.bulkCreate([
      { name: 'Disk', id: 1 },
      { name: 'Display', id: 2 },
      { name: 'DownForce', id: 3 },
      { name: 'DriveType', id: 4 },
      { name: 'FieldView', id: 5 },
      { name: 'Harnessing', id: 6 },
      { name: 'Iron', id: 7 },
      { name: 'Liquid', id: 8 },
      { name: 'Lubricant', id: 9 },
      { name: 'Marketing', id: 10 },
      { name: 'Meter', id: 11 },
      { name: 'MeterMax', id: 12 },
      { name: 'RowCleaners', id: 13 },
      { name: 'SeedDisk', id: 14 },
      { name: 'SeederForce', id: 15 },
      { name: 'SeedFirmer', id: 16 },
      { name: 'SeedTube', id: 17 },
      { name: 'ServiceTools', id: 18 },
      { name: 'Vaccum', id: 19 },
      { name: 'vSet', id: 20 },
      { name: 'YieldSense', id: 21 },
    ])

    PartsSubcategoryTable.bulkCreate([
      { name: 'vSetC', PartsCategoriesId: 1, id: 1 },
      { name: '20|20 Gen2', PartsCategoriesId: 2, id: 2 },
      { name: '20|20 Gen3', PartsCategoriesId: 2, id: 3 },
      { name: 'Gen1', PartsCategoriesId: 2, id: 4 },
      { name: 'Gen2', PartsCategoriesId: 2, id: 5 },
      { name: 'AirForce', PartsCategoriesId: 3, id: 6 },
      { name: 'DeltaForce', PartsCategoriesId: 3, id: 7 },
      { name: 'RowFlow', PartsCategoriesId: 4, id: 8 },
      { name: 'vDrive', PartsCategoriesId: 4, id: 9 },
      { name: 'Accessories', PartsCategoriesId: 5, id: 10 },
      { name: 'Field View Accessory Kits for iPad-Ready SeedSense Display Units', PartsCategoriesId: 5, id: 11 },
      { name: 'FieldView Accessories', PartsCategoriesId: 5, id: 12 },
      { name: 'FieldView Repair Parts', PartsCategoriesId: 5, id: 13 },
      { name: 'Gen3 Module', PartsCategoriesId: 5, id: 14 },
      { name: 'Display', PartsCategoriesId: 6, id: 15 },
      { name: 'SMC', PartsCategoriesId: 6, id: 16 },
      { name: 'SRM', PartsCategoriesId: 6, id: 17 },
      { name: 'Weigh Pins', PartsCategoriesId: 6, id: 18 },
      { name: 'PP Row Unit', PartsCategoriesId: 7, id: 19 },
      { name: 'FlowSense', PartsCategoriesId: 8, id: 20 },
      { name: 'FurrowJet', PartsCategoriesId: 8, id: 21 },
      { name: 'vApplyHD', PartsCategoriesId: 8, id: 22 },
      { name: 'Lubricant', PartsCategoriesId: 9, id: 23 },
      { name: 'Sales/Show Materials', PartsCategoriesId: 10, id: 24 },
      { name: 'eSet', PartsCategoriesId: 11, id: 25 },
      { name: 'Finger Meter', PartsCategoriesId: 11, id: 26 },
      { name: 'mSet', PartsCategoriesId: 11, id: 27 },
      { name: 'vSet', PartsCategoriesId: 11, id: 28 },
      { name: 'vSet Select', PartsCategoriesId: 11, id: 29 },
      { name: 'vSet2', PartsCategoriesId: 11, id: 30 },
      { name: 'vSetC', PartsCategoriesId: 11, id: 31 },
      { name: 'Complete Meters', PartsCategoriesId: 12, id: 32 },
      { name: 'Literature/Forms/Misc', PartsCategoriesId: 12, id: 33 },
      { name: 'MeterMax Accessories', PartsCategoriesId: 12, id: 34 },
      { name: 'MeterMax Plus Mounting Kits and Parts (Llimited Availability)', PartsCategoriesId: 12, id: 35 },
      { name: 'MeterMax Ultra Parts and Accessories', PartsCategoriesId: 12, id: 36 },
      { name: 'CleanSweep', PartsCategoriesId: 13, id: 37 },
      { name: 'eSet', PartsCategoriesId: 14, id: 38 },
      { name: 'Blockage Sensors', PartsCategoriesId: 15, id: 39 },
      { name: 'Power Harnesses', PartsCategoriesId: 15, id: 40 },
      { name: 'Radar & Lift Switch', PartsCategoriesId: 15, id: 41 },
      { name: 'Rockshaft Control Kits', PartsCategoriesId: 15, id: 42 },
      { name: 'Rockshaft Manifold & Hose Kits', PartsCategoriesId: 15, id: 43 },
      { name: 'Row Unit Parts', PartsCategoriesId: 15, id: 44 },
      { name: 'Seeder SRM Backbone Harnesses', PartsCategoriesId: 15, id: 45 },
      { name: 'Seeder SRM Base', PartsCategoriesId: 15, id: 46 },
      { name: 'Smart Connector - Gen 3', PartsCategoriesId: 15, id: 47 },
      { name: 'SRM Row Unit Harnesses', PartsCategoriesId: 15, id: 48 },
      { name: 'Keetons', PartsCategoriesId: 16, id: 49 },
      { name: 'Bullseye', PartsCategoriesId: 17, id: 50 },
      { name: 'SpeedTube', PartsCategoriesId: 17, id: 51 },
      { name: 'Diagnostic Kits', PartsCategoriesId: 18, id: 52 },
      { name: 'Repair Kit Parts', PartsCategoriesId: 18, id: 53 },
      { name: 'Service Kits', PartsCategoriesId: 18, id: 54 },
      { name: 'Service Tools', PartsCategoriesId: 18, id: 55 },
      { name: 'Blowers', PartsCategoriesId: 19, id: 56 },
      { name: 'Meter', PartsCategoriesId: 20, id: 57 },
      { name: '20/20 & iPad', PartsCategoriesId: 21, id: 58 },
      { name: 'Accessories', PartsCategoriesId: 21, id: 59 },
      { name: 'Case IH 2x77, 2x88 YieldSense Base Kit', PartsCategoriesId: 21, id: 60 },
      { name: 'Case IH x010, x120, x230 & x240 YieldSense Base Kit', PartsCategoriesId: 21, id: 61 },
      { name: 'Case IH x088, x130 & x140 (2015 and Older) YieldSense Base Kit', PartsCategoriesId: 21, id: 62 },
      { name: 'Case IH x140 (2016 and Newer) YieldSense Base Kit', PartsCategoriesId: 21, id: 63 },
      { name: 'Chain/Paddle Kit', PartsCategoriesId: 21, id: 64 },
      { name: 'JD 00/10 Series YieldSense Base Kit', PartsCategoriesId: 21, id: 65 },
      { name: 'JD 50/60/70/S Series YieldSense Base Kit', PartsCategoriesId: 21, id: 66 },
      { name: 'Lexion 6" Elevator Base Kit', PartsCategoriesId: 21, id: 67 },
      { name: 'Lexion 9" Elevator Base Kit', PartsCategoriesId: 21, id: 68 },
      { name: 'Lexion Adapter Harnesses', PartsCategoriesId: 21, id: 69 },
      { name: 'Moisture Sensor', PartsCategoriesId: 21, id: 70 },
      { name: 'OEM Replacement Sprocket and Idlers', PartsCategoriesId: 21, id: 71 },
      { name: 'Parts and Specialty Kits', PartsCategoriesId: 21, id: 72 },
      { name: 'Replacement Paddles, Crud Brush, Grain Property Kits', PartsCategoriesId: 21, id: 73 },
    ])

    WOCategoriesTable.bulkCreate([
      { name: 'Meter Test', id: 1 },
      { name: 'Service Call', id: 2 },
      { name: 'Repair', id: 3 },
      { name: 'Install', id: 5 },
      { name: 'Inspection', id: 6 },
    ])

    OrderStatusesTable.bulkCreate([
      { name: 'Open', id: 1 },
      { name: 'On Order', id: 2 },
      { name: 'Invoiced', id: 3 },
      { name: 'Paid', id: 4 },
    ])
    TransferStatusesTable.bulkCreate([
      { name: 'Open', id: 1 },
      { name: 'Ready', id: 2 },
      { name: 'Transfered', id: 3 },
    ])
    WOStatusesTable.bulkCreate([
      { name: 'Schedule', id: 1 },
      { name: 'Assigned', id: 2 },
      { name: 'Open', id: 3 },
      { name: 'Complete', id: 4 },
      { name: 'Invoice', id: 5 },
    ])

    WOPrioritiesTable.bulkCreate([
      { name: 'Soon', id: 1 },
      { name: 'Normal', id: 2 },
      { name: 'Urgent', id: 3 }
    ])

    CustContactStatusesTable.bulkCreate([
      { name: 'Active', id: 1 },
      { name: 'Deceased', id: 2 },
      { name: 'Moved On', id: 3 },
    ])

    OrgMarketsTable.bulkCreate([
      { name: 'Wendell', id: 1 },
      { name: 'Caldwell', id: 2 },
      { name: 'La Grande', id: 3 },
      { name: 'Utah', id: 4 },
      { name: 'Nevada', id: 5 }
    ])

    OrgST101TypesTable.bulkCreate([
      { name: 'Yes', id: 1 },
      { name: 'No', id: 2 }
    ])

    OrgFarmTypesTable.bulkCreate([
      { name: 'Dairy', id: 1 },
      { name: 'Farm', id: 2 },
      { name: 'Custom', id: 3 }
    ])

    OrgServicePlanTypesTable.bulkCreate([
      { name: 'Basic', id: 1 },
      { name: 'Advanced', id: 2 }
    ])

    OrgAccountTypesTable.bulkCreate([
      { name: 'Cash Only', id: 1 },
      { name: '30 Days', id: 2 },
      { name: 'Discount', id: 3 }
    ])

    OrgInvoicingTypesTable.bulkCreate([
      { name: 'Email', id: 1 },
      { name: 'Email & Mail', id: 2 },
      { name: 'Mail', id: 3 }
    ])

    UserPermsTable.bulkCreate([
      { name: 'Tech', id: 1 },
      { name: 'Office', id: 2 },
      { name: 'Accounting', id: 3 },
      { name: 'Admin', id: 4 },
      { name: 'SuperAdmin', id: 5 }
    ])

    PlanterClosingWheelsTable.bulkCreate([
      { name: 'Schlagel', id: 1 },
      { name: 'Martin', id: 2 },
      { name: 'Yetter', id: 3 },
      { name: 'FurrowForce', id: 4 },
    ])

    PlanterDepthAdjustTable.bulkCreate([
      { name: 'Spring', id: 1 },
      { name: 'SmartDepth', id: 2 },
    ])

    PlanterDownForceTable.bulkCreate([
      { name: 'DeltaForce', id: 1 },
      { name: 'AirForce', id: 2 },
      { name: 'Pneumatic Down Bags', id: 3 },
      { name: 'Springs', id: 4 },
      { name: 'JD Hyrdraulic', id: 5 },
      { name: 'Ag Leader Hydraulic', id: 6 }
    ])

    PlanterDriveTable.bulkCreate([
      { name: 'Ground', id: 1 },
      { name: 'RowFlow', id: 2 },
      { name: 'Other Hydraulic', id: 3 },
      { name: 'vDrive', id: 4 },
      { name: 'Other Electric', id: 5 }
    ])

    PlanterHarnessingTable.bulkCreate([
      { name: 'SRM', id: 1 },
      { name: 'SMC', id: 2 },
      { name: 'SeedTube', id: 3 }
    ])

    PlanterInsecticideTable.bulkCreate([
      { name: 'vDrive Insecticide', id: 1 },
    ])

    PlanterLiquidTable.bulkCreate([
      { name: 'vApply HD', id: 1 },
      { name: 'Furrow Jet', id: 2 },
      { name: 'Other', id: 3 }
    ])

    PlanterMeterTable.bulkCreate([
      { name: 'eSet', id: 1 },
      { name: 'vSet', id: 2 },
      { name: 'vSet Select', id: 3 },
      { name: 'John Deere', id: 4 },
      { name: 'Case IH', id: 5 },
      { name: 'FingerMeter', id: 6 }
    ])

    PlanterMonitorTable.bulkCreate([
      { name: '20|20 Gen3', id: 1 },
      { name: '20/20 Gen2', id: 2 },
      { name: '20/20 Gen1', id: 3 },
      { name: 'Trimble', id: 4 },
      { name: 'John Deere', id: 5 },
      { name: 'Ag Leader', id: 6 },
      { name: 'Case IH', id: 7 },
    ])

    PlanterSeedFirmersTable.bulkCreate([
      { name: 'Part#', id: 1 }
    ])

    PlanterSeedTubesTable.bulkCreate([
      { name: 'Part#', id: 1 }
    ])

  }

  res.sendStatus(200)
});

apiRouter.get('/createDBviews', (req, res) => {
  if (reset === "yes") {
    //Create Database Views
    User.findAll({
      include: [{
        model: Project,
        through: {
          attributes: ['createdAt', 'startedAt', 'finishedAt'],
          where: { completed: true }
        }
      }]
    });

  }

  res.sendStatus(200)
});

module.exports = apiRouter;