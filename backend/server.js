const EXPRESS = require('express');
const APP = EXPRESS();

const DOTENV = require('dotenv');
DOTENV.config();

APP.set("view engine", "ejs");
APP.set("views", "views");

const BODYPARSER = require("body-parser");
APP.use(BODYPARSER.json(), BODYPARSER.urlencoded({ extended: true }));

const SESSION = require("express-session");
// TODO : configure session

const CORS = require('cors');
APP.use(CORS());

// *** ROUTES/CONTROLLERS ***
APP.use('/static', EXPRESS.static(__dirname + '/static'));
APP.use('/api/advisors', require('./controllers/advisors.routes'));
APP.use('/api/loans', require('./controllers/loans.routes'));
APP.use('/api/clients', require('./controllers/clients.routes'));
APP.use('/api/payements', require('./controllers/payements.routes'));
APP.use('/api/accounts', require('./controllers/accounts.routes'));

APP.listen(process.env.WEB_PORT, () => {
    console.log(`Server is running on port ${process.env.WEB_PORT}`);
});