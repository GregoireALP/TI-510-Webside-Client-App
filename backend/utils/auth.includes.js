const passport = require('passport');
const pool = require('./db.include')


module.exports = {

    async isCredentialsValide(email, password) {
        console.log('isCredentialsValide:', email, password);
        
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
    },

    async getUserObjectByClientId(client_id) {
        let query = `SELECT * FROM client WHERE client_id = ?`;
        let values = [client_id];
        let [rows, field] = await pool.query(query, values);

        let client = {
            id: rows[0].client_id,
            email: rows[0].client_email,
            role: 'client'
        }

        return client;
    },

    verifyUserAuth(req, res, next) {
        if (req.isAuthenticated()) {
            console.log('User is authenticated');
            return next();
        } else {
            console.log('User is not authenticated');
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}
