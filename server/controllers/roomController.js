const Room = require("../models/roomModel");

const createRoom = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name gerekli" });
    }
    const newRoom = await Room.create({
      name: name,
    });
    return res
      .status(200)
      .json({ message: "room başarıyla olsuturuldu", newRoom });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: `room olusturma hatası : ${error}` });
  }
};

const getAllRoom = async (req, res) => {
  try {
    const rooms = await Room.find();
    return res
      .status(200)
      .json({ message: "roomlar başarıyla getirildi", rooms });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: `room getirme hatası : ${error}` });
  }
};
const roomDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const detailRoom = await Room.findById(id);
    return res
      .status(200)
      .json({ message: "room detayları getirildi", detailRoom });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: `room detayları getirme hatası : ${error}` });
  }
};

module.exports = { createRoom, getAllRoom,roomDetails };
