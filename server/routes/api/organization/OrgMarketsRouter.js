const express = require("express");
const OrgMarketsRouter = express.Router();
const dbTable = require('../../../db/models').OrgMarkets;

// GET ALL
OrgMarketsRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
// WOStatusesRouter.get('/:id', async (req, res, next) => {
//   dbTable
//     .findOne({
//       where: { id: req.params.id }
//     })
//     .then(product => {
//       //console.log(product);
//       res.json(product);
//     })
//     .catch(err => console.log(err));
// });

module.exports = OrgMarketsRouter;
