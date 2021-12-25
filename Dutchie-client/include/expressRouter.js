const  express = require('express')
const routers = express.Router()
const {render} = require('ejs')

routers.get('/', (req, res) => {
    res.render('home')
})

module.exports = routers