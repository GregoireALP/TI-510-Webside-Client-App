const passport = require('passport');
const pool = require('./db.include')
    ;
module.exports = {
    initializeAuthentifications(app) {

        app.use(passport.initialize());
        app.use(passport.authenticate('session'));

        passport.serializeUser((user,  done) => {
            done(null, user);
        })

        passport.deserializeUser((user, done) => {
            done(null, user);
        })
    },

    authorizeRequest(requiredRole) {
        return function(req, res, next) {
            if(req.isAuthenticated() && req.user.role === requiredRole) {
                next();
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        }
    },

    async getValidCredentialsAndUserType(email, password, isAdvisor) {

        // TODO CRYPT PASSWORD
        let sql = "";

        if (isAdvisor) {
            sql = 'SELECT * FROM advisor WHERE advisor_email = ? AND advisor_password = ?';
        } else {
            sql = 'SELECT * FROM client WHERE client_email = ? AND client_password = ?';
        }

        let [rows, fields] = await pool.query(sql, [email, password]);
        if (rows.length === 1) {
            return true;
        } else {
            return false;
        }
    },

    async getUserId(email, isAdvisor) {

        let sql = "";
        if (isAdvisor) {
            console.log('Advisor');
            sql = 'SELECT advisor_id FROM advisor WHERE advisor_email = ?';
        } else {
            console.log('No Advisor');
            sql = 'SELECT client_id FROM client WHERE client_email = ?';
        }

        let [rows, fields] = await pool.query(sql, [email]);
        let role = isAdvisor ? 'advisor' : 'client';

        return {id: rows[0][role + '_id'], role: role };
    }
}
