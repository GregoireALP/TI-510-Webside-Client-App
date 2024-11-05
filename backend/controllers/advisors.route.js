const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ADVISORS = require('../utils/advisors.repository');

ROUTER.get('/list',getAllAdvisors )


async function getAllAdvisors(req, res) {
    let advisors = await ADVISORS.getAllAdvisors();
    res.json(advisors);
}

module.exports = ROUTER;