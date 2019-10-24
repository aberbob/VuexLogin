const express = require("express");
const CartDraftsRouter = express.Router();
const dbTable = require('../../db/models').CartDrafts;
const passport = require('passport');

// GET User's Cart
CartDraftsRouter.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
  console.log(req.user);
  dbTable
    .findOne({
      where: { UsersId: req.user.id }
    })
    .then(product => {
      //console.log(product);
      res.json(product);
    })
    .catch(err => console.log(err));
  res.status(200)
});

// GET ALL
CartDraftsRouter.get("/all", async (req, res) => {
  console.log(dbTable);
  dbTable
    .findAll()
    .then(result => {
      console.log('CartDrafts');
      res.json(result);
    })
    .catch(err => console.log(err));
  res.status(200)
});

//GET ONE BY ID
CartDraftsRouter.get('/:id', async (req, res, next) => {
  dbTable
    .findOne({
      where: { UsersId: req.params.id }
    })
    .then(result => {
      //console.log(product);
      res.json(result);
    })
    .catch(err => console.log(err));
  res.status(200)
});

//ADD
CartDraftsRouter.post("/add", async (req, res) => {
  console.log('partadd')
  console.log(req.body)
  await dbTable.create({
    UsersId: req.body.UsersId,
    items: req.body.items,
  })
    .then(result => {
      res.status(200).send();
    })
    .catch(err => console.log(err));
  res.status(200)
});

//UPDATE
CartDraftsRouter.post("/:id/update", async (req, res) => {
  // console.log(req.body)
  console.log('CartUpdate')
  console.log(req.body)
  await dbTable.update({
    items: req.body.items,
  }, { where: { UsersId: req.params.id } })
    .then(result =>{
      res.status(200).send();
    })
    .catch(err => console.log(err));
  res.status(200)
});

//DELETE
CartDraftsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      UsersId: req.params.id
    }
  })
    .then(result => {
      res.status(200).send();
    })
    .catch(err => console.log(err));
  res.status(200)
});
module.exports = CartDraftsRouter;
