const ValidateSearchQuery = require("../validators/users.validators");

const searchQuery = (request, response, next) => {
    const {gender, age} = request.query;

    const error = ValidateSearchQuery(gender, age);

    if(error){
        return response.status(422).json({message: error.message});
    }

    next();
}

module.exports = searchQuery;