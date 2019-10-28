const express = require("express");
const PlanterMonitorRouter = express.Router();
const dbTable = require('../../../db/models').PlanterMonitors;

// GET ALL
PlanterMonitorRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

module.exports = PlanterMonitorRouter;
