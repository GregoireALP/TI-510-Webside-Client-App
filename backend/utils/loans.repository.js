const pool = require(__dirname + "\\db.include.js");


module.exports = {

    getLoanTemplate() {
        return {
            "loan_id": 0,
            "loan_amount": 0,
            "loan_interest": 0,
            "loan_label": "",
            "loan_to_refund": 0,
            "loan_start_date": "",
            "loan_end_date": "",
            "loan_client_id": 0,
        }
    },

    async getAllLoansController() {

        try {

            let sql = "SELECT * FROM loan";
            const [rows, fields] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}