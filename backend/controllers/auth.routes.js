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
            res.json({ message: 'Ok' });
        });
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).json({ error: 'Logout failed' });
        }
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).json({ error: 'Session destruction failed' });
            }
            res.json({ message: 'Ok' });
        });
    });
});

module.exports = router;