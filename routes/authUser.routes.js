const { postUserSignup } = require('../controllers/authUser.controllers');
const authUserRoutes = require('express').Router();

authUserRoutes.post("/signup", postUserSignup);


module.exports = authUserRoutes;