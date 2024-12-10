const pool = require('./db.include')

module.exports = {

    async isCredentialsValide(email, password, isAdvisor) {

        let query = `SELECT * FROM ${isAdvisor ? 'advisor' : 'client'} WHERE ${isAdvisor ? 'advisor_email' : 'client_email'} = ? AND ${isAdvisor ? 'advisor_password' : 'client_password'} = sha2(concat(${isAdvisor ? 'advisor_birthday' : 'client_creation_date'}, ?), 224)`;

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
