const express = require("express");
const EquipmentInspectionsRouter = express.Router();
const dbTable = require('../../db/models').EquipmentInspections;
const db = require('../../config/db');

// GET ALL
EquipmentInspectionsRouter.get("/", async (req, res) => {
  console.log(dbTable);
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});



//GET ONE BY ID
EquipmentInspectionsRouter.get('/:id', async (req, res, next) => {
  dbTable
    .findAll({
      where: { PlanterId: req.params.id }
    })
    .then(product => {
      // product.measurements = JSON.parse(row.measurements)
      //console.log(product);
      res.json(product);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
EquipmentInspectionsRouter.get('/wo/:id', async (req, res, next) => {
  console.log(req.params)
  console.log('here1')
  dbTable
    .findOne({
      where: { WorkOrderId: req.params.id }
    })
    .then(product => {
      // product.measurements = JSON.parse(row.measurements)
      //console.log(product);
      res.json(product);
    })
    .catch(err => console.log(err));
});

//ADD
EquipmentInspectionsRouter.post("/add", async (req, res) => {
  console.log('Inspectadd')
  console.log(req.body)
  console.log(req.body.data.date)
  console.log(req.body.data.PlanterId)
  console.log(req.body.data.measurements)
  await dbTable.create({
    date: req.body.data.date,
    PlanterId: req.body.data.PlanterId,
    measurements: req.body.data.measurements,
    WorkOrderId: req.body.data.WorkOrderId,
  })
  res.status(200)
});

//UPDATE
EquipmentInspectionsRouter.post("/:id/update", async (req, res) => {
  // console.log(req.body.data)
  console.log('partUpdate')
  console.log(req.body.data)
  await dbTable.update({
    date: req.body.data.date,
    PlanterId: req.body.data.PlanterId,
    measurements: req.body.data.measurements,
  }, { where: { partnumber: req.params.id } });
  res.status(200)
});

//DELETE
EquipmentInspectionsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      partnumber: req.params.id
    }
  })
  res.status(200)
});
module.exports = EquipmentInspectionsRouter;
