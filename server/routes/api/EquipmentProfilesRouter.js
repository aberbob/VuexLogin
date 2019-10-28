const express = require("express");
const EquipmentProfilesRouter = express.Router();
const dbTable = require('../../db/models').EquipmentProfiles;
const db = require('../../config/db');

// GET ALL
EquipmentProfilesRouter.get("/", async (req, res) => {
  console.log('EquipmentAll')
  dbTable
    .findAll()
    .then(products => {
      //console.log(products);
      res.json(products);
    })
    .catch(err => console.log(err));
});

// GET ALL
EquipmentProfilesRouter.get("/alldetails", async (req, res) => {
  console.log('EquipmentAll')
  db.query("SELECT EquipmentProfiles.id, EquipmentProfiles.name, EquipmentProfiles.make, EquipmentProfiles.model, EquipmentProfiles.rowqty, EquipmentProfiles.description, EquipmentProfiles.type, PlanterHarnessings.name as PHName, PlanterClosingWheels.name as PCWname, PlanterSeedTubes.name as PSTname, PlanterSeedFirmers.name  as PSFname, PlanterMonitors.name as PMonname, PlanterMeters.name as PMname, PlanterLiquids.name as PLname, PlanterDrives.name as PDname, PlanterInsecticides.name as PIname, PlanterDownForces.name as PDFname, PlanterDepthAdjusts.name as PDAname, CustOrganizations.name  as COname FROM EquipmentProfiles LEFT JOIN PlanterHarnessings ON EquipmentProfiles.PlanterHarnessingsId=PlanterHarnessings.id LEFT JOIN PlanterClosingWheels ON EquipmentProfiles.PlanterClosingWheelsId=PlanterClosingWheels.id LEFT JOIN PlanterSeedTubes ON EquipmentProfiles.PlanterSeedTubesId=PlanterSeedTubes.id LEFT JOIN PlanterSeedFirmers ON EquipmentProfiles.PlanterSeedFirmersId=PlanterSeedFirmers.id LEFT JOIN PlanterMonitors ON EquipmentProfiles.PlanterMonitorsId=PlanterMonitors.id LEFT JOIN PlanterMeters ON EquipmentProfiles.PlanterMetersId=PlanterMeters.id LEFT JOIN PlanterLiquids ON EquipmentProfiles.PlanterLiquidsId=PlanterLiquids.id LEFT JOIN PlanterInsecticides ON EquipmentProfiles.PlanterInsecticidesId=PlanterInsecticides.id LEFT JOIN PlanterDrives ON EquipmentProfiles.PlanterDrivesId=PlanterDrives.id LEFT JOIN PlanterDownForces ON EquipmentProfiles.PlanterDownForcesId=PlanterDownForces.id LEFT JOIN PlanterDepthAdjusts ON EquipmentProfiles.PlanterDepthAdjustsId=PlanterDepthAdjusts.id LEFT JOIN CustOrganizations ON EquipmentProfiles.CustOrganizationsId=CustOrganizations.id;").then(([results, metadata]) => {
    res.json(results);
  })
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
  console.log('EquipmentAdd')
  console.log(req.body.data)

  await dbTable.create({
    name: req.body.data.name,
    CustOrganizationId: req.body.data.CustOrganizationId,
    make: req.body.data.make,
    model: req.body.data.model,
    rowqty: req.body.data.rowqty,
    PlanterClosingWheelsId: req.body.data.PlanterClosingWheelsId,
    PlanterDepthAdjustsId: req.body.data.PlanterDepthAdjustsId,
    PlanterDownForcesId: req.body.data.PlanterDownForcesId,
    PlanterDrivesId: req.body.data.PlanterDrivesId,
    PlanterMetersId: req.body.data.PlanterMetersId,
    PlanterInsecticidesId: req.body.data.PlanterInsecticidesId,
    PlanterLiquidsId: req.body.data.PlanterLiquidsId,
    PlanterSeedFirmersId: req.body.data.PlanterSeedFirmersId,
    PlanterSeedTubesId: req.body.data.PlanterSeedTubesId,
    PlanterMonitorsId: req.body.data.PlanterMonitorsId,
    PlanterHarnessingsId: req.body.data.PlanterHarnessingsId,
  })
  res.status(200)
});

//UPDATE
EquipmentProfilesRouter.post("/:id/update", async (req, res) => {
  console.log(req.body.data)
  console.log(req.body.data.PlanterDownForceId)
  console.log('EquipmentUpdate')
  await dbTable.update({
    name: req.body.data.name,
    CustOrganizationId: req.body.data.CustOrganizationId,
    make: req.body.data.make,
    model: req.body.data.model,
    rowqty: req.body.data.rowqty,
    PlanterClosingWheelsId: req.body.data.PlanterClosingWheelsId,
    PlanterDepthAdjustsId: req.body.data.PlanterDepthAdjustsId,
    PlanterDownForcesId: req.body.data.PlanterDownForcesId,
    PlanterDrivesId: req.body.data.PlanterDrivesId,
    PlanterMetersId: req.body.data.PlanterMetersId,
    PlanterInsecticidesId: req.body.data.PlanterInsecticidesId,
    PlanterLiquidsId: req.body.data.PlanterLiquidsId,
    PlanterSeedFirmersId: req.body.data.PlanterSeedFirmersId,
    PlanterSeedTubesId: req.body.data.PlanterSeedTubesId,
    PlanterMonitorsId: req.body.data.PlanterMonitorsId,
    PlanterHarnessingsId: req.body.data.PlanterHarnessingsId,

  }, { where: { id: req.params.id } })
    .then(function (result) {
      res.status(200);
    });
  res.status(200)
});

//DELETE
EquipmentProfilesRouter.delete("/:id", (req, res) => {
  console.log('delete' + req.params.id)
  dbTable
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (result) {
      res.status(200);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500);
    });
  res.status(200)
});
module.exports = EquipmentProfilesRouter;
