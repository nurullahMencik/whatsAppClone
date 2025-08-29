const Message = require("../models/messageModel")

const createMessage = async(req,res)=>{
    try {
        const newMessage = await Message.create(req.body)
        return res.status(200).json({message:"mesaj başarıyla olusturuldu",newMessage})
    } catch (error) {
        res.status(400).json({message:"mesaj olusturma hatası",error})
    }
}
const detailMessage = async(req,res)=>{
    try {
        const detailMessage = await Message.find({roomId:req.params.id})
        return res.status(200).json({message:"mesajlar getırıldı",detailMessage})
    } catch (error) {
        res.status(400).json({message:"mesaj getirme hatası",error})
    }
}

module.exports = {createMessage,detailMessage}