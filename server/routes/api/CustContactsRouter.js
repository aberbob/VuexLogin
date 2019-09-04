const express = require("express");
const custContactsRouter = express.Router();
const dbTable = require("../../models/custContactsTable");

// GET ALL
custContactsRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      //console.log(products);
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
custContactsRouter.get('/:id', async (req, res, next) => {
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
custContactsRouter.post("/add", async (req, res) => {
  console.log('add')
  // console.log(req.body.data.fn)

  await dbTable.create({
    fn: req.body.data.fn,
    ln: req.body.data.ln,
    email: req.body.data.email,
    phonenumber: req.body.data.phonenumber,
    CustOrganizationId: req.body.data.CustOrganizationId,
    CustContactStatusId: req.body.data.CustContactStatusId
  })
  res.status(200)
});

//UPDATE
custContactsRouter.post("/:id/update", async (req, res) => {
  console.log(req.body.data)
  console.log('Update')
  await dbTable.update({
    fn: req.body.data.fn,
    ln: req.body.data.ln,
    email: req.body.data.email,
    phonenumber: req.body.data.phonenumber,
    CustOrganizationId: req.body.data.CustOrganizationId,
    CustContactStatusId: req.body.data.CustContactStatusId
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
custContactsRouter.delete("/:id", (req, res) => {
  console.log('delete' + req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = custContactsRouter;
