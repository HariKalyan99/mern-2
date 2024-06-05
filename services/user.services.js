const AuthUserModel = require("../models/authUser.model");



class UserAuthService {
    findByUserName = async(username) => {
        try{
            const result = await AuthUserModel.findOne({username});
            return result;
        }catch(error){
            throw error;
        }
    }
}


module.exports = UserAuthService;