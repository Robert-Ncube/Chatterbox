import React from "react";
import { RiContactsBookFill } from "react-icons/ri";

const NoPrevConversations = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
      <RiContactsBookFill className="w-56 text-5xl text-slate-300" />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-300 lilita">
        No previous conversations
      </h1>
      <p className="text-gray-50">You haven't started any conversations yet.</p>
    </div>
  );
};

export default NoPrevConversations;
