import React from "react";
import logo from "../../assets/logo.png";
import { IoMdChatboxes } from "react-icons/io";

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img className="w-44 md:w-60" src={logo} alt="Logo" />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-300 lilita">
        No chat selected
      </h1>
      <p className="text-gray-50">Find a contact and start a conversation.</p>
      <IoMdChatboxes className="text-5xl text-slate-300 md:text-7xl w-16 md:w-24" />
    </div>
  );
};

export default NoChatSelected;
