const express = require('express');
const router = express.Router();
const auth = require('../utils/auth.includes');
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });
        req.logIn(user, (err) => {
            if (err) return next(err);
            res.json({ message: 'Ok', id: user.id, role: user.role });
        });
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    req.logout();
    res.json({ message: 'Ok' });
});

router.get('/is-auth', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuth: true, id: req.user.id, role: req.user.role });
    } else {
        res.json({ res: false });
    }
});

module.exports = router;