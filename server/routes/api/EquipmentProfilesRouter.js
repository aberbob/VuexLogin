const express = require("express");
const EquipmentProfilesRouter = express.Router();
const dbTable = require("../../models/EquipmentProfilesTable");

// GET ALL
EquipmentProfilesRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      //console.log(products);
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
EquipmentProfilesRouter.get('/:id', async (req, res, next) => {
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
EquipmentProfilesRouter.post("/add", async (req, res) => {
  console.log('add')
 // console.log(req.body.data.fn)

  await dbTable.create({
    name: req.body.data.name,
    CustOrganizationId: req.body.data.CustOrganizationId,
    make: req.body.data.make,
    model: req.body.data.model,
    rowqty: req.body.data.rowqty,
    downforce: req.body.data.downforce,
    monitor: req.body.data.monitor,
    drivetype: req.body.data.drivetype,
    meter: req.body.data.meter,
    harnessing: req.body.data.harnessing,
    liquidinsecticide: req.body.data.liquidinsecticide
  })
  res.status(200)
});

//UPDATE
EquipmentProfilesRouter.post("/:id/update", async (req, res) => {
  console.log(req.body.data)
  console.log('Update')
  await dbTable.update({
    name: req.body.data.name,
    CustOrganizationId: req.body.data.CustOrganizationId,
    make: req.body.data.make,
    model: req.body.data.model,
    rowqty: req.body.data.rowqty,
    downforce: req.body.data.downforce,
    monitor: req.body.data.monitor,
    drivetype: req.body.data.drivetype,
    meter: req.body.data.meter,
    harnessing: req.body.data.harnessing,
    liquidinsecticide: req.body.data.liquidinsecticide
    
  }, { where: { id: req.params.id } });
  res.status(200)
});

//DELETE
EquipmentProfilesRouter.delete("/:id", (req, res) => {
  console.log('delete' + req.params.id)
  dbTable.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200)
});
module.exports = EquipmentProfilesRouter;
