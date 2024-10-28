import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=podza"
              alt="User Avatar"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-900 font-bold">John Doe</span>
          <span className="text-green-500 text-sm">Online</span>
        </div>
      </header>
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
