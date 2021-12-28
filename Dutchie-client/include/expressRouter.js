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
     let dataMale = await requestAPI.getAllShoesWithType('male')
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


routers.get('/shoes_listing', async (req, res) => {
    let data = await requestAPI.getAllShoes()
    res.render('ShoesListing', {
        data : data
    })
})


routers.get('/cart', urlencodedParser,async (req, res) => {
    let cookie = req.cookies.CookieName
    let data = await requestAPI.getCart(cookie)
    let dataAllShoes = await requestAPI.getAllShoes()
    res.render('Cart', {
        data: data,
        dataAllShoes: dataAllShoes
    })
})
//
// routers.post('/cart', urlencodedParser , async  (req, res) => {
//     let cookie = req.cookies.CookieName
//     let bodyy = req.body
//     console.log(bodyy)
//     let data = await requestAPI.getCart(cookie)
//     let dataAllShoes = await requestAPI.getAllShoes()
//     res.render('Cart', {
//         data: data,
//         dataAllShoes: dataAllShoes
//     })
// })



routers.get('/checkout', urlencodedParser, async (req, res) => {
    let cookie = req.cookies.CookieName
    let dataUser = await requestAPI.getUserWithCookie(cookie)
    let shippingMethod = await requestAPI.getShippingMethod();
    let paymentMethod = await requestAPI.getPaymentMethod();
    res.render('Checkout',{
        dataUser: dataUser,
        shippingMethod:shippingMethod,
        paymentMethod: paymentMethod
    })
})

routers.post('/checkout',urlencodedParser,async (req, res) => {
    let cookie = req.cookies.CookieName
    let user = new requestAPI.User({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Phone : req.body.Phone,
        Address : req.body.Address,
        Email : req.body.Email,
        CreationDate: new Date(),
        CookieName: cookie
    })


    let dataUser = await requestAPI.getUserWithCookie(cookie)
    let data = await requestAPI.postUser(user)
    let shippingMethod = await requestAPI.getShippingMethod();
    let paymentMethod = await requestAPI.getPaymentMethod();

    let oder = {
        ShippingMethod: 1,
        PaymentMethod: 1,
        CookieName: cookie
    }
    let postOder = requestAPI.postOder(oder)
    console.log(postOder)

    res.render('Checkout',{
        dataUser: dataUser,
        shippingMethod:shippingMethod,
        paymentMethod: paymentMethod,
        dataSuccess : data
    })
})

routers.get('/detail/:id', async (req, res) => {
    let id = req.params.id

    let data =  await requestAPI.getShoesWithId(id)
    res.render('detail', {
        data: data
    })
})
routers.post('/detail/:id',urlencodedParser, async (req, res) => {
    let value = req.body.CurrentQuantity
    let cookie = req.cookies.CookieName
    let id = req.params.id
    console.log(id)
    let data =  await requestAPI.getShoesWithId(id)
    let postData = await requestAPI.postCartAddShoes(id,value,cookie)
    console.log(postData)
    res.render('detail', {
        data: data,
        postData: postData
    })
} )


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