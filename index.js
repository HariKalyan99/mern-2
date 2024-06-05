const mongoose = require('mongoose');
const DB_URI = "mongodb://localhost:27017/blogs"
const express = require('express');
const http  = require('http');
const port1 = 8081;
const currencyInfo = require('./currencies.json');
const usersInfo = require('./users.json');
const currenicesRouter = require('./routes/currenices.routes');
const usersRouter = require('./routes/users.routes');
const serverInfo = {
    server: "Welome to node-http server",
    date: new Date().toDateString(),
    time: new Date().toTimeString()
}


const server = http.createServer((request, response) => {
    if(request.method === "GET"){
        const id  = request.url.split("/")[2];
        const matchId = currencyInfo.data.find(x => x.id?.toLowerCase() === id?.toLowerCase());
        if(request.url === "/"){
            response.write("<h1>This is a node-htto server</h1>");
            response.end();
        }else if(request.url === "/server"){
            response.writeHead(200, {'Content-Type' :'application/json'})
            response.write(JSON.stringify(serverInfo))
            response.end();
        }else if(request.url === "/currencies"){
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(currencyInfo.data));
            response.end();
        }else if(matchId){
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(matchId));
            response.end();
        }
    }else if(request.method === "POST"){
        let body = "";
        request.on("error", (error) => {
            console.log("Error", error)
        }).on('data', (chunk) => {
            body+=chunk;
        }).on("end", () => {
            body = JSON.parse(body);
            currencyInfo.data = [body, ...currencyInfo.data];
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(currencyInfo.data));
            response.end();
        })
    }
})





const port2 = 8082;
const userExpress = express();
userExpress.use(express.json());
userExpress.use("/", usersRouter);



const port3 = 8083;
const currencyExpress = express();
currencyExpress.use(express.json());
currencyExpress.use("/", currenicesRouter);


const blogsRouter = require('./routes/blogs.routes');
const authUserRoutes = require('./routes/authUser.routes');
const port4 = 8084;
const app = express();

app.use(express.json());
app.use("/", blogsRouter);
app.use("/auth", authUserRoutes);


mongoose.connect(DB_URI).then(() => {
    console.log('Successfully connected to the mongoDb');
    server.listen(port1, () => {
        console.log(`Litening to the port: ${port1}`)
    })
    userExpress.listen(port2, () => {
        console.log(`Listening on the port built for the user, port: ${port2}`)
    })
    currencyExpress.listen(port3, () => {
        console.log(`Listening on the port: ${port3}`)
    })
    app.listen(port4, () => {
        console.log(`Listening on port: ${port4}`)
    })
}).catch(error => {
    console.log('Connection unsuccesfull to the mongoDb')
})


