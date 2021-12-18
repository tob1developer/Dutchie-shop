const mysql = require("mysql")
const express = require("express")
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: 'root',
    password: 'tob1',
    database: 'DB_DUTCHIE_V1',
    port: 3306
});

const  app = express();

app.get('/', ((req, res) => {
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
}))

app.listen(3000,()=> console.log("listeing to 3000"))
