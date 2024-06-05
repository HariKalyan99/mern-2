const AuthUserServices = require("../services/authUser.services");
const Auth = new AuthUserServices();

const postUserSignup = async(request, response) => {
    const {body} = request;
    try{
        const result = await Auth.postSignUp({...body});
        return response.status(200).json(result);
    }catch(error){
        if(error.code === 11000){
            response.status(409).json({
                message: "Failed to create new user",
                reason: "Alrady Exists in DB"
            });
        }else{
            return response.status(422).json({message: error.message})
        }
    }
}

const postUserLogin = async(request, response) => {
    const {body} = request;
    try{
        const result = await Auth.postLogin({...body});
        return response.status(200).json(result);
    }catch(error){
        if(error.code === 11000){
            response.status(409).json({
                message: "Failed to create new user",
                reason: "Alrady Exists in DB"
            });
        }else{
            return response.status(422).json({message: error.message})
        }
    }
}

module.exports = {postUserSignup, postUserLogin};