import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="flex flex-col h-screen w-full">
      <header className="bg-slate-500 flex items-center justify-between">
        <div className="px-4 py-2 flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={selectedConversation.profilePic} alt="User Avatar" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
            <span
              className={`${
                isOnline ? "text-green-500" : "text-gray-800"
              } text-sm`}
            >
              {isOnline ? "Online" : "Oflline"}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <IoArrowBackOutline
            size={30}
            className=" text-black mr-3 cursor-pointer hover:text-blue-500"
            onClick={() => setSelectedConversation(null)}
          />
        </div>
      </header>
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
