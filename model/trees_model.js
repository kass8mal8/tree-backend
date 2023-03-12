const mongoose = require('mongoose')
const Schema = mongoose.Schema

const treeSchema = new Schema({
    owner: String,
    owner_id: {
        type:String, 
        required:true
    },
    owner_pic:String,
    type: {
        type:String, 
        required:true
    },

}, { timestamps: true })

const Tree = mongoose.model('tree', treeSchema)
module.exports = Tree
