const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LOAN = require('../utils/loans.repository');

ROUTER.get('/list', listLoanRoute);
ROUTER.get('/get/:loan_id', getLoanRoute);
ROUTER.get('/get/client/:client_id', getLoanByClientRoute);

async function listLoanRoute(req, res) {
    let loans = await LOAN.getAllLoansController();
    res.status(200).json(loans);
}

async function getLoanRoute(req, res) {
    let loan_id = req.params.loan_id;
    let loan = await LOAN.getLoanController(loan_id);
    res.status(200).json(loan);
}

async function getLoanByClientRoute(req, res) {
    let client_id = req.params.client_id;
    let loan = await LOAN.getLoanByClientController(client_id);
    res.status(200).json(loan);
}

module.exports = ROUTER;