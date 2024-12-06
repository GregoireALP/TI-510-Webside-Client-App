const passport = require('passport');
const pool = require('./db.include')
    ;
module.exports = {
    initializeAuthentifications(app) {

        app.use(passport.initialize());
        app.use(passport.authenticate('session'));

        console.log('Authentification initialized');
        

        passport.serializeUser((user,  done) => {
            process.nextTick(function() {
                return done(null, user);
            })
        })

        passport.deserializeUser(async (user, done) => {
            console.log('deserializeUser', user);

            process.nextTick(async function() {
                return done(null, user);
            })
        })
    },

    /**
     * function {
     * recupere l'url fetcher (advisor-dashboard/3)
     * regarder si le user est connecté, est bien un advisor et bien le advisor 3
     * 
     * si oui, next() renvoyer
     * sinon renvoyer vers la page de login
     * }
     */
    authorizeRequest() {
        return function(req, res, next) {
            // Check if user is authenticated
            if(req.isAuthenticated()) {
                console.log('User is authenticated');
                let role = req.user.role;
                let id = req.user.id;
                let path = req.originalUrl;
                next();
            } else {
                console.log('User is not authenticated');
                next()
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
            sql = 'SELECT advisor_id FROM advisor WHERE advisor_email = ?';
        } else {
            sql = 'SELECT client_id FROM client WHERE client_email = ?';
        }

        let [rows, fields] = await pool.query(sql, [email]);
        let role = isAdvisor ? 'advisor' : 'client';

        return {id: rows[0][role + '_id'], role: role };
    }
}
