const mongoose = require('mongooese');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./auth');
const Users = mongooese.model('User');

//Post new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    if(!user.email) {
        return res.status(422).json({
            err: {
                email: 'is required',
            }
        })
    }

    if(!user.password) {
        return: res.status(422).json({
            err: {
                password: 'is required',
            },
        });
    }

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(()  => res.json({ user: finalUser.toAuthJSON()}));
})

//Post login route
router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    if()
})

//https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e