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
  db.query("SELECT WorkOrders.id as id, WOStatuses.name as WOSname, CustOrganizations.name as COname, WOPriorities.name as WOPname, WOCategories.name as WOCname, notes, description  FROM WorkOrders LEFT JOIN WOPriorities ON WorkOrders.WOPriorityId=WOPriorities.id LEFT JOIN WOStatuses ON WorkOrders.WOStatusId=WOStatuses.id LEFT JOIN CustOrganizations ON WorkOrders.CustOrganizationId=CustOrganizations.Id LEFT JOIN WOCategories ON WorkOrders.WOCategoryId=WOCategories.id").then(([results, metadata]) => {
    res.json(results); 
  })
});

//GET ONE BY ID
WorkOrdersRouter.get('/:id', async (req, res, next) => {
  console.log(`Get ${req.params.id}`)
  dbTable
    .findOne({
      where: { id: req.params.id }
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
  console.log(req.body.data)

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
    WOPriorityId: req.body.data.WOPriorityId
  })
  res.status(200)
});

//UPDATE
WorkOrdersRouter.post("/:id/update", async (req, res) => {
  console.log(req.body.data)
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
    WOPriorityId: req.body.data.WOPriorityId
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
WorkOrdersRouter.delete("/:id", (req, res) => {
  console.log(`Server started on port ${req.params.id}`)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = WorkOrdersRouter;
