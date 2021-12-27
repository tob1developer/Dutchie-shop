const  express = require('express')
const routers = express.Router()
const render = require('ejs')
const requestAPI = require('./requestAPI')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })



routers.get('/', async (req, res) => {
    createCookie(req,res);
     let dataFemale = await requestAPI.getAllShoesWithType('female');
     let dataTrending = await requestAPI.getAllShoesWithType('trending')
     let dataMale = await requestAPI.getAllShoesWithType('Male')
    console.log(dataFemale)
    res.render('home',{
        dataFemale : dataFemale,
        dataTrending : dataTrending,
        dataMale : dataMale
    })
})

routers.get('/confirmUser',(req, res) => {
    res.render('confirmUser')
})
routers.post('/confirmUser',  urlencodedParser, (req, res) => {
    let  cookie = req.cookies.CookieName
    let user = new requestAPI.User({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Phone : req.body.Phone,
        Address : req.body.Address,
        Email : req.body.Email,
        CreationDate: new Date(),
        CookieName: cookie
    })
    console.log(user)
    let rows = requestAPI.postUser(user)
    console.log(rows)
    res.render("confirmUser", {
        rows
    })
})


routers.get('/shoes_listing', (req, res) => {
    res.render('ShoesListing')
})


routers.get('/cart', (req, res) => {
    res.render('Cart')
})


routers.get('/checkout', (req, res) => {
    res.render('Checkout')
})

// Tao cookie
function createCookie(req, res){
    let cookie = req.cookies.CookieName
    if(cookie === undefined){
        let randomNumber = Math.random().toString()
        randomNumber =randomNumber.substring(2, randomNumber.length)
        res.cookie('CookieName',randomNumber,{ maxAge: 900000, httpOnly: true })
        console.log('cookie create successfully')
    }
    else {
        console.log('cookie exists', cookie)
    }
}


module.exports = routers