const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CLIENT = require('../utils/clients.repository');

ROUTER.get('/list', listClientRoute);
ROUTER.get('/get/:id', getClientRoute);
ROUTER.get('/balance/:id', getTotalBalanceFromClient);

async function listClientRoute(req, res) {
    let accounts = await CLIENT.getAllClientsController();
    res.status(200).json(accounts);
}

async function getClientRoute(req, res) {
    let id = req.params.id;

    if(id === "all") {
        let accounts = await CLIENT.getAllClientsController();
        res.status(200).json(accounts);
        return;
    } else {
        let account = await CLIENT.getClientByIdController(id);
        res.status(200).json(account);
    }
}

async function getTotalBalanceFromClient(req, res) {
    let id = req.params.id;
    let balance = await CLIENT.getTotalBalanceFromClientController(id);
    res.status(200).json(balance);
}

module.exports = ROUTER;