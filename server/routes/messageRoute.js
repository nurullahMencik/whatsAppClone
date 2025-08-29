const express = require("express")
const router = express.Router()
const {createMessage,detailMessage} = require("../controllers/messageController")
router.post("/create",createMessage)
router.get("/detail/:id",detailMessage)



module.exports = router