const express = require("express")

const app = express()

const hostName = '0.0.0.0';
const port = 3333;


app.listen(port, ()=> console.log("listening 3333"))
app.set('view engine','ejs');
app.set('views','./assets/views')
app.use(require('./include/expressRouter'));

app.use(express.static(__dirname +'/assets/views/'))