const express = require("express");
const MarketItemsRouter = express.Router();
const dbTable = require('../../../db/models').MarketItems;

// GET ALL
MarketItemsRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      //console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
MarketItemsRouter.get('/:id', async (req, res, next) => {
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
MarketItemsRouter.post("/add", async (req, res) => {
  console.log('add')
  console.log(req.body.data.name)

  await dbTable.create({
    date: req.body.data.date,
    price: req.body.data.price,
    title: req.body.data.title,
    body: req.body.data.body,
    sold: req.body.data.sold,
    UsersId: req.body.data.UsersId,
  })
  res.status(200)
});

//UPDATE
MarketItemsRouter.post("/:id/update", async (req, res) => {
  console.log(req.body.data)
  console.log('Update')
  await dbTable.update({
    date: req.body.data.date,
    price: req.body.data.price,
    title: req.body.data.title,
    body: req.body.data.body,
    sold: req.body.data.sold,
    UsersId: req.body.data.UsersId,
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
MarketItemsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = MarketItemsRouter;
