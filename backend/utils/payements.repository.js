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

    async getAllPayementsController() {

        try {

            let sql = "SELECT * FROM payement";
            const [rows, fields] = await pool.query(sql);
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
}