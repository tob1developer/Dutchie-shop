const  express = require('express')
const routers = express.Router()
const render = require('ejs')
const requestAPI = require('./requestAPI')


routers.get('/', async (req, res) => {
    // let test = await requestAPI.getAllShoesWithType('female');
    let test = await requestAPI.getShippingMethod();
    res.render('home',{
        data : test
    })
})

routers.get('/confirmUser',(req, res) => {
    res.render('confirmUser')
})

module.exports = routers