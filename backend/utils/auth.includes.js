const passport = require('passport');
const pool = require('./db.include')


module.exports = {
  
  processPassport(app) {
        app.use(passport.initialize());
        app.use(passport.authenticate('session'));
        app.use(passport.session());

        passport.serializeUser((user, done) => {
            console.log('Serialize User:', user);
            done(null, user);

        });

        passport.deserializeUser((user, done) => {
            console.log('Deserialize User:', user);
            done(null, user);
        });
    },

    authorizeRequest(req, res, next) {
        try {
            console.log(req.isAuthenticated());
        } catch(err) {
            console.log("No Request Can Be Get")
        }
    },

    async isCredentialsValide(email, password) {
        let sql = `SELECT * FROM client WHERE client_email = ? AND client_password = ?`;
        let [rows, field] = await pool.query(sql, [email, password]);

        if (rows.length > 0) {
            return true;
        } else {
            return false;
        }
    },

    async getUserObjectByClientEmail(email) {
        let query = `SELECT * FROM client WHERE client_email = ?`;
        let values = [email];
        let [rows, field] = await pool.query(query, values);
        
        let client = {
            id: rows[0].client_id,
            email: rows[0].client_email,
            role: 'client'
        }

        return client;
    }
}
