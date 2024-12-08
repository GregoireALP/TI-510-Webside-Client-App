const pool = require(__dirname + "//db.include.js");


module.exports = {

    getPayementTemplate() {
        return {
            "payement_id": 0,
            "payement_amount": 0,
            "payement_label": "",
            "payement_currency": "",
            "payement_date": "",
            "payement_account_sender_id": 0,
            "payement_account_reciever_id": 0
        }
    },

    async getAllPayements() {

        try {

            let sql = "SELECT * FROM payement";
            const [rows, fields] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getPayement(payement_id) {

        try {

            let sql = "SELECT * FROM payement WHERE payement_id = ?";
            const [rows, fields] = await pool.query(sql, [payement_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },


    async getPayementsBySenderId(sender_id) {

        try {

            let sql = "SELECT * FROM payement WHERE payement_account_sender_id = ?";
            const [rows, fields] = await pool.query(sql, [sender_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getPayementsByReceiverId(receiver_id) {

        try {

            let sql = "SELECT * FROM payement WHERE payement_account_reciever_id = ?";
            const [rows, fields] = await pool.query(sql, [receiver_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async sendPayement(account_sender_id, account_receiver_id, amount, label) {

        try {

            // Check if the sender has enough money
            let sql0 = "SELECT account_balance FROM account WHERE account_client_id = ?";
            console.log(account_sender_id);
            const [rows0, fields0] = await pool.query(sql0, [account_sender_id]);
            if (rows0[0].account_balance < amount) {
                return "Not enough money";
            }
            
            let sql = "INSERT INTO payement (payement_amount, payement_label, payement_account_sender_id, payement_account_reciever_id, payement_date, payement_currency) VALUES (?, ?, ?, ?, ?, ?)";
            const [rows, fields] = await pool.query(sql, [amount, label, account_sender_id, account_receiver_id, new Date(), 'EUR']);

            // Update the sender account
            let sql2 = "UPDATE account SET account_balance = account_balance - ? WHERE account_id = ?";
            const [rows2, fields2] = await pool.query(sql2, [amount, account_sender_id]);

            // Update the receiver account
            let sql3 = "UPDATE account SET account_balance = account_balance + ? WHERE account_id = ?";
            const [rows3, fields3] = await pool.query(sql3, [amount, account_receiver_id]);

            return "Ok";

        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}