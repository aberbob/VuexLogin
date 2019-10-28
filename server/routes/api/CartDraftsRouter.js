const express = require("express");
const CartDraftsRouter = express.Router();
const dbTable = require('../../db/models').CartDrafts;
const passport = require('passport');

// GET User's Cart
// CartDraftsRouter.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
//   dbTable.findOne({
//     where: { UsersId: req.user.id }
//   })
//     .then(product => {
//       res.status(200).json(product);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).send()
//     });
// });
CartDraftsRouter.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

CartDraftsRouter.post("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
  await dbTable.upsert({
    UsersId: req.user.id,
    items: req.body.items
  })
    .then(function (result) {
      res.status(200);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500);
    });
  res.send();
});
module.exports = CartDraftsRouter;
