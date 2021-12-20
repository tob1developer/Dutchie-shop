const express = require("express")
const router = require('./router/router')

const  app = express()

app.use('/',router)


app.listen(3000,()=> console.log("listeing to 3000"))
