const pool = require('./db.include')
const bcrypt = require('bcrypt');
module.exports = {

    async isCredentialsValide(email, password, isAdvisor) {

        let query = `SELECT * FROM ${isAdvisor ? 'advisor' : 'client'} WHERE ${isAdvisor ? 'advisor_email' : 'client_email'} = ?;`;

        let values = [email];
        let [rows, field] = await pool.query(query, values);

        // check with bcrypt if the password is correct
        if (rows.length > 0) {
            return bcrypt.compareSync(password, rows[0][isAdvisor ? 'advisor_password' : 'client_password']);
        }
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

    protectedRouteMiddleware(req, res, next) {
        try {
            if(req.isAuthenticated()) {
                if(req.user.role === 'advisor') {
                    next();
                } else {
                    res.json({message: "Unauthorized"});
                }
            }
        } catch (error) {
            res.json({message: "Unauthorized"});
        }
    }
}
