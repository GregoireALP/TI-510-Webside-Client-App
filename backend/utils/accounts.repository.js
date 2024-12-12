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

    async getAccountController(client_id) {

        try {

            let sql = "SELECT * FROM account WHERE account_id = ?";
            const [rows, fields] = await pool.query(sql, [client_id]);
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

        let accountLabel = [
            'Compte courant',
            'Compte épargne',
            'Compte joint',
            'Compte entreprise',
            'Compte étudiant',
            'Compte jeune',
        ]

        try {

            let getNameRequest = "SELECT client_firstname, client_lastname FROM client WHERE client_id = ?";
            const [nameRows, nameFields] = await pool.query(getNameRequest, [client_id]);
            let clientName = nameRows[0].client_firstname + ' ' + nameRows[0].client_lastname;

            let account = this.getAccountTemplate();
            account.account_client_id = client_id;
            account.account_creation_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            account.account_balance = 0;
            account.account_interest = 0.02;
            account.account_max_amount = 1000;
            account.account_iban = "FR" + Math.floor(Math.random() * 100000000000000000);
            account.account_label = accountLabel[Math.floor(Math.random() * accountLabel.length)]  + ' de ' + clientName;

            let sql = "INSERT INTO account SET ?";
            const [rows, fields] = await pool.query(sql, account);
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async deleteAccountController(account_id) {

        try {

            let sql = "DELETE FROM account WHERE account_id = ?";
            const [rows, fields] = await pool.query(sql, [account_id]);
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async addBalanceController(account_id, amount) {

        try {

            let sql = "UPDATE account SET account_balance = account_balance + ? WHERE account_id = ?";
            const [rows, fields] = await pool.query(sql, [amount, account_id]);
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
    
}