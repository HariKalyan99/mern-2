const AuthUserModel = require("../models/authUser.model");
const bcrypt = require('bcrypt');

class AuthUserServices {
    encryptPassword = async(passowrd) => {
        const salt = await bcrypt.genSalt(passowrd);
        const hashedPassword = await bcrypt.hash(passowrd, salt);
        return hashedPassword;
    }


    postSignUp = async(user) => {
        try{
            const auths = new AuthUserModel({...user});
            const result = await auths.save();
            return result;
        }catch(error){
            throw error;
        }
    }

    verifyPassword = async() => {
        
    }

    postLogin = async(user) => {
        // try{
        //     const authLogin = 
        // }catch(error){
        //     throw error
        // }
    }
}

module.exports = AuthUserServices;