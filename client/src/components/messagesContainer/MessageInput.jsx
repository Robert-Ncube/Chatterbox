import React from "react";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <div className="bg-slate-600 h-16">
      <form className="w-full h-full flex">
        <input
          type="text"
          className="h-full w-full px-3 py-2 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="h-full w-[6rem] md:w-[12rem] bg-white text-blue-500 text-center flex items-center justify-center hover:text-green-500 focus:outline-none"
        >
          <IoSend size={30} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
