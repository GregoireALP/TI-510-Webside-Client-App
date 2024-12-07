const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ACCOUNTS = require('../utils/accounts.repository');

ROUTER.get('/get/:account_id', getAccountRoute);
ROUTER.get('/get/client/:client_id', getAccountsByClientIdRoute);

ROUTER.post('/open/:client_id', openAccountRoute);
ROUTER.post('/delete/:account_id', deleteAccountRoute);

async function deleteAccountRoute(req, res) {
    let account_id = req.params.account_id;
    let account = await ACCOUNTS.deleteAccountController(account_id);
    res.status(200).json(account)
}

async function getAccountRoute(req, res) {
    let account_id = req.params.account_id;

    if(account_id === "all") {
        let accounts = await ACCOUNTS.getAllAccountsController();
        res.status(200).json(accounts);
    } else {
        let account = await ACCOUNTS.getAccountController(account_id);
        res.status(200).json(account);
    }
}

async function getAccountsByClientIdRoute(req, res) {
    let client_id = req.params.client_id;
    let accounts = await ACCOUNTS.getAccountsByClientId(client_id);
    res.status(200).json(accounts);
}

async function openAccountRoute(req, res) {
    let client_id = req.params.client_id;
    console.log(client_id);
    let account = await ACCOUNTS.openAccountController(client_id);
    res.status(200).json(account);
}

module.exports = ROUTER;