const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ADVISORS = require('../utils/advisors.repository');

ROUTER.get('/list', listAdvisorRoute);

async function listAdvisorRoute(req, res) {
    let advisors = await ADVISORS.getAllAdvisorsController();
    res.status(200).json(advisors);
}

module.exports = ROUTER;