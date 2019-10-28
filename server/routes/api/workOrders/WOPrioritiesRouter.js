const express = require("express");
const WOPrioritiesRouter = express.Router();
const dbTable = require('../../../db/models').WOPriorities;

// GET ALL
WOPrioritiesRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
// WOPrioritiesRouter.get('/:id', async (req, res, next) => {
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

module.exports = WOPrioritiesRouter;
