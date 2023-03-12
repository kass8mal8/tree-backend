const express = require('express')
const app = express()

require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const { json } = require('express')

const MONGO_URI = "mongodb+srv://caseem:kassimali2001@cluster0.tyrwkwv.mongodb.net/TreeCover-app?retryWrites=true&w=majority"

app.use(cors())
app.use(json())

const userRoute = require('./routes/users')
const treeRoute = require('./routes/trees')

app.use('/users', userRoute)
app.use('/trees', treeRoute)

const connect = async() => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Database connection successful');
    } 
    catch (error) { console.log(error.message) }
}
connect()

module.exports = app
