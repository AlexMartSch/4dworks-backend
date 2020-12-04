const config = require('dotenv');
const mysql = require('mysql')
const express = require('express');
const bodyParser = require('body-parser')
const {info, error} = require('./src/modules/logger')

config.config();

const routesV1 = require('./src/routes/v1')


class Server {
    constructor(){

        this.isConnectedWithMySQL = false
        this.host = process.env.SERVER_HOST;
        this.port = process.env.SERVER_PORT;

        this.app = express();
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(bodyParser.json())

        this.db = mysql.createConnection({
            host: process.env.MYSQL_CONN_HOST,
            user: process.env.MYSQL_CONN_USER,
            password: process.env.MYSQL_CONN_PASS,
            database: process.env.MYSQL_CONN_DB
        })
        
        this.db.connect(err => {
            if (err){
                console.log("MYSQL -- Cant connect with DATABASE.");
                console.log(err.message);
                return
            }
            this.isConnectedWithMySQL = true
            this.startServer()
            console.log("MYSQL -- Established Connection [" + db.threadId + "]");
        })

        
    }

    getDatabase = () => {
        return this.db
    }

    checkEnvFile = () => {
        let state = false
        ("SERVER_HOST" in process.env & "MYSQL_CONN_PASS" in process.env) ? state = true : state = false;
        return state;
    }


    startServer = () => {
        if (!this.checkEnvFile) return console.log("ENV File no existe!");

        if (this.isConnectedWithMySQL) routesV1(this.app) 
        else return console.log("[API] Access denied to database, routing disabled.");


        this.app.listen(this.port, this.host, () =>{
            console.log(`Listeing on http://${this.host}:${this.port}`);
        });
    }
}

const app = new Server()
db = app.getDatabase()
