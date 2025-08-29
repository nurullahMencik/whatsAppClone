const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const connection = require("./config/database")


dotenv.config()
connection()

const app = express()
app.use(express.json())
app.use(cors())


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

//routes
const roomRoute = require("./routes/roomRoute")
const messageRoute = require("./routes/messageRoute")


//use
app.use("/api/room",roomRoute)
app.use("/api/message",messageRoute)

const PORT = process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log("server is running : "+PORT)
})