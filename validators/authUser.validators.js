const Joi = require('joi');

const validatePostSignup = Joi.object().keys({
    username: Joi.string().lowercase().max(30),
    fullName: Joi.string().required(),
    password: Joi.string().required().max(30),
    email: Joi.string().email({tlds: {allow: false}})
})

const validatePostLogin = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
})


module.exports = {validatePostLogin, validatePostSignup}