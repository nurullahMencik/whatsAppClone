const express = require("express")
const router = express.Router()
const {createRoom,getAllRoom,roomDetails} = require("../controllers/roomController")

router.post("/create",createRoom)
router.get("/getAll",getAllRoom)
router.get("/details/:id",roomDetails)

module.exports = router