const EXPRESS = require('express');
const APP = EXPRESS();

const DOTENV = require('dotenv');
DOTENV.config();

APP.set("view engine", "ejs");
APP.set("views", "views");

const BODYPARSER = require("body-parser");
APP.use(BODYPARSER.json(), BODYPARSER.urlencoded({ extended: true }));

const SESSION = require("express-session");
APP.use(SESSION({
    secret: process.env.WEB_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: 3600000, httpOnly: false, secure: false },
    resave: false
}))

const CORS = require('cors');
APP.use(CORS({ origin: 'http://localhost:8080', credentials: true, methods: ['GET', 'POST']} ));

const auth = require('./utils/auth.includes');
auth.initializeAuthentifications(APP);

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