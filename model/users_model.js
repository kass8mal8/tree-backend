const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:String,
    photoURL:String,
    googleID:String
})

const User = mongoose.model('user', userSchema)
module.exports = User
