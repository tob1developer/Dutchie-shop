const mysql = require("mysql")


function DatabaseHandler(){
    this.connection = null
}


DatabaseHandler.prototype.createConnection = function (){
    this.connection = mysql.createConnection({
        host : process.env.DATABASE_HOST || "0.0.0.0" || "172.22.0.2", // neu  run docker thi bo 172....
        user: 'root',
        password: 'tob1',
        database: 'DB_DUTCHIE_V1',
        port: 3306
    })

    this.connection.connect(function (err) {
        if(err){
            console.error("error connecting" + err.stack)
            return null
        }
        console.log("connection as ID" + this.threadId)
    })
    return  this.connection
}

module.exports = DatabaseHandler;