
const postSignupValidate = (schema) = (request, response, next) => {
    const {error} = schema.validate({...request.body});


    if(error){
        return response.status(422).json({message: error})
    }

    next();
    
}

const postLoginValidate = (schema) = (request, response, next) => {
    const {error} = schema.validate({...request.body});


    if(error){
        return response.status(422).json({message: error})
    }

    next();
}

module.exports = {postLoginValidate, postSignupValidate}