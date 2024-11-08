const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LOAN = require('../utils/loans.repository');

ROUTER.get('/list', listLoanRoute);

async function listLoanRoute(req, res) {
    let loans = await LOAN.getAllLoansController();
    res.status(200).json(loans);
}

module.exports = ROUTER;