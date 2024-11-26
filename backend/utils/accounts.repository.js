const pool = require(__dirname + "//db.include.js");


module.exports = {

    getAccountTemplate() {
        return {
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
            return rows;
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
    },

    async openAccountController(client_id) {

        try {

            let account = this.getAccountTemplate();
            account.account_client_id = client_id;
            account.account_creation_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            account.account_balance = 0;
            account.account_interest = 0.02;
            account.account_max_amount = 1000;
            account.account_iban = "FR" + Math.floor(Math.random() * 100000000000000000);
            account.account_label = "Compte de " + client_id;

            let sql = "INSERT INTO account SET ?";
            const [rows, fields] = await pool.query(sql, account);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async deleteAccount(account_id) {

        try {

            let sql = "DELETE FROM account WHERE account_id = ?";
            const [rows, fields] = await pool.query(sql, [account_id]);
            return rows; 
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
    
}