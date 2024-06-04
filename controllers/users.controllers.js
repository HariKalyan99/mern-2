const serverInfo = {
    server: "Welome to node-http server",
    date: new Date().toDateString(),
    time: new Date().toTimeString()
}
const usersInfo = require('../users.json');




const userWelcome =  (request, response) => {
    response.send("<h1>Welcome to the node-express server</h1>");
}

const getUsers = (request, response) => {
    response.status(200).json(usersInfo.data)
};

const getUserServer = (request, response) => {
    response.status(200).json({...serverInfo, server: "This is a node-express server"});
};

const getUsersByGenderOrAge = (request, response) => {
    const {gender, age} = request.query;

    if(gender && age) {
        return response.status(200).json(usersInfo.data.filter(x => x.gender?.toLowerCase() === gender && x.dob.age === Number(age)));
    }

    if(gender){
        return response.status(200).json(usersInfo.data.filter(x => x.gender?.toLowerCase() === gender));
    }

    if(age){
        return response.status(200).json(usersInfo.data.filter(x => x.dob.age === Number(age)));
    }
}

const getUsersById = (request, response) => {
    const {uuid} = request.params;
    response.status(200).json(usersInfo.data.find(x => x.login.uuid === uuid));
};


module.exports = {userWelcome, getUserServer, getUsers, getUsersById, getUsersByGenderOrAge};