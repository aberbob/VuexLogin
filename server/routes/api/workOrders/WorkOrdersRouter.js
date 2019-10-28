const express = require("express");
const WorkOrdersRouter = express.Router();
const dbTable = require('../../../db/models').WorkOrders;
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
  db.query("SELECT WorkOrders.id as id, WOStatuses.name as WOSname, CustOrganizations.name as COname, WOPriorities.name as WOPname, WOCategories.name as WOCname, notes, description  FROM WorkOrders LEFT JOIN WOPriorities ON WorkOrders.WOPrioritiesId=WOPriorities.id LEFT JOIN WOStatuses ON WorkOrders.WOStatusesId=WOStatuses.id LEFT JOIN CustOrganizations ON WorkOrders.CustOrganizationsId=CustOrganizations.Id LEFT JOIN WOCategories ON WorkOrders.WOCategoriesId=WOCategories.id").then(([results, metadata]) => {
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

  await dbTable
    .create({
      description: req.body.data.description,
      type: req.body.data.type,
      notes: req.body.data.notes,
      EquipmentProfilesId: req.body.data.EquipmentProfilesId,
      WOCategoriesId: req.body.data.WOCategoriesId,
      WOStatusesId: req.body.data.WOStatusesId,
      CustContactsId: req.body.data.CustContactsId,
      CustOrganizationsId: req.body.data.CustOrganizationsId,
      UsersId: req.body.data.UsersId,
      WOPrioritiesId: req.body.data.WOPrioritiesId
    })
    .then(function (result) {
      res.status(200);
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
    EquipmentProfilesId: req.body.data.EquipmentProfilesId,
    WOCategoriesId: req.body.data.WOCategoriesId,
    WOStatusesId: req.body.data.WOStatusesId,
    CustContactsId: req.body.data.CustContactsId,
    CustOrganizationsId: req.body.data.CustOrganizationsId,
    UsersId: req.body.data.UsersId,
    WOPrioritiesId: req.body.data.WOPrioritiesId
  }, { where: { id: req.params.id } })
    .then(function (result) {
      res.status(200);
    });
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
    .then(function (result) {
      res.status(200);
    })
  res.status(200)
});
module.exports = WorkOrdersRouter;
