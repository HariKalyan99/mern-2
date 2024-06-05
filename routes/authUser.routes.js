const authUserRoutes = require('express').Router();
const { postUserSignup, postUserLogin } = require('../controllers/authUser.controllers');
const { validatePostLogin, validatePostSignup } = require('../validators/authUser.validators');
const { postLoginValidate, postSignupValidate } = require('../middlewares/authuser.middlewares');

const validationSignupUser = postSignupValidate(validatePostSignup);
const validationLoginUser = postLoginValidate(validatePostLogin);
authUserRoutes.post("/signup",validationSignupUser, postUserSignup);
authUserRoutes.post("/login", validationLoginUser,postUserLogin);

module.exports = authUserRoutes;