const express = require("express");
const TransfersRouter = express.Router();
const dbTable = require("../../models/transfers/TransfersTable");
const db = require('../../config/db');

// GET ALL
TransfersRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('Transfers');
      res.json(products);
    })
    .catch(err => console.log(err));
});

// GET ALL DETAILS
TransfersRouter.get("/alldetails", async (req, res) => {
  db.query("SELECT parts.partnumber, parts.description, parts.notes, parts.listprice, partscategories.name as PCName, partssubcategories.name as PSCName  FROM parts LEFT JOIN partscategories ON parts.PartsCategoryId=partscategories.id LEFT JOIN partssubcategories ON parts.PartsSubcategoryId=partssubcategories.id").then(([results, metadata]) => {
    res.json(results);
  })
});

//GET ONE BY ID
TransfersRouter.get('/:id/availability', async (req, res, next) => {
  db.query("SELECT locationpartqties.qty as qty, inventorylocations.name as ILname FROM locationpartqties LEFT JOIN inventorylocations ON locationpartqties.InventoryLocationId=inventorylocations.id WHERE PartId=?", 
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
TransfersRouter.get('/:id', async (req, res, next) => {
  dbTable
    .findOne({
      where: { partnumber: req.params.id }
    })
    .then(product => {
      //console.log(product);
      res.json(product);
    })
    .catch(err => console.log(err));
});

//ADD
TransfersRouter.post("/add", async (req, res) => {
  console.log('partadd')
  console.log(req.body.data)
  await dbTable.create({
    partnumber: req.body.data.partnumber,
    description: req.body.data.description,
    PartsCategoryId: req.body.data.PartsCategoryId,
    PartsSubcategoryId: req.body.data.PartsSubcategoryId,
    notes: req.body.data.notes,
    uom: req.body.data.uom,
    listprice: req.body.data.listprice
  })
  res.status(200)
});

//UPDATE
TransfersRouter.post("/:id/update", async (req, res) => {
  // console.log(req.body.data)
  console.log('partUpdate')
  console.log(req.body.data)
  await dbTable.update({
    partnumber: req.body.data.partnumber,
    description: req.body.data.description,
    PartsCategoryId: req.body.data.PartsCategoryId,
    PartsSubcategoryId: req.body.data.PartsSubcategoryId,
    notes: req.body.data.notes,
    uom: req.body.data.uom,
    listprice: req.body.data.listprice
  }, { where: { partnumber: req.params.id } });
  res.status(200)
});

//DELETE
TransfersRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      partnumber: req.params.id
    }
  })
  res.status(200)
});
module.exports = TransfersRouter;
