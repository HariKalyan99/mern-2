const { currenicesWelcome, getCurrenicesById, getCurrenices, getCurrenicesServer, postCurrencies } = require('../controllers/currencies.controllers');

const currenicesRouter = require('express').Router();

currenicesRouter.get("/", currenicesWelcome);
currenicesRouter.get("/server", getCurrenicesServer);
currenicesRouter.get("/currencies", getCurrenices);
currenicesRouter.get("/currencies/new", postCurrencies);
currenicesRouter.get("/currencies/:id", getCurrenicesById);

module.exports = currenicesRouter;