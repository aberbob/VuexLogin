const express = require("express");
const apiRouter = express.Router();
const reset = "yes"
const Sequelize = require('sequelize');
const db = require('../config/db');
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
const InvoicesTable = require("../models/InvoicesTable");
const InvoiceItemsTable = require("../models/InvoiceItemsTable");
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
    EquipmentProfilesTable.sync({ alter: true })
    CustOrganizationsTable.sync({ alter: true })
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
    CustContactsTable.sync({ alter: true })
    UsersTable.sync({ alter: true })
    EquipmentProfilesTable.sync({ alter: true })
    CustOrganizationsTable.sync({ alter: true })
    InvoicesTable.sync({ alter: true })
    InvoiceItemsTable.sync({ alter: true })
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
    InvoicesTable.hasMany(InvoiceItemsTable);

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
    WOCategoriesTable.destroy({
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
      { name: 'DownForce', id: 1 },
      { name: 'Monitor', id: 2 },
      { name: 'Drive Type', id: 3 },
      { name: 'Meter', id: 4 },
      { name: 'Discs', id: 5 },
      { name: 'Harnessing', id: 6 },
      { name: 'SeedTubes', id: 7 },
      { name: 'SeedFirmers', id: 8 },
      { name: 'Liquid', id: 9 },
      { name: 'Insecticide', id: 10 },
      { name: 'Closing Wheels (MC)', id: 11 },
      { name: 'Depth Adjust', id: 12 },
    ])

    PartsSubcategoryTable.bulkCreate([
      { name: 'DeltaForce', PartsCategoriesId: '1', id: 1 },
      { name: 'AirForce', PartsCategoriesId: '1', id: 2 },
      { name: 'SeederForce', PartsCategoriesId: '1', id: 3 },
      { name: 'Gen3', PartsCategoriesId: '2', id: 4 },
      { name: 'Gen2', PartsCategoriesId: '2', id: 5 },
      { name: 'Gen1', PartsCategoriesId: '2', id: 6 },
      { name: 'vDrive', PartsCategoriesId: '3', id: 7 },
      { name: 'RowFlow', PartsCategoriesId: '3', id: 8 },
      { name: 'vSet', PartsCategoriesId: '4', id: 9 },
      { name: 'vSetSelect', PartsCategoriesId: '4', id: 10 },
      { name: 'eSet', PartsCategoriesId: '4', id: 11 },
      { name: 'Finger Meter', PartsCategoriesId: '4', id: 12 },
      { name: 'mSet', PartsCategoriesId: '4', id: 13 },
      { name: 'SRM', PartsCategoriesId: '6', id: 14 },
      { name: 'SMC', PartsCategoriesId: '1', id: 15 },
      { name: 'SeedTube', PartsCategoriesId: '1', id: 16 },
      { name: 'Weigh Pins', PartsCategoriesId: '1', id: 17 },
      { name: 'FurrowJet', PartsCategoriesId: '9', id: 18 },
      { name: 'vApplyHD', PartsCategoriesId: '9', id: 19 },
      { name: 'vDrive Insecticide', PartsCategoriesId: '10', id: 20 },
      { name: 'FurrowForce', PartsCategoriesId: '11', id: 21 },
      { name: 'SmartDepth', PartsCategoriesId: '12', id: 22 },
    ])

    WOCategoriesTable.bulkCreate([
      { WOCategoriesname: 'Meter Test', id: 1 },
      { WOCategoriesname: 'Service Call', id: 2 },
      { WOCategoriesname: 'Drop Off', id: 3 },
      { WOCategoriesname: 'Install', id: 4 },
      { WOCategoriesname: 'Delivery', id: 5 },
      { WOCategoriesname: 'Pickup', id: 6 },
      { WOCategoriesname: 'Drop Ship', id: 7 },
    ])

    WOStatusesTable.bulkCreate([
      { WOStatusesname: 'Schedule', id: 1 },
      { WOStatusesname: 'Assigned', id: 2 },
      { WOStatusesname: 'Open', id: 3 },
      { WOStatusesname: 'Complete', id: 4 },
      { WOStatusesname: 'Invoice', id: 5 },
    ])

    WOPrioritiesTable.bulkCreate([
      { WOPrioritiesname: 'Soon', id: 1 },
      { WOPrioritiesname: 'Normal', id: 2 },
      { WOPrioritiesname: 'Urgent', id: 3 }
    ])

    CustContactStatusesTable.bulkCreate([
      { name: 'Active', id: 1 },
      { name: 'Deceased', id: 2 },
      { name: 'Moved On', id: 3 },
    ])

    WOCategoriesTable.bulkCreate([
      { name: 'Category 1', id: 1 },
      { name: 'Category 2', id: 2 },
      { name: 'Category 3', id: 3 }
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