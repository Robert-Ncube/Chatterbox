import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { ExtractTime } from "../../utils/ExtractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const FormattedTime = ExtractTime(message.createdAt);

  const fromMe = message.sender === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`p-2 chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <img src={profilePic} alt="User Avatar" />
        </div>
      </div>
      <div className="chat-text">
        <div className={`chat-bubble text-white ${bubbleColor} ${shakeClass}`}>
          <p>{message.message}</p>
        </div>
        <div className="chat-time text-gray-50">{FormattedTime}</div>
      </div>
    </div>
  );
};

export default Message;
