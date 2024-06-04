const Joi = require('joi');

const postBlogsCheck = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string(),
    tags: Joi.array(),
    reactions: Joi.number(),
    userId: Joi.number()
})

const validatePostBlog = (body) => {
    const {error} = postBlogsCheck.validate({
        ...body
    })

    if(error){
        return error;
    }
}

module.exports = validatePostBlog;