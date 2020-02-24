const env = require('dotenv')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/index')

class App {
    constructor () {
        env.config()
        this.express = express()
        this.dbConnect()
        this.middlewares()
        this.routes()
    }

    async dbConnect(){
        try{
            const db = await mongoose.connect(
                process.env.DB_CONNECT,
                { 
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
            console.log('MongoDB Connected')
        }catch(err){
            console.log('MongoDB Failed to Connected ',err)
        }
    }

    middlewares () {
        this.express.use(express.json())
        this.express.use(cors())
    }

    routes () {
        this.express.use('/api/v1', routes)
    }
}

module.exports = new App().express