const AuthUserModel = require("../models/authUser.model");
const UserAuthService = require("./user.services");
const UserAuth = new UserAuthService();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthUserServices {
    encryptPassword = async(passowrd) => {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(passowrd, salt);
        return hashedPassword;
    }


    postSignUp = async(user) => {
        try{
            const hashedPassword = await this.encryptPassword(user.password);
            const auths = new AuthUserModel({...user, password: hashedPassword});
            const result = await auths.save();
            return result;
        }catch(error){
            throw error;
        }
    }

    verifyPassword = async(username, password) => {
        try{
            const user = await UserAuth.findByUserName(username);
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid){
                return user;
            }else{
                return null;
            }
        }catch(error){
            throw error;
        }
    }

    generateToken = (username) => {
        try{
            const payload = {
                username
            }

            const option = {
                expiresIn: "1hr"
            }

            const token = jwt.sign(payload, "A_SECRET_KEY", option)
            return token;
        }catch(error){
            throw error;
        }
    }

    postLogin = async(user) => {
        try{
            const response = await this.verifyPassword(user.username, user.password);
            console.log(response)
            if(response){
                const token = await this.generateToken(response.username);
                return {
                    isLoggedIn: true,
                    token
                }
            }else{
                return {
                    isLoggedIn: false
                }
            }
        }catch(error){
            throw error
        }
    }
}

module.exports = AuthUserServices;