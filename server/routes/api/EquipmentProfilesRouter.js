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
  db.query("SELECT equipmentprofiles.id, equipmentprofiles.name, equipmentprofiles.make, equipmentprofiles.model, equipmentprofiles.rowqty, equipmentprofiles.description, equipmentprofiles.type, planterharnessings.name as PHName, planterclosingwheels.name as PCWname, planterseedtubes.name as PSTname, planterseedfirmers.name  as PSFname, plantermonitors.name as PMonname, plantermeters.name as PMname, planterliquids.name as PLname, planterdrives.name as PDname, planterinsecticides.name as PIname, planterdownforces.name as PDFname, planterdepthadjusts.name as PDAname, custorganizations.name  as COname FROM equipmentprofiles LEFT JOIN planterharnessings ON equipmentprofiles.PlanterHarnessingId=planterharnessings.id LEFT JOIN planterclosingwheels ON equipmentprofiles.PlanterClosingWheelId=planterclosingwheels.id LEFT JOIN planterseedtubes ON equipmentprofiles.PlanterSeedTubeId=planterseedtubes.id LEFT JOIN planterseedfirmers ON equipmentprofiles.PlanterSeedFirmerId=planterseedfirmers.id LEFT JOIN plantermonitors ON equipmentprofiles.PlanterMonitorId=plantermonitors.id LEFT JOIN plantermeters ON equipmentprofiles.PlanterMeterId=plantermeters.id LEFT JOIN planterliquids ON equipmentprofiles.PlanterLiquidId=planterliquids.id LEFT JOIN planterinsecticides ON equipmentprofiles.PlanterInsecticideId=planterinsecticides.id LEFT JOIN planterdrives ON equipmentprofiles.PlanterDriveId=planterdrives.id LEFT JOIN planterdownforces ON equipmentprofiles.PlanterDownForceId=planterdownforces.id LEFT JOIN planterdepthadjusts ON equipmentprofiles.PlanterDepthAdjustId=planterdepthadjusts.id LEFT JOIN custorganizations ON equipmentprofiles.CustOrganizationId=custorganizations.id").then(([results, metadata]) => {
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
