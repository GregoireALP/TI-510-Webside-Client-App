const express = require('express');
const router = express.Router();
const auth = require('../utils/auth.includes');
const passport = require('passport');

router.post('/login', loginRoute)

async function loginRoute(req, res) {
    passport.authenticate('local', { session: true });
    let isCredentialsValide = await auth.isCredentialsValide(req.body.username, req.body.password);

    if(isCredentialsValide) {
        let user = await auth.getUserObjectByClientEmail(req.body.username);
        req.login(user, function(err) {
            if(err) {
                console.log(err);
                res.json({message: 'Error when login'});
            }
        });

        res.json({message: 'Ok'});
    } else {
        res.json({message: 'Wrong credentials'});
    }
}

module.exports = router;