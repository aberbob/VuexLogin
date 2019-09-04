const express = require("express");
const productsRouter = express.Router();
const dbTable = require("../../models/ProductsTable");

// GET ALL
productsRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
productsRouter.get('/:id', async (req, res, next) => {
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
productsRouter.post("/add", async (req, res) => {
  console.log('add')

  await dbTable.create({
    partnumber: req.body.data.partnumber,
    description: req.body.data.description,
    group: req.body.data.group,
    category: req.body.data.category,
    notes: req.body.data.notes,
    uom: req.body.data.uom,
    listprice: req.body.data.listprice
  })
  res.status(200)
});

//UPDATE
productsRouter.post("/:id/update", async (req, res) => {
  //console.log(req.body.data)
  console.log('Update')
  await dbTable.update({ partnumber: req.body.data.partnumber, description: req.body.data.description, group: req.body.data.group, category: req.body.data.category, notes: req.body.data.notes, uom: req.body.data.uom, listprice: req.body.data.listprice }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
productsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = productsRouter;
