const { get } = require("../controllers/accounts.routes");

const pool = require(__dirname + "//db.include.js");


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

    async getClientController(id) {

        try {

            let sql = "SELECT * FROM client WHERE client_id = ?";
            const [rows, fields] = await pool.query(sql, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async getClientByAdvisorController(id) {

        try {

            let sql = "SELECT * FROM client WHERE client_advisor_id = ?";
            const [rows, fields] = await pool.query(sql, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async createClientController(firstname, lastname, advisor, email, phone, address, password) {

        try {

            let sql = "INSERT INTO client (client_gender, client_firstname, client_lastname, client_advisor_id, client_email, client_phone, client_address, client_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            const [rows, fields] = await pool.query(sql, [1, firstname, lastname, advisor, email, phone, address, password]);
            
            let client_id = rows.insertId;
            return client_id
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

}