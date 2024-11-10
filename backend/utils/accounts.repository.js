const pool = require(__dirname + "//db.include.js");


module.exports = {

    getAccountTemplate() {
        return {
            "account_id": 0,
            "account_label": "",
            "account_iban": "",
            "account_balance": 0,
            "account_interest": 0,
            "account_creation_date": "",
            "account_max_amount": 0,
            "account_client_id": 0
        }
    },

    async getAllAccountsController() {

        try {

            let sql = "SELECT * FROM account";
            const [rows, fields] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getAccountController(id) {

        try {

            let sql = "SELECT * FROM account WHERE account_id = ?";
            const [rows, fields] = await pool.query(sql, [id]);
            return rows[0];
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getAccountsByClientId(client_id) {

        try {

            let sql = "SELECT * FROM account WHERE account_client_id = ?";
            const [rows, fields] = await pool.query(sql, [client_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}