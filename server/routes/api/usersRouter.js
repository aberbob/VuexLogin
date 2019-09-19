const express = require("express");
const usersRouter = express.Router();
const PartsTable = require("../../models/inventory/PartsTable");
const UsersTable = require("../../models/UsersTable");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
const { forwardAuthenticated } = require('../../config/auth');
const passport = require('passport');

// GET
usersRouter.get("/login", async (req, res) => {
  PartsTable
    .findAll()
    .then(products => {
      console.log(products);
      res.send(products);
    })
    .catch(err => console.log(err));
});

usersRouter.post("/register", (req, res) => {
  const newUser = {
    fn: req.body.data.fn,
    ln: req.body.data.ln,
    username: req.body.data.fn.toLowerCase() + "." + req.body.data.ln.toLowerCase(),
    password:  bcrypt.hashSync(req.body.data.password, salt)
  };
  
  UsersTable.findOne({
  where: {fn: username}
  })
  console.log(newUser);

  UsersTable.create({
    fn: newUser.fn,
    ln: newUser.ln,
    password: newUser.password
  })
});

// Login
usersRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/items',
    failureRedirect: 'www.google.com',
    //failureFlash: true
  })(req, res, next);
});

//ADD

//DELETE

module.exports = usersRouter;