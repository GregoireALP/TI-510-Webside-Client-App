const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CLIENT = require('../utils/clients.repository');

ROUTER.get('/get/:client_id', getClientRoute);
ROUTER.get('/get/advisor/:advisor_id', getClientByAdvisorRoute);

ROUTER.post('/create/', createClientRoute);

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

async function createClientRoute(req, res) {
    let firstname = req.body.client_firstname;
    let lastname = req.body.client_lastname;
    let advisor = req.body.advisor_id;
    let email = req.body.client_email;
    let phone = req.body.client_phone;
    let address = req.body.client_address;
    let password = req.body.client_password;

    let result = await CLIENT.createClientController(firstname, lastname, advisor, email, phone, address, password);
    res.status(200).json(result);
}


module.exports = ROUTER;