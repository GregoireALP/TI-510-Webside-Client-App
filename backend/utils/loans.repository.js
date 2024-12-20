const pool = require(__dirname + "//db.include.js");


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
    },

    async getLoanController(loan_id) {
        try {
            let sql = "SELECT * FROM loan WHERE loan_id = ?";
            const [rows, fields] = await pool.query(sql, [loan_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getLoanByClientController(client_id) {
        try {
            let sql = "SELECT * FROM loan WHERE loan_client_id = ?";
            const [rows, fields] = await pool.query(sql, [client_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getLoanByAdvisorController(advisor_id) {
        try {
            let sql = "SELECT * FROM loan AS l JOIN client AS c ON l.loan_client_id = c.client_id WHERE c.client_advisor_id = ?";
            const [rows, fields] = await pool.query(sql, [advisor_id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async initiateLoanController(amount, label, client_id , interest, type) {
        try {
            let sql = "INSERT INTO loan (loan_amount, loan_label, loan_to_refund, loan_start_date, loan_end_date, loan_client_id, loan_status, loan_interest, loan_type) VALUES (?, ?, ?, NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH), ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [amount, label, amount, client_id, 0, interest, type]);
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async approveLoanController(loan_id) {
        try {
            let sql = "UPDATE loan SET loan_status = 1 WHERE loan_id = ?";
            const [rows, fields] = await pool.query(sql, [loan_id]);
            // Add the amount to the client account
            let sql2 = "SELECT loan_amount FROM loan WHERE loan_id = ?";
            const [rows2, fields2] = await pool.query(sql2, [loan_id]);

            let sql3 = "SELECT account_id FROM account WHERE account_client_id = (SELECT loan_client_id FROM loan WHERE loan_id = ?)";
            const [rows3, fields3] = await pool.query(sql3, [loan_id]);

            let sql4 = "UPDATE account SET account_balance = account_balance + ? WHERE account_id = ?";
            const [rows4, fields4] = await pool.query(sql4, [rows2[0].loan_amount, rows3[0].account_id]);

            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async rejectLoanController(loan_id) {
        try {
            let sql = "UPDATE loan SET loan_status = 2 WHERE loan_id = ?";
            const [rows, fields] = await pool.query(sql, [loan_id]);
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async finishLoanController(loan_id) {
        try {
            let sql = "UPDATE loan SET loan_status = 3 WHERE loan_id = ?";
            const [rows, fields] = await pool.query(sql, [loan_id]);
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async refundLoanController(loan_id, amount) {
        try {
            let sql = "UPDATE loan SET loan_to_refund = loan_to_refund - ? WHERE loan_id = ?";
            const [rows, fields] = await pool.query(sql, [amount, loan_id]);

            // Remove the amount from the client account
            let sql2 = "SELECT account_id FROM account WHERE account_client_id = (SELECT loan_client_id FROM loan WHERE loan_id = ?)";
            const [rows2, fields2] = await pool.query(sql2, [loan_id]);

            let sql3 = "UPDATE account SET account_balance = account_balance - ? WHERE account_id = ?";
            const [rows3, fields3] = await pool.query(sql3, [amount, rows2[0].account_id]);

            // if the loan is fully refunded, close it
            let sql4 = "SELECT loan_to_refund FROM loan WHERE loan_id = ?";
            const [rows4, fields4] = await pool.query(sql4, [loan_id]);

            if(rows4[0].loan_to_refund <= 0) {
                let sql5 = "UPDATE loan SET loan_status = 3 WHERE loan_id = ?";
                const [rows5, fields5] = await pool.query(sql5, [loan_id]);
            }
            
            return "Ok";
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }
}