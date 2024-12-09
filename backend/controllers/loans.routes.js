const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LOAN = require('../utils/loans.repository');

ROUTER.get('/get/:loan_id', getLoanRoute);
ROUTER.get('/get/client/:client_id', getLoanByClientRoute);
ROUTER.get('/get/advisor/:advisor_id', getLoanByAdvisorRoute);

ROUTER.post('/initiate/', initiateLoanRoute);
ROUTER.post('/approve/:loan_id', approveLoanRoute);
ROUTER.post('/reject/:loan_id', rejectLoanRoute);
ROUTER.post('/finish/:loan_id', finishLoanRoute);
ROUTER.post('/refund/', refundLoanRoute);

async function getLoanRoute(req, res) {
    let loan_id = req.params.loan_id;

    if(loan_id === "all") {
        let loans = await LOAN.getAllLoansController();
        res.status(200).json(loans);
    } else {
        let loan = await LOAN.getLoanController(loan_id);
        res.status(200).json(loan);
    }
}

async function getLoanByClientRoute(req, res) {
    let client_id = req.params.client_id;
    let loan = await LOAN.getLoanByClientController(client_id);
    res.status(200).json(loan);
}

async function getLoanByAdvisorRoute(req, res) {
    let advisor_id = req.params.advisor_id;
    let loan = await LOAN.getLoanByAdvisorController(advisor_id);
    res.status(200).json(loan);
}

async function initiateLoanRoute(req, res) {
    let amount = req.body.amount;
    let label = req.body.label;
    let client = req.body.client_id;
    let interest = req.body.interest;
    let type = req.body.type;

    let result = await LOAN.initiateLoanController(amount, label, client, interest, type);
    res.status(200).json(result);
}

async function approveLoanRoute(req, res) {
    let loan_id = req.params.loan_id;

    let result = await LOAN.approveLoanController(loan_id);
    res.status(200).json(result);
}

async function rejectLoanRoute(req, res) {
    let loan_id = req.params.loan_id;

    let result = await LOAN.rejectLoanController(loan_id);
    res.status(200).json(result);
}

async function finishLoanRoute(req, res) {
    let loan_id = req.params.loan_id;

    let result = await LOAN.finishLoanController(loan_id);
    res.status(200).json(result);
}

async function refundLoanRoute(req, res) {
    let loan_id = req.body.loan_id;
    let amount = req.body.amount;

    let result = await LOAN.refundLoanController(loan_id, amount);
    res.status(200).json(result);
}

module.exports = ROUTER;