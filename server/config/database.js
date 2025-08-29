const mongoose = require("mongoose")

const connection = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDb is connected")
    } catch (error) {
        console.log("mongoDb is failed : " +error)
    }
}

module.exports = connection