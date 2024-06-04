const serverInfo = {
    server: "Welome to node-http server",
    date: new Date().toDateString(),
    time: new Date().toTimeString()
}

const currencyInfo = require('../currencies.json')


const currenicesWelcome = (request, response) => {
    response.status(200).json("<h1>Welcome to the node-express server</h1>")
}

const getCurrenices = (request, response) => {
    response.status(200).json(currencyInfo.data)
};

const getCurrenicesServer = (request, response) => {
    response.status(200).json({...serverInfo, server: "Welcome to the node-express server"})
};

const postCurrencies = (request, response) => {
    currencyInfo.data = [request.body, ...currencyInfo.data];
    response.status(200).json(currencyInfo.data);
}



const getCurrenicesById = (request, response) => {
    response.status(200).json(currencyInfo.data.find(x => x.id?.toLowerCase() === request.params.id?.toLowerCase()));
};


module.exports = {currenicesWelcome, getCurrenices, getCurrenicesServer, getCurrenicesById, postCurrencies};