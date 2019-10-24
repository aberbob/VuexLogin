const express = require("express");
const EquipmentProfilesRouter = express.Router();
const dbTable = require("../../models/EquipmentProfilesTable");
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
  db.query("SELECT EquipmentProfiles.id, EquipmentProfiles.name, EquipmentProfiles.make, EquipmentProfiles.model, EquipmentProfiles.rowqty, EquipmentProfiles.description, EquipmentProfiles.type, PlanterHarnessings.name as PHName, PlanterClosingWheels.name as PCWname, PlanterSeedTubes.name as PSTname, PlanterSeedFirmers.name  as PSFname, PlanterMonitors.name as PMonname, PlanterMeters.name as PMname, PlanterLiquids.name as PLname, PlanterDrives.name as PDname, PlanterInsecticides.name as PIname, PlanterDownForces.name as PDFname, PlanterDepthAdjusts.name as PDAname, CustOrganizations.name  as COname FROM EquipmentProfiles LEFT JOIN PlanterHarnessings ON EquipmentProfiles.PlanterHarnessingId=PlanterHarnessings.id LEFT JOIN PlanterClosingWheels ON EquipmentProfiles.PlanterClosingWheelId=PlanterClosingWheels.id LEFT JOIN PlanterSeedTubes ON EquipmentProfiles.PlanterSeedTubeId=PlanterSeedTubes.id LEFT JOIN PlanterSeedFirmers ON EquipmentProfiles.PlanterSeedFirmerId=PlanterSeedFirmers.id LEFT JOIN PlanterMonitors ON EquipmentProfiles.PlanterMonitorId=PlanterMonitors.id LEFT JOIN PlanterMeters ON EquipmentProfiles.PlanterMeterId=PlanterMeters.id LEFT JOIN PlanterLiquids ON EquipmentProfiles.PlanterLiquidId=PlanterLiquids.id LEFT JOIN PlanterInsecticides ON EquipmentProfiles.PlanterInsecticideId=PlanterInsecticides.id LEFT JOIN PlanterDrives ON EquipmentProfiles.PlanterDriveId=PlanterDrives.id LEFT JOIN PlanterDownForces ON EquipmentProfiles.PlanterDownForceId=PlanterDownForces.id LEFT JOIN PlanterDepthAdjusts ON EquipmentProfiles.PlanterDepthAdjustId=PlanterDepthAdjusts.id LEFT JOIN CustOrganizations ON EquipmentProfiles.CustOrganizationId=CustOrganizations.id;").then(([results, metadata]) => {
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
    PlanterClosingWheelId: req.body.data.PlanterClosingWheelId,
    PlanterDepthAdjustId: req.body.data.PlanterDepthAdjustId,
    PlanterDownForceId: req.body.data.PlanterDownForceId,
    PlanterDriveId: req.body.data.PlanterDriveId,
    PlanterMeterId: req.body.data.PlanterMeterId,
    PlanterInsecticideId: req.body.data.PlanterInsecticideId,
    PlanterLiquidId: req.body.data.PlanterLiquidId,
    PlanterSeedFirmerId: req.body.data.PlanterSeedFirmerId,
    PlanterSeedTubeId: req.body.data.PlanterSeedTubeId,
    PlanterMonitorId: req.body.data.PlanterMonitorId,
    PlanterHarnessingId: req.body.data.PlanterHarnessingId,
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
    PlanterClosingWheelId: req.body.data.PlanterClosingWheelId,
    PlanterDepthAdjustId: req.body.data.PlanterDepthAdjustId,
    PlanterDownForceId: req.body.data.PlanterDownForceId,
    PlanterDriveId: req.body.data.PlanterDriveId,
    PlanterMeterId: req.body.data.PlanterMeterId,
    PlanterInsecticideId: req.body.data.PlanterInsecticideId,
    PlanterLiquidId: req.body.data.PlanterLiquidId,
    PlanterSeedFirmerId: req.body.data.PlanterSeedFirmerId,
    PlanterSeedTubeId: req.body.data.PlanterSeedTubeId,
    PlanterMonitorId: req.body.data.PlanterMonitorId,
    PlanterHarnessingId: req.body.data.PlanterHarnessingId,
    
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
