const pool = require('./db.include')

module.exports = {

    async isCredentialsValide(email, password, isAdvisor) {

        let query;

        if (isAdvisor) {
            // Advisor password is not hash in the db      
            query = `SELECT * FROM advisor WHERE advisor_email = ? AND advisor_password = ?`;
        } else {
            // Client password is hash in the db
            query = "SELECT * FROM client WHERE client_email = ? AND client_password COLLATE utf8mb4_general_ci  = sha2(concat(client_creation_date, ?), 224) COLLATE utf8mb4_general_ci ";
        }

        console.log(query)

        let values = [email, password];
        let [rows, field] = await pool.query(query, values);

        return rows.length > 0;
    },

    async getUserObjectByEmailAndRole(email, role) {
        let query = `SELECT * FROM ${role ? 'advisor' : 'client'} WHERE ${role ? 'advisor_email' : 'client_email'} = ?`;
        let values = [email];
        let [rows, field] = await pool.query(query, values);

        let user = {
            id: rows[0][role ? 'advisor_id' : 'client_id'],
            email: rows[0][role ? 'advisor_email' : 'client_email'],
            role: role ? 'advisor' : 'client'
        }

        return user;
    },

    verifyUserAuth(auth) {
        /**
         * {
         * role: '',
         * id: ''
         * }
         */
        return (req, res, next) => {
            next();
        }
    },

    sendSessionObjectToFrontend(req, res, next) {

        try {
            if (req.isAuthenticated()) {
                console.log('here');
                res.setHeader('Authorization', JSON.stringify(req.user));
            }

        } catch(err) {
            // Do nothing
        } finally {
            next();
        }
    }
}
