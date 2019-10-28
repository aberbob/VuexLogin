const express = require("express");
const CustContactStatusesRouter = express.Router();
const dbTable = require('../../../db/models').CustContactStatuses;

// GET ALL
CustContactStatusesRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

// //GET ONE BY ID
// CustContactStatusesRouter.get('/:id', async (req, res, next) => {
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

// //ADD
// CustContactStatusesRouter.post("/add", async (req, res) => {
//   console.log(req.body.data)
//   console.log(req.body.data.name)

//   await dbTable.create({
//     name: req.body.data.name
//   })
//   res.status(200)
// });

// //UPDATE
// CustContactStatusesRouter.post("/:id/update", async (req, res) => {
//   //console.log(req.body.data)
//   console.log('Update')
//   await dbTable.update({
//     name: req.body.data.name
//   }, { where: { id: req.params.id } });
//   res.status(200)
// });

// //DELETE
// CustContactStatusesRouter.delete("/:id", (req, res) => {
//   console.log(req.params.id)
//   dbTable.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   res.status(200)
// });

module.exports = CustContactStatusesRouter;
