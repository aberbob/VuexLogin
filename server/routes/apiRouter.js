const express = require("express");
const apiRouter = express.Router();
const reset = "yes"
const Sequelize = require('sequelize');
const db = require('../config/db');
const passport = require('passport');


//Databases
const productsTable = require("../models/productsTable");
const CustContactsTable = require("../models/CustContactsTable");
const UsersTable = require("../models/UsersTable");
const CustOrganizationsTable = require("../models/CustOrganizationsTable");
const InventoryLocationsTable = require("../models/InventoryLocationsTable");
const InvoicesTable = require("../models/InvoicesTable");
const InvoiceItemsTable = require("../models/InvoiceItemsTable");
const EquipmentProfilesTable = require("../models/EquipmentProfilesTable");
const UserPermsTable = require("../models/UserPermsTable");
const WOCategoriesTable = require("../models/WOCategoriesTable");
const WorkOrdersTable = require("../models/WorkOrdersTable");
const WOStatusesTable = require("../models/WOStatusesTable");
const WOPrioritiesTable = require("../models/WOprioritiesTable");
const CustContactStatusesTable = require("../models/CustContactStatusesTable");
const OrgST101TypesTable = require("../models/OrgST101TypesTable");
const OrgServicePlanTypesTable = require("../models/OrgServicePlanTypesTable");
const OrgMarketsTable = require("../models/OrgMarketsTable");
const OrgInvoicingTypesTable = require("../models/OrgInvoicingTypesTable");
const OrgFarmTypesTable = require("../models/OrgFarmTypesTable");
const OrgAccountTypesTable = require("../models/OrgAccountTypesTable");

apiRouter.get('/createDatabaseTables', passport.authenticate('jwt', { session: false }), (req, res) => {

  if (req.user.username != 'adminUser') {
    res.sendStatus(403);  // Only allow adminUser to use this endpoint
  } else if (reset === "yes") {

    //Creates and Alters the tables
    productsTable.sync({ alter: true })
    CustContactsTable.sync({ alter: true })
    UsersTable.sync({ alter: true })
    EquipmentProfilesTable.sync({ alter: true })
    CustOrganizationsTable.sync({ alter: true })
    InventoryLocationsTable.sync({ alter: true })
    InvoicesTable.sync({ alter: true })
    InvoiceItemsTable.sync({ alter: true })
    UserPermsTable.sync({ alter: true })
    WOCategoriesTable.sync({ alter: true })
    WorkOrdersTable.sync({ alter: true })
    WOStatusesTable.sync({ alter: true })
    WOPrioritiesTable.sync({ alter: true })
    CustContactStatusesTable.sync({ alter: true })
    OrgST101TypesTable.sync({ alter: true })
    OrgServicePlanTypesTable.sync({ alter: true })
    OrgMarketsTable.sync({ alter: true })
    OrgInvoicingTypesTable.sync({ alter: true })
    OrgFarmTypesTable.sync({ alter: true })
    OrgAccountTypesTable.sync({ alter: true })

    CustOrganizationsTable.hasMany(EquipmentProfilesTable);
    CustOrganizationsTable.hasMany(CustContactsTable);
    CustContactStatusesTable.hasMany(CustContactsTable);
    UserPermsTable.hasMany(UsersTable);

    EquipmentProfilesTable.hasMany(WorkOrdersTable);
    WOCategoriesTable.hasMany(WorkOrdersTable);
    WOStatusesTable.hasMany(WorkOrdersTable);
    CustContactsTable.hasMany(WorkOrdersTable);
    CustOrganizationsTable.hasMany(WorkOrdersTable);
    UsersTable.hasMany(WorkOrdersTable);
    WOPrioritiesTable.hasMany(WorkOrdersTable);

    InvoicesTable.hasMany(InvoiceItemsTable);

    OrgST101TypesTable.hasMany(CustOrganizationsTable);
    OrgServicePlanTypesTable.hasMany(CustOrganizationsTable);
    OrgMarketsTable.hasMany(CustOrganizationsTable);
    OrgInvoicingTypesTable.hasMany(CustOrganizationsTable);
    OrgFarmTypesTable.hasMany(CustOrganizationsTable);
    OrgAccountTypesTable.hasMany(CustOrganizationsTable);

    res.sendStatus(200)
  }
});

apiRouter.get('/deleteDefaultData', (req, res) => {
  if (reset === "yes") {
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
  }
  res.sendStatus(200)
});

apiRouter.get('/createDefaultData', (req, res) => {
  if (reset === "yes") {
    //Default Values

    WOStatusesTable.bulkCreate([
      { name: 'Active', id: 1 },
      { name: 'Closed', id: 2 },
      { name: 'On Hold', id: 3 }
    ])

    WOPrioritiesTable.bulkCreate([
      { name: 'Low', id: 1 },
      { name: 'Normal', id: 2 },
      { name: 'High', id: 3 }
    ])

    CustContactStatusesTable.bulkCreate([
      { name: 'Active', id: 1 },
      { name: 'Disabled', id: 2 }
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
          where: {completed: true}
        }
      }]
    });
    
  }

  res.sendStatus(200)
});

module.exports = apiRouter;