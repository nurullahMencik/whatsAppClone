const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    name:{type:String,required:true},
    message:String,
    uid:String,
    roomId:String
},{timestamps:true})
const Message = mongoose.model("message",messageSchema)

module.exports = Message