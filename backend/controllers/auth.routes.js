const express = require('express');
const router = express.Router();
const auth = require('../utils/auth.includes');
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        req.login(user, (err) => {
            if (err) return next(err);

            console.log('User logged in:', user);
            return res.json({ message: 'Ok', user });
        });
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    req.logout();
    res.json({ message: 'Ok' });
});

module.exports = router;