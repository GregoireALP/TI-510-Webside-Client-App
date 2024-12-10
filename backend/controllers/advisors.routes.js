const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ADVISORS = require('../utils/advisors.repository');

ROUTER.get('/get/:advisor_id', getAdvisorRoute);
ROUTER.get('/get/client/:client_id', getAdvisorByClientRoute);
ROUTER.post('/generate/', generateAdvisorsRoute);

async function getAdvisorRoute(req, res) {
    let advisor_id = req.params.advisor_id;

    if(advisor_id === "all") {
        let advisors = await ADVISORS.getAllAdvisorsController();
        res.status(200).json(advisors);
    } else {
        let advisor = await ADVISORS.getAdvisorController(advisor_id);
        res.status(200).json(advisor);
    }
}

async function getAdvisorByClientRoute(req, res) {
    let client_id = req.params.client_id;
    let advisor = await ADVISORS.getAdvisorByClientController(client_id);
    res.status(200).json(advisor);
}

async function generateAdvisorsRoute(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let result = await ADVISORS.generateAdvisorController(email,password);
    res.status(200).json(result);
}

module.exports = ROUTER;