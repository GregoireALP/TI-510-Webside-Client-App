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
    cookie: { maxAge: 360000, httpOnly: false, secure: false },
    resave: false
}))

const CORS = require('cors');
APP.use(CORS({ origin: 'http://localhost:8080', credentials: true }));

const authIncludes = require('./utils/auth.includes');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
APP.use(passport.initialize());
APP.use(passport.session());
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true
}, async (email, password, done) => {
    let isCredentialsValide = await authIncludes.isCredentialsValide(email, password);
    console.log('isCredentialsValide:', isCredentialsValide);
    
    if (isCredentialsValide) {
        let user = await authIncludes.getUserObjectByClientEmail(email);
        console.log('User returned:', user);
        return done(null, user.id);
    } else {
        return done(null, false, { message: 'Incorrect email or password' });
    }
}));

passport.serializeUser((user, done) => {
    console.log('Serialize User:', user);
    done(null, user);

});

passport.deserializeUser((user, done) => {
    try {
        const client = authIncludes.getUserObjectByClientId(user);
        console.log('Deserialize User:', client);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

APP.use((req, res, next) => {
    console.log(('---------------------------------'));
    console.log('Session ID:', req.sessionID); // Vérifie si la session existe
    console.log('Session Content:', req.session); // Affiche les données dans la session
    console.log('Authenticated User:', req.user); // Vérifie si un utilisateur est attaché
    next();
});

// *** ROUTES/CONTROLLERS ***
APP.use('/static', EXPRESS.static(__dirname + '/static'));
APP.use('/api/advisors', require('./controllers/advisors.routes'));
APP.use('/api/loans', require('./controllers/loans.routes'));
APP.use('/api/clients', require('./controllers/clients.routes'));
APP.use('/api/payements', require('./controllers/payements.routes'));
APP.use('/api/accounts', require('./controllers/accounts.routes'));
APP.use('/api/auth', require('./controllers/auth.routes'));


APP.listen(process.env.WEB_PORT, () => {
    console.log(`Server is running on port ${process.env.WEB_PORT}`);
});