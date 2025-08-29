import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LiaCommentSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { createRoomR, getAllRoomsR } from "../redux/slices/roomSlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const SideBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getAllRoomsR());
  }, []);

  const addPerson = () => {
    const newPerson = prompt("yeni kişi ismi giriniz");
    dispatch(createRoomR(newPerson));
  };

  return (
    <div className="w-1/4 border-r ">
      <div className="bg-gray-200 h-16 flex items-center justify-between p-3">
        <img
          src={user?.photoURL}
          alt="profil page"
          className="w-10 rounded-full"
        />
        <div className="flex items-center gap-5">
          <LiaCommentSolid size={23} className="cursor-pointer text-gray-600" />
          <BsThreeDotsVertical
            size={23}
            className="cursor-pointer text-gray-600"
          />
        </div>
      </div>
      <div className="bg-gray-100 flex-1 p-2">
        <div className="bg-white flex items-center gap-2 border p-2 rounded-lg">
          <FiSearch size={20} className="text-gray-600" />
          <input
            className="outline-none border-none bg-transparent flex-1"
            type="text"
            placeholder="Arama Yapınız"
          />
        </div>
      </div>
      <div
        onClick={addPerson}
        className="bg-green-600 text-white p-2 m-2 text-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
      >
        Yeni Kişi Ekle
      </div>
      <div>
        {rooms &&
          rooms.map((room, index) => (
            <div
              onClick={() => navigate(`/chat/${room._id}`)}
              key={index}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-200"
            >
              <div className="flex items-start gap-2 ">
                <img
                  className="w-10  rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
                  alt=""
                />
                <div>
                  <div>{room.name}</div>
                  <div className="text-xsm text-gray-700">"deneme deneme"</div>
                </div>
              </div>
              <div className="text-xsm text-gray-700">
                {moment(room.createdAt).format("DD-MM-YY")}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
