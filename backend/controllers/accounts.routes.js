const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ACCOUNTS = require('../utils/accounts.repository');

ROUTER.get('/list', listAccountRoute);
ROUTER.get('/get/:id', getAccountRoute);
ROUTER.get('/get/client/:id', getAccountsByClientIdRoute);

async function listAccountRoute(req, res) {
    let accounts = await ACCOUNTS.getAllAccountsController();
    res.status(200).json(accounts);
}

async function getAccountRoute(req, res) {
    let id = req.params.id;
    let account = await ACCOUNTS.getAccountController(id);
    res.status(200).json(account);
}

async function getAccountsByClientIdRoute(req, res) {
    let client_id = req.params.id;
    let accounts = await ACCOUNTS.getAccountsByClientId(client_id);
    res.status(200).json(accounts);
}

module.exports = ROUTER;