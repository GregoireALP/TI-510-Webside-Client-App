const express = require('express');
const router = express.Router();
const auth = require('../utils/auth.includes');

router.post('/login', login)

async function login(req, res) {

    // TODO validCredentials
    let isValidCred = await auth.getValidCredentialsAndUserType(req.body.email, req.body.password, req.body.isAdvisor);

    if(isValidCred) {
        let user = await auth.getUserId(req.body.email, req.body.isAdvisor);
        req.login(user, function(err) {
            if (err) { return next(err); }
        });

        res.status(200).json(user);
    } else {
        // TODO ERR NOT VALID
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

module.exports = router;