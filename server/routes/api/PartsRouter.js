const express = require("express");
const PartsRouter = express.Router();
const dbTable = require('../../db/models').Parts;
const db = require('../../config/db');
const passport = require('passport');

// GET ALL
PartsRouter.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

// GET ALL DETAILS
PartsRouter.get("/alldetails", async (req, res) => {
  db.query("SELECT Parts.partnumber, Parts.description, Parts.notes, Parts.listprice, PartCategories.name as PCName, PartSubcategories.name as PSCName  FROM Parts LEFT JOIN PartCategories ON Parts.PartCategoriesId=PartCategories.id LEFT JOIN PartSubcategories ON Parts.PartSubcategoriesId=PartSubcategories.id").then(([results, metadata]) => {
    res.json(results);
  })
});

//GET ONE BY ID
PartsRouter.get('/:id/availability', async (req, res, next) => {
  db.query("SELECT locationpartqties.qty as qty, inventorylocations.name as ILname FROM locationpartqties LEFT JOIN inventorylocations ON locationpartqties.InventoryLocationsId=inventorylocations.id WHERE PartId=?",
    { replacements: [req.params.id] }).then(([results, metadata]) => {
      res.json(results);
    })
    .then(product => {
      console.log(product);
      res.json(product);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
PartsRouter.get('/:id', async (req, res, next) => {
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
PartsRouter.post("/add", async (req, res) => {
  console.log('partadd')
  console.log(req.body.data)
  await dbTable.create({
    partnumber: req.body.data.partnumber,
    description: req.body.data.description,
    PartsCategoriesId: req.body.data.PartsCategoriesId,
    PartsSubcategoriesId: req.body.data.PartsSubcategoriesId,
    notes: req.body.data.notes,
    uom: req.body.data.uom,
    listprice: req.body.data.listprice
  })
  res.status(200)
});

//UPDATE
PartsRouter.post("/:id/update", async (req, res) => {
  // console.log(req.body.data)
  console.log('partUpdate')
  console.log(req.body.data)
  await dbTable.update({
    partnumber: req.body.data.partnumber,
    description: req.body.data.description,
    PartsCategoriesId: req.body.data.PartsCategoriesId,
    PartsSubcategoriesId: req.body.data.PartsSubcategoriesId,
    notes: req.body.data.notes,
    uom: req.body.data.uom,
    listprice: req.body.data.listprice
  }, { where: { partnumber: req.params.id } });
  res.status(200)
});

//DELETE
PartsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      partnumber: req.params.id
    }
  })
  res.status(200)
});
module.exports = PartsRouter;
