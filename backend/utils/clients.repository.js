const { get } = require("../controllers/accounts.routes");

const pool = require(__dirname + "\\db.include.js");


module.exports = {

    getClientTemplate() {
        return {
            "client_id": 0,
            "client_gender": 0,
            "client_firstname": "",
            "client_lastname": "",
            "client_email": "",
            "client_phone": "",
            "client_address": "",
            "client_password": "",
            "client_birthday": "",
            "client_advisor_id": 0
        }
    },

    async getAllClientsController() {

        try {

            let sql = "SELECT * FROM client";
            const [rows, fields] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getClientByIdController(id) {

        try {

            let sql = "SELECT * FROM client WHERE client_id = ?";
            const [rows, fields] = await pool.query(sql, [id]);
            return rows[0];
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getTotalBalanceFromClientController(id) {

        try {

            let sql = "SELECT SUM(account_balance) AS total_balance FROM account WHERE account_client_id = ?";
            const [rows, fields] = await pool.query(sql, [id]);
            return rows[0];
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }

}