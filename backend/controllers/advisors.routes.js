const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ADVISORS = require('../utils/advisors.repository');

ROUTER.get('/list', listAdvisorRoute);
ROUTER.get('/get/client/:client_id', getAdvisorByClientRoute);
ROUTER.get('/get/:advisor_id', getAdvisorRoute);

async function listAdvisorRoute(req, res) {
    let advisors = await ADVISORS.getAllAdvisorsController();
    res.status(200).json(advisors);
}

async function getAdvisorByClientRoute(req, res) {
    let client_id = req.params.client_id;
    let advisor = await ADVISORS.getAdvisorByClientController(client_id);
    res.status(200).json(advisor);
}

async function getAdvisorRoute(req, res) {
    let advisor_id = req.params.advisor_id;
    let advisor = await ADVISORS.getAdvisorController(advisor_id);
    res.status(200).json(advisor);
}


module.exports = ROUTER;