const express = require("express")
const DatabaseHandler = require('../config/DatabaseHandler')

const databaseHandler = new DatabaseHandler()
const connection = databaseHandler.createConnection()
const router = express.Router()


const RequestDatabase = function (request) {

}

RequestDatabase.getShoesWithID = (id, res) => {
    connection.query(`SELECT * FROM SHOES WHERE SHOES_ID = ${id}`, (err, rows) => {
        if (err){
            console.error(err);
            res.json({
                success: false,
                err
            })
        } else {
            console.log("success get shoes with id")
            res.json({
                success: true,
                rows
            })
        }
    })

}

module.exports = RequestDatabase