const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, require: true },
    hash: String,
    has: String,
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function(password) {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'serect');
}

userSchema.methods.toAuthJSON = function() {
    return {
        _id: this._id,
        token: this. generateJWT(),
    };
};

const userSchema = mongoose.model("User", userSchema);

module.exports = userSchema;