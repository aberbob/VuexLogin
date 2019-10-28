const express = require("express");
const usersRouter = express.Router();
const dbTable = require('../../db/models').Users;

// GET
usersRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      // console.log(products);
      res.json(products);
    })
    .catch(err => console.log(err));
});

//ADD

//DELETE

module.exports = usersRouter;