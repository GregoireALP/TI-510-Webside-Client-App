const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ACCOUNTS = require('../utils/accounts.repository');

ROUTER.get('/get/:account_id', getAccountRoute);
ROUTER.get('/get/client/:client_id', getAccountsByClientIdRoute);

ROUTER.post('/open/:client_id', openAccountRoute);

ROUTER.delete('/delete/:account_id', deleteAccountRoute);

async function deleteAccountRoute(req, res) {
    let account_id = req.params.account_id;
    console.log(account_id);
    try {
        const result = await ACCOUNTS.deleteAccount(account_id); 

        if (rows.affectedRows > 0) {
            res.status(200).json({ message: 'Account deleted successfully' });
        } else {
            res.status(404).json({ message: 'No account found with this ID' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting account' });
    }
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
    let account = await ACCOUNTS.openAccountController(client_id);
    res.status(200).json(account);
}

module.exports = ROUTER;