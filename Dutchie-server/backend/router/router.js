const express = require("express")
const DatabaseHandler = require('../config/DatabaseHandler')

const databaseHandler = new DatabaseHandler()
const connection = databaseHandler.createConnection()
const router = express.Router()
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()


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

// TODO: Lay index doi giay

router.get('/shoes/:id',function (req,res) {
    let id = req.params.id
    connection.query(`SELECT * FROM SHOES WHERE SHOES_ID = ${id}`, (err, rows) => {
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
//https://www.bezkoder.com/node-js-rest-api-express-mysql/
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

const Shoes = function (shoes) {
    this.NAME = shoes.NAME
    this.DESCRIPTION = shoes.DESCRIPTION
    this.CreationDate = shoes.CreationDate
    this.PRICE = shoes.PRICE
}

// POST THANH CONG =))
router.post('/shoes/test_post', jsonParser,function (req, res)  {
    if(!req.body){
        console.error(`err no param ${req.body}`);
        res.json({
            success: false,
        })
    } else {
        let shoes = new Shoes ({
            NAME :req.body.name,
            DESCRIPTION: req.body.description,
            CreationDate :req.body.creationDate,
            PRICE:req.body.price
        }
        )
        connection.query("INSERT INTO SHOES SET ?", shoes, (err, rows) => {
            if(err) {
                console.error(err)
                res.json({
                    success: false,
                    err
                })
            }
            else {
                console.log('insert success!')
                res.json({
                    success: true,
                    rows
                })
            }
        })
    }
})
module.exports = router;
