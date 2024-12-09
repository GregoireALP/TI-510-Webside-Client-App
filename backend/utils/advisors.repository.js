const pool = require(__dirname + "//db.include.js");


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
            let sql = "SELECT * FROM advisor WHERE advisor_id = (SELECT client_advisor_id FROM client WHERE client_id = ?)";
            const [rows, fields] = await pool.query(sql, [client_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getAdvisorController(advisor_id) {
        try {
            let sql = "SELECT * FROM advisor WHERE advisor_id = ?";
            const [rows, fields] = await pool.query(sql, [advisor_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async generateAdvisorController(email,password) {

        try {

            let sql = "INSERT INTO advisor (advisor_firstname, advisor_gender, advisor_lastname, advisor_email, advisor_phone, advisor_address, advisor_birthday, advisor_password) VALUES (?, ?, ?, ?, ?, ?, now(), sha2(concat(now(), ?), 224))";
            const [rows, fields] = await pool.query(sql, ['Advisor', 1, 'Bank', email, '0000000000', '1 Bank Street', password]);
            return 'Ok';
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}