const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CLIENT = require('../utils/clients.repository');

ROUTER.get('/get/:client_id', getClientRoute);
ROUTER.get('/get/advisor/:advisor_id', getClientByAdvisorRoute);

async function getClientRoute(req, res) {
    let client_id = req.params.client_id;

    if(client_id === "all") {
        let accounts = await CLIENT.getAllClientsController();
        res.status(200).json(accounts);
        return;
    } else {
        let account = await CLIENT.getClientController(client_id);
        res.status(200).json(account);
    }
}

async function getClientByAdvisorRoute(req, res) {
    let client_id = req.params.advisor_id;
    let account = await CLIENT.getClientByAdvisorController(client_id);
    res.status(200).json(account);
}

module.exports = ROUTER;