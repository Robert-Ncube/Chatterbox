import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      toast.error("Message cannot be empty");
      return;
    }
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="bg-slate-600 h-16">
      <form onSubmit={handleSubmit} className="w-full h-full flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-full w-full px-3 py-2 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="h-full w-[6rem] md:w-[12rem] bg-white text-blue-500 text-center flex items-center justify-center hover:text-green-500 focus:outline-none"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoSend size={30} />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
