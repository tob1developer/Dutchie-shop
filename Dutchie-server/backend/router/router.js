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

/**
 * Lay toan bo doi giay
 * */

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

/**
 * Lay toan bo giay dang hot
 * */
//TODO: Lay toan bo giay dang hot


// TODO: Lay giay theo nam

// TODO: lay toan bo theo nu

// TODO lay thong tin nguoi dung



// TODO lay ra  phuong thuc thanh toan



// TODO lay ra phuong thuc van chuyen



// TODO lay toan bo gio hang

// TODO tim kiem theo san pham



// TODO: create cookie de nhan dien nguoi dung dang truy cap
// https://www.w3schools.com/js/js_cookies.asp
// :D
module.exports = router;
