const express = require("express");
const WorkOrdersRouter = express.Router();
const dbTable = require("../../../models/workOrders/WorkOrdersTable");
const WOStatusesTable = require("../../../models/workOrders/WOStatusesTable");
const Sequelize = require('sequelize');
const db = require('../../../config/db');

// GET ALL
WorkOrdersRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

WorkOrdersRouter.get("/WODetailJoin", async (req, res) => {
  db.query("SELECT WorkOrderId, WOStatusesname, CustOrganizationsname, WOPrioritiesname, WOCategoriesname, notes, description  FROM workorders LEFT JOIN wopriorities ON workorders.WOPrioirtyId=wopriorities.id LEFT JOIN wostatuses ON workorders.WOStatusId=wostatuses.id LEFT JOIN custorganizations ON workorders.CustOrganizationId=custorganizations.CustOrganizationsId LEFT JOIN wocategories ON workorders.WOCategoryId=wocategories.id").then(([results, metadata]) => {
    res.json(results); 
  })
});

//GET ONE BY ID
WorkOrdersRouter.get('/:id', async (req, res, next) => {
  console.log(`Get ${req.params.id}`)
  dbTable
    .findOne({
      where: { WorkOrderId: req.params.id }
    })
    .then(product => {
      //console.log(product);
      res.json(product);
    })
    .catch(err => console.log(err));
});

//ADD
WorkOrdersRouter.post("/add", async (req, res) => {
  console.log('add')

  await dbTable.create({
    description: req.body.data.description,
    type: req.body.data.type,
    notes: req.body.data.notes,
    EquipmentProfileId: req.body.data.EquipmentProfileId,
    WOCategoryId: req.body.data.WOCategoryId,
    WOStatusId: req.body.data.WOStatusId,
    CustContactId: req.body.data.CustContactId,
    CustOrganizationId: req.body.data.CustOrganizationId,
    UserId: req.body.data.UserId,
    WOPrioirtyId: req.body.data.WOPrioirtyId
  })
  res.status(200)
});

//UPDATE
WorkOrdersRouter.post("/:id/update", async (req, res) => {
  //console.log(req.body.data)
  console.log('Update')
  await dbTable.update({
    description: req.body.data.description,
    type: req.body.data.type,
    notes: req.body.data.notes,
    EquipmentProfileId: req.body.data.EquipmentProfileId,
    WOCategoryId: req.body.data.WOCategoryId,
    WOStatusId: req.body.data.WOStatusId,
    CustContactId: req.body.data.CustContactId,
    CustOrganizationId: req.body.data.CustOrganizationId,
    UserId: req.body.data.UserId,
    WOPrioirtyId: req.body.data.WOPrioirtyId
  }, { where: { WorkOrderId: req.params.id } });
  res.status(200)
});

//DELETE
WorkOrdersRouter.delete("/:id", (req, res) => {
  console.log(`Server started on port ${req.params.id}`)
  dbTable.destroy({
    where: {
      WorkOrderId: req.params.id
    }
  })
  res.status(200)
});
module.exports = WorkOrdersRouter;
