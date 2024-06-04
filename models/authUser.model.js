const mongoose = require('mongoose');

const authUserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    fullName: {type: String, required: true},
    password: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true}
}, {timestamps: true})

const AuthUserModel = new mongoose.model('Authentication', authUserSchema, 'auth');

module.exports = AuthUserModel;
