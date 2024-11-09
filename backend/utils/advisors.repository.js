const pool = require(__dirname + "\\db.include.js");


module.exports = {

    getAdvisorTemplate() {
        return {
            "advisor_id": 0,
            "advior_gender": 0,
            "advisor_firstname": "",
            "advisor_lastname": "",
            "advisor_email": "",
            "advisor_phone": "",
            "advisor_address": "",
            "advisor_birthday": "",
        }
    },

    async getAllAdvisorsController() {

        try {

            let sql = "SELECT * FROM advisor";
            const [rows, fields] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getAdvisorByClientController(client_id) {
        try {
            let sql = "SELECT * FROM advisor WHERE advisor_id = ?";
            const [rows, fields] = await pool.query(sql, [client_id]);
            return rows[0];
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getAdvisorController(advisor_id) {
        try {
            let sql = "SELECT * FROM advisor WHERE advisor_id = ?";
            const [rows, fields] = await pool.query(sql, [advisor_id]);
            return rows[0];
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}