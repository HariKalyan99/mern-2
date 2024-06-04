const validatePostBlog = require("../validators/blogs.validators");



const postBlogMiddleWare = (request, response, next) => {
    const {body} = request;

    const error = validatePostBlog({...body});

    if(error){
       return response.status(422).json({message: error.message});

    }

    next();
    
}


module.exports = postBlogMiddleWare;