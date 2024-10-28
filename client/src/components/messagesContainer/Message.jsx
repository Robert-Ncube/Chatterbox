import React from "react";

const Message = () => {
  return (
    <div className="chat chat-start p-2">
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=podza"
            alt="User Avatar"
          />
        </div>
      </div>
      <div className="chat-text">
        <div className="chat-bubble text-white bg-blue-500">
          <p>Hello, how are you today?</p>
        </div>
        <div className="chat-time text-gray-50">11:00 AM</div>
      </div>
    </div>
  );
};

export default Message;
