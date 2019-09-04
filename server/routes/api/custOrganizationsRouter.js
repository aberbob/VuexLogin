const express = require("express");
const custOrganizationsRouter = express.Router();
const dbTable = require("../../models/custOrganizationsTable");

// GET ALL
custOrganizationsRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
custOrganizationsRouter.get('/:id', async (req, res, next) => {
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
custOrganizationsRouter.post("/add", async (req, res) => {
  console.log('add')
  console.log(req.body.data.name)

  await dbTable.create({
    name: req.body.data.name,
    street: req.body.data.street,
    street2: req.body.data.street2,
    city: req.body.data.city,
    state: req.body.data.state,
    zip: req.body.data.zip,
    country: req.body.data.country,
    phone: req.body.data.phone
  })
  res.status(200)
});

//UPDATE
custOrganizationsRouter.post("/:id/update", async (req, res) => {
  //console.log(req.body.data)
  console.log('Update')
  await dbTable.update({
    name: req.body.data.name,
    street: req.body.data.street,
    street2: req.body.data.street2,
    city: req.body.data.city,
    state: req.body.data.state,
    zip: req.body.data.zip,
    country: req.body.data.country,
    phone: req.body.data.phone
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
custOrganizationsRouter.delete("/:id", (req, res) => {
  console.log(req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = custOrganizationsRouter;
