const express = require("express")
const DatabaseHandler = require('../config/DatabaseHandler')
const databaseHandler = new DatabaseHandler()
const connection = databaseHandler.createConnection()
const router = express.Router()
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()


/*
router.get('/example', function (req,res,){

    createCookie(req,res);

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
*/

/**
 * Lay toan bo giay
 * @return array chua tat ca thong tin doi giay
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
 * Lay giay theo ID
 * @param id la dc chon trong khi show all doi giay.
 * @return Object 1 doi giat fillter id
 * */
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

/**
 * Lay toan bo giay dang trending
 * @return List giay dang co
 * */
router.get('/shoes/get/trending', (req, res) => {
    connection.query(`SELECT * FROM SHOES WHERE Trending=1`, (err, rows) => {
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
 * Lay toan bo giay cho nam
 * @return List giay nam
 * */
router.get('/shoes/get/male', (req, res) => {
    connection.query(`SELECT * FROM SHOES WHERE SEX='Nam'`, (err, rows) => {
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
 * Lay toan bo giay cho nu
 * @return List giay nu
 * */
router.get('/shoes/get/female', (req, res) => {
    connection.query(`SELECT * FROM SHOES WHERE SEX='Nu'`, (err, rows) => {
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


const User = function (User) {
    this.FirstName = User.FirstName
    this.LastName = User.LastName
    this.Phone = User.Phone
    this.Address = User.Address
    this.Email = User.Email
    this.CookieName = User.CookieName
}
/**
 * tra ve user da duoc luu trong DB
 * @param cookie duoc co san trong do
 * @return err neu ko co data trong DB
 * @return rows neu co data trong DB
 *
 * */
router.get('/post/user',(req, res) => {
    createCookie(req,res);
    let cookie = req.cookies.cookieName
    if(cookie === undefined){
        res.json({
            status: "no user"
        })
    }
    else {
        connection.query(`SELECT * FROM USER WHERE CookieName = ${cookie}`, (err, rows) => {
            if(err != null) {
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

    }
})


/**
 * Co chuc nang cho nguoi dung submit thong tin de tao don thanh toan.
 * @param Json user
 * @return update neu  trung cookie va duoc luu truoc do
 * @return insert neu chua co user va da luu cookie truoc do
 * */
router.post('/post/post_user',jsonParser, (req, res) => {
    let cookie = req.cookies.cookieName
    console.log(cookie)
    if(!req.body && cookie === undefined){
        console.error(`err no param ${req.body}`);
        res.json({
            success: false,
        })
    }
    else {
        let date = new Date();
        let user = new User ({
            FirstName: req.body.FirstName,
            LastName :req.body.LastName,
            Phone :req.body.Phone,
            Address :req.body.Address,
            Email :req.body.Email,
            CreationDate :date,
            CookieName :cookie
            }
        )
        connection.query(`SELECT * FROM USER WHERE CookieName = ${cookie}`, (err, rows) => {
            console.log( 'ddd' +rows.length)
            if (err === null && rows.length !== 0){
                connection.query('UPDATE USER SET FirstName = ?, LastName = ?, Phone = ?, Address = ?,Email = ? WHERE CookieName = ?',
                    [user.FirstName,user.LastName,user.Phone,user.Address,user.Email,cookie],
                    (err_update, rows_update) => {
                        if(err_update){
                            console.log("update user fail")
                            res.json({
                                success: false,
                                content: 'Error update data',
                                err_update
                            })
                        }
                        else{
                            console.log("update user success")
                            res.json({
                                success: true,
                                content: 'Update user success',
                                rows_update
                            })
                        }
                    })
            }
            else {
                connection.query("INSERT INTO USER SET ?", user, (err_insert, rows_insert) => {
                    if(err_insert) {
                        console.error(err)
                        res.json({
                            success: false,
                            err_insert
                        })
                    }
                    else {
                        console.log('insert User success!')
                        res.json({
                            success: true,
                            rows_insert
                        })
                    }
                })
            }
        })
    }


})


/**
 * Su dung phuong thuc van chuyen.
 *
 * @return rows la data
 * @return err la truy xuat sai
 * */
router.get('/shipping_method', (req, res) => {
    connection.query("SELECT * FROM SHIPPING_METHOD", (err, rows) => {
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
 * su dung de tra ve phuong thuc thanh toan
 * */
router.get('/payment_method',(req, res) => {
    res.json({
        success: true,
        payment_type: "Trả khi nhận hàng",
        active : true
    })
})


// TODO: update  shoes vao gio hang
router.post('/cart/update_submit', jsonParser, (req, res) => {
    // createCookie(req,res);
    let cookie = '11690075175647019'
    connection.query(`SELECT * FROM CART WHERE CookieName = ${cookie}`, (err, rows) => {
        if (err){
            res.json({
                success: false,
                err
            })
        }
        else {
            const rowsConvert = JSON.parse(JSON.stringify(rows))
            for (let index in req.body.rows){
                let it = req.body.rows[index]
                for (let indexToDb in rowsConvert){
                    let itWithDb = rowsConvert[indexToDb]
                    if (it.ShoesId === itWithDb.ShoesId){
                        let newValue = itWithDb.Quaintly + it.Quaintly
                        console.log(newValue)
                        connection.query(`UPDATE CART SET Quaintly = ${newValue} WHERE ShoesId = ${it.ShoesId}`)
                    }
                }
            }
            res.json({
                success: 'test'
            })
        }
    })
})


//TODO: INSERT giay vao gio hang
/**
 * Ham lay user
 * @param cookie truyen cookie
 * @return UserID trong bang
 * */
async function getUserIDWithCookie(cookie) {

    return new Promise(resolve => {
        connection.query(`SELECT USER_ID FROM USER WHERE  CookieName = ${cookie}`, (err, rows) => {
            if (err) console.log(err)
            else {
                let userID = JSON.parse(JSON.stringify(rows[0].USER_ID))
                resolve(userID)
            }
        })
    })
}

/**
 * Insert giay vao cart
 * @param Json co 2 truong ShoesID va Quaintly
 * @return Json success hay ko
 * */
router.post('/cart/add_shoes', jsonParser,async (req, res) => {
    let cookie = '11690075175647019'
    let UserId = await getUserIDWithCookie(cookie);

    connection.query(`INSERT INTO CART SET CookieName = ?, UserId = ?, ShoesId = ?, Quaintly = ?`,[
        cookie, UserId, req.body.ShoesID, req.body.Quaintly
    ], (err, rows) => {
        if (err) {
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



// TODO lay toan bo gio hang
router.get('/cart', (req, res) => {
    let cookie = '11690075175647019'
    connection.query(`SELECT * FROM CART WHERE CookieName = ${cookie}`, (err, rows) => {
        if(err){
            res.json({
                success: false,
                err
            })
        }
        else {
            res.json({
                success: true,
                rows
            })
        }
    })
})


/**
 * @return tra ve noi dung oder
 * */
router.get('/oder', (req, res) => {
    let cookie = '11690075175647019'
    connection.query(`SELECT ShippingMethod,PaymentMethod FROM ODER WHERE CookieName = ${cookie}`, (err,rows) => {
        if (err){
            res.json({
                success: false,
                err
            })
        }
        else {
            res.json({
                success: true,
                rows
            })
        }
    })
})

// TODO tim kiem theo san pham : phat trien sau.


const Shoes = function (shoes) {
    this.NAME = shoes.NAME
    this.DESCRIPTION = shoes.DESCRIPTION
    this.CreationDate = shoes.CreationDate
    this.PRICE = shoes.PRICE
}

/**
 * Co chuc nang tra tao data shoes
 * @param body tra ve noi dung json duoc user submit
 * @return success -> true thi ra rows, false thi err
 * */
router.post('/post/shoes', jsonParser,function (req, res)  {
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


/**
 * Khoi tao cookie
 * @param req tra ve noi dung cua nguoi dung
 * @param res gui noi dung tu server
 * @return cookieName de luu thong tin nguoi dung.
 *
 * */
function createCookie(req, res){
    let cookie = req.cookies.cookieName
    if(cookie === undefined){
        var randomNumber = Math.random().toString()
        randomNumber =randomNumber.substring(2, randomNumber.length)
        res.cookie('cookieName',randomNumber,{ maxAge: 900000, httpOnly: true })
        console.log('cookie create successfully')
    }
    else {
        console.log('cookie exists', cookie)
    }
}


module.exports = router;
