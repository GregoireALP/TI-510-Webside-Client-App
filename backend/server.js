const EXPRESS = require('express');
const APP = EXPRESS();

const DOTENV = require('dotenv');
DOTENV.config();

APP.set("view engine", "ejs");
APP.set("views", "views");

const BODYPARSER = require("body-parser");
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }))

const SESSION = require("express-session");
APP.use(SESSION({
    secret: process.env.WEB_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: 36000000, httpOnly: false, secure: false },
    resave: false
}))

const CORS = require('cors');
APP.use(CORS({ origin: 'http://localhost:8080', credentials: true }));

/**********************************************************************************************************/
/*                                      AUTHENTICATION                                                    */
/**********************************************************************************************************/

const authIncludes = require('./utils/auth.includes');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
APP.use(passport.initialize());
APP.use(passport.session());

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: true
}, async (req, email, password, done) => {

    let isCredentialsValide = await authIncludes.isCredentialsValide(email, password, req.body.isAdvisor);

    if (isCredentialsValide) {
        let user = await authIncludes.getUserObjectByEmailAndRole(email, req.body.isAdvisor);
        return done(null, user);
    } else {
        return done(null, false, { message: 'Incorrect email or password' });
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);

});

passport.deserializeUser(async (user, done) => {
    try {
        done(null, JSON.parse(JSON.stringify(user)));
    } catch (error) {
        done(error, null);
    }
});


// *** ROUTES/CONTROLLERS ***
APP.use('/static', EXPRESS.static(__dirname + '/static'));
APP.use('/api/advisors', require('./controllers/advisors.routes'));
APP.use('/api/loans', require('./controllers/loans.routes'));
APP.use('/api/clients', require('./controllers/clients.routes'));
APP.use('/api/payements', require('./controllers/payements.routes'));
APP.use('/api/accounts', require('./controllers/accounts.routes'));

APP.use('/unauthorized', (req, res) => {
    res.render('unauthorized');
});
APP.use(require('./controllers/auth.routes'));


APP.listen(process.env.WEB_PORT, () => {
    console.log(`Server is running on port ${process.env.WEB_PORT}`);
});