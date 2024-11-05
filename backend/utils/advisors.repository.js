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

    async getAllAdvisors() {

        try {

            let sql = "SELECT * FROM advisor";
            const [rows, fields] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}