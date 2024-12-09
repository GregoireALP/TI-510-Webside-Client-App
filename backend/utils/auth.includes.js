const passport = require('passport');
const pool = require('./db.include')


module.exports = {

    async isCredentialsValide(email, password, isAdvisor) {   

        let query;

        if(isAdvisor) {        
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

    verifyUserAuth(req, res, next) {
        if (req.isAuthenticated()) {
            let role = req.user.role;
            let url = req.originalUrl;

            console.log(role, url);
            
            if(url.includes('advisor-dashboard') && role !== 'advisor') {
                console.log("User is not an advisor");
                res.redirect('/unauthorized')
            }
            
            next()
        } else {
            console.log("User is not authenticated");
            res.redirect('/unauthorized')
        }
    }
}
