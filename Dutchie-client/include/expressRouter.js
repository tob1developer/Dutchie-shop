const  express = require('express')
const routers = express.Router()
const {render} = require('ejs')
const requestAPI = require('./requestAPI')


routers.get('/', async (req, res) => {
    let test = await requestAPI.demoCrawlAPI()
    res.render('home',{
        data : test
    })
})

module.exports = routers