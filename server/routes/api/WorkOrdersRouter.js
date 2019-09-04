const express = require("express");
const WorkOrdersRouter = express.Router();
const dbTable = require("../../models/WorkOrdersTable");
const WOStatusesTable = require("../../models/WOStatusesTable");

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
  WOStatusesTable
    .findAll({
      include: [{
        model: dbTable,
        through: {
          attributes: ['id', 'name']
        }
      }]
    });
});

//GET ONE BY ID
WorkOrdersRouter.get('/:id', async (req, res, next) => {
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
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
WorkOrdersRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = WorkOrdersRouter;
