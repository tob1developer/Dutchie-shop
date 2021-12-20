const express = require("express")
const DatabaseHandler = require('../config/DatabaseHandler')

const databaseHandler = new DatabaseHandler()
const connection = databaseHandler.createConnection()
const router = express.Router()


//TODO: Example
router.get('/', function (req,res,){
    connection.query("SELECT * FROM EMPLOYEE", (err, rows) => {
        if(err) {
            res.json({
                success: false,
                err
            })
        } else {
            res.json({
                success: true,
                rows
            })
        }
    })
} )

router.get('/shoes/get_all', function (req, res) {
    connection.query("SELECT * FROM SHOES", (err, rows) => {
        if(err) {
            res.json({
                success: false,
                err
            })
        } else {
            res.json({
                success: true,
                rows
            })
        }
    })
})

module.exports = router;
