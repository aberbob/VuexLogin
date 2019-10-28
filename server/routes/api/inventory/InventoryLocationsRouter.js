const express = require("express");
const InventoryLocationsRouter = express.Router();
const dbTable = require('../../../db/models').InventoryLocations;
const db = require('../../../config/db');

// GET ALL
InventoryLocationsRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      //console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

InventoryLocationsRouter.get('/:id/inventory', async (req, res, next) => {
  db.query("SELECT locationpartqties.qty as qty, PartId, parts.description FROM locationpartqties LEFT JOIN inventorylocations ON locationpartqties.InventoryLocationId=inventorylocations.id LEFT JOIN parts ON locationpartqties.PartId=parts.partnumber WHERE InventoryLocationId=?", 
  { replacements: [req.params.id]}).then(([results, metadata]) => {
    res.json(results);
  })
  .then(product => {
    console.log(product);
    res.json(product);
  })
  .catch(err => console.log(err));
});

//GET ONE BY ID
InventoryLocationsRouter.get('/:id', async (req, res, next) => {
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
InventoryLocationsRouter.post("/add", async (req, res) => {
  console.log('add')
  console.log(req.body.data.name)

  await dbTable.create({
    name: req.body.data.name,
    street: req.body.data.street,
    street2: req.body.data.street2,
    city: req.body.data.city,
    state: req.body.data.state,
    zipcode: req.body.data.zipcode,
    
  })
  res.status(200)
});

//UPDATE
InventoryLocationsRouter.post("/:id/update", async (req, res) => {
  console.log(req.body.data)
  console.log('Update')
  await dbTable.update({
    name: req.body.data.name,
    street: req.body.data.street,
    street2: req.body.data.street2,
    city: req.body.data.city,
    state: req.body.data.state,
    zipcode: req.body.data.zipcode,
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
InventoryLocationsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = InventoryLocationsRouter;
