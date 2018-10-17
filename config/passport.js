const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongooese.Model('Users');

passport.use(new LocalStrategy({
    userNameField: 'user[email]',
    passwordField: 'user[password]',
}, (email, password, done) => {
    Users.findOne({ email })
        .then((user) => {
            if(!user || !user.validatePassword(password) {
                return done(null, false, { err: {'email or password': 'is invalid' }});
            }

            return done(null, user);
        })
        .catch(done);
}));    






// const db = require("../models");

// //Defining methods for groupsController

// module.exports = {
//     findById: function(req, res) {
//        db.User
//             .findById(req.params.id)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => status(422).json(err));

//     },
//     create: function(req, res) {
//         console.log("in the create");
//        db.User
//                 .create(req.body)
//                 .then(dbModel => res.json(dbModel))
//                 .catch(err => res.status(422).json(err));

//     },
//     update: function(req, res) {
//        db.User
//             .findOneAndUpdate({ _id: req.params.id }, req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));

//     },
//     remove: function(req, res) {
//        db.User
//             .findById({ _id: req.params.id })
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err))
//     }

// };