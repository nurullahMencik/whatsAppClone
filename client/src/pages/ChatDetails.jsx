import React, { useEffect, useState, useRef } from "react";
import { SiZincsearch } from "react-icons/si";
import InputEmoji from "react-input-emoji";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailRoomR } from "../redux/slices/roomSlice";
import moment from "moment";
import { createMessageR, detailMessageR } from "../redux/slices/messageSlices";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatDetails = () => {
  const dispatch = useDispatch();
  const { selectedRoom } = useSelector((state) => state.room);
  const { user } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);
  const [text, setText] = useState("");
  const { id } = useParams();
  const messagesEndRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (id) {
      dispatch(detailRoomR(id));
      dispatch(detailMessageR(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOnEnter = (text) => {
    if (text.trim() === "") return;
    const data = {
      name: user?.displayName,
      message: text,
      uid: user?.uid,
      roomId: id,
    };
    dispatch(createMessageR(data));
    setText("");
  };

  const getMessageWidthClass = () => {
    return isMobile ? "w-full" : "w-[400px]";
  };

  if (!id && isMobile) {
    return null;
  }

  return (
    <div className="chatDetailBg bg-gray-700 flex flex-col h-screen w-full sm:w-1/2 md:w-3/4">
      <div className="bg-gray-200 h-16 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png "
            alt="Room avatar"
          />
          <div>
            <div className="font-semibold">{selectedRoom?.name}</div>
            <div className="text-sm text-gray-600">
              {moment(selectedRoom?.createdAt).format("DD-MM-YYYY")}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SiZincsearch size={23} className="cursor-pointer text-gray-700" />
          <BsThreeDotsVertical size={23} className="cursor-pointer text-gray-700" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`${getMessageWidthClass()} rounded-md p-2 my-2 ${
              message?.uid === user?.uid ? "ml-auto bg-green-300" : "bg-white"
            }`}
          >
            <div>{message?.message}</div>
            <div className="text-xs text-right text-gray-600 mt-1">
              {moment(message?.createdAt).format("HH:mm")}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="w-full">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
        />
      </div>
    </div>
  );
};

export default ChatDetails;