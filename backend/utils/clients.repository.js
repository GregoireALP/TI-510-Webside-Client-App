const pool = require(__dirname + "//db.include.js");
const bcrypt = require('bcrypt');

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

    async createClientController(firstname, lastname, advisor, email, phone, address, password, birthday) {

        try {
            const salt = bcrypt.genSaltSync(10);
            let sql = "INSERT INTO client (client_gender, client_creation_date, client_firstname, client_lastname, client_advisor_id, client_email, client_phone, client_address, client_password, client_birthday) VALUES (?, now(), ?, ?, ?, ?, ?, ?, ?, ?)";
            const [rows, fields] = await pool.query(sql, [1, firstname, lastname, advisor, email, phone, address, bcrypt.hashSync(password, salt), birthday]);
            
            return "Ok"
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    },

    async updateClientController(id, firstname, lastname, email, phone, address, password) {

        try {

            if(password == "") {
                let sql = "UPDATE client SET client_firstname = ?, client_lastname = ?, client_email = ?, client_phone = ?, client_address = ? WHERE client_id = ?";
                const [rows, fields] = await pool.query(sql, [firstname, lastname, email, phone, address, id]);
                return "Ok"
            } else {
                const salt = bcrypt.genSaltSync(10);
                let sql = "UPDATE client SET client_firstname = ?, client_lastname = ?, client_email = ?, client_phone = ?, client_address = ?, client_password = ? WHERE client_id = ?";
                const [rows, fields] = await pool.query(sql, [firstname, lastname, email, phone, address, bcrypt.hashSync(password, salt), id]);
                return "Ok"
            }
        } catch (error) {
            console.log(error);
            return "Something went wrong";
        }
    }

}