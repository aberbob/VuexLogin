const express = require("express");
const AuthRouter = express.Router();
const Joi = require('@hapi/joi');
const UsersTable = require("../../../models/UsersTable");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

require('dotenv').config();

function responderror422(res) {
    const error = 'Unable to login.'
    console.log(error)
    res.status(422);
    res.json({ error: error });
}

const schema = Joi.object().keys({
    fn: Joi.string(),
    ln: Joi.string(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirmpassword: Joi.string()
});

AuthRouter.get("/", async (req, res) => {
    res.json({
        message: 'testing',
        user: req.user,
    })
});

AuthRouter.post("/login", async (req, res) => {
    console.log('loginRoute')
    //console.log(user)
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log ('after passport')
        console.log(user)
        console.log(err)
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right'
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            // When giving the JWT library the user data, it needs to be a plain/vanilla javascript object
            const token = jwt.sign(user, 'your_jwt_secret');
            res.cookie('auth', token, {
                maxAge: 1209600000,  // Login expiry time, two weeks in milliseconds
                // secure: true,  // Only pass cookie over https to prevent interception
                sameSite: true,
                httpOnly: false
            })
            return res.json({ user });
        });
    })(req, res);
});

// AuthRouter.post("/login", async (req, res) => {
//     const result = Joi.validate(req.body.data, schema);
//     if (result.error === null) {
//         UsersTable
//             .findOne({
//                 where: { username: req.body.data.username }
//             })
//             .then(user => {
//                 if (user) {
//                     console.log(user)
//                     bcrypt.compare(req.body.data.password, user.password).then((result) => {
//                         if (result) {
//                             const payload = {
//                                 id: user.id,
//                                 username: user.username
//                             }
//                             // req.session.user = user.id;

//                             jwt.sign(payload, "process.env.TOKEN_SECRET", {
//                                 expiresIn: '1h'
//                             }, (err, token) => {
//                                 if (err) {
//                                     responderror422(res);
//                                 } else {
//                                     console.log(token)
//                                     res.json(token)
//                                 }
//                             });
//                             console.log(result)
//                         } else {
//                             responderror422(res)
//                         }
//                     });
//                 } else {
//                     responderror422(res)
//                 }
//             })
//     } else {
//         responderror422(res)
//     }
// });

AuthRouter.post("/signup", async (req, res) => {
    console.log(req.body.data);
    const result = Joi.validate(req.body.data, schema);
    if (result.error === null) {
        //console.log('username is unique');//username is unique
        UsersTable
            .findOne({
                where: { username: req.body.data.username }
            })
            .then(user => {
                console.log(user);
                if (user) {
                    //const error = new Error('That username is taken');
                    const error = 'That username is taken'
                    console.log(error)
                    res.status(422);
                    res.json({ error: error })
                }
                else {
                    //has the password
                    //insert the user with the hashed password
                    bcrypt.hash(req.body.data.password, 12).then(hashedPassword => {
                        const newUser = {
                            fn: req.body.data.fn,
                            ln: req.body.data.ln,
                            username: req.body.data.username,
                            password: hashedPassword
                        }
                        console.log(newUser);
                        //res.json({newUser})
                        UsersTable
                            .create(newUser)
                            .then(insertedUser => {
                                console.log(insertedUser);
                                res.json(insertedUser);
                            })
                    });
                }
                //res.json({user});
            })
            .catch(err => console.log(err));
    }
    else {
        console.log('end')
        console.log(result.error)
        res.json(result.error)
    }

    //res.json(result.error)
});

module.exports = AuthRouter;