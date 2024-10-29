import React, { useRef, useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages", messages);
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex flex-col gap-2 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <div className="my-auto text-center text-gray-300 text-lg bg-slate-500 p-2 bg-opacity-30 rounded-lg md:w-fit mx-auto">
          No chats yet. Send a message to start a conversation.
        </div>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((msg, idx) => (
          <div key={idx} ref={lastMessage}>
            <Message message={msg} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
