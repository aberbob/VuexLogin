const bcrypt = require('bcrypt');

// Load User model
const UserDB = require('../models/UsersTable');

//passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJWT;

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  function (username, password, cb) {
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
    //console.log(username)
    return UserDB
      .findOne({
        where: { username: username },
        raw: true
      })
      .then(user => {
        //console.log(user)
        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        if (user) {
          console.log(user)
          bcrypt.compare(password, user.password).then((result) => {
            if (result) {
              const payload = {
                id: user.id,
                username: user.username,
                authLevel: user.permgroup,
              }
              return cb(null, payload, { message: 'Logged In Successfully' });
            } else {
              return cb(null, false, { message: 'Incorrect email or password.' });
            }
          })
        }
      })
      .catch(err => cb(err));
  }
));

passport.use(new JWTStrategy({
  jwtFromRequest: function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['auth'];
    }
    return token;
  },
  secretOrKey: 'your_jwt_secret'
}, function (jwt_payload, done) {
  done(null, jwt_payload);  // Giving that there was no error and the payload itself to access user data
}));
