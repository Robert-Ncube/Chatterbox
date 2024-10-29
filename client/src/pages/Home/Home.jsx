import React, { useEffect, useState } from "react";
import MessageContainer from "../../components/messagesContainer/MessageContainer";
import Sidebarr from "../../components/sidebarr/Sidebarr";
import NoChatSelected from "../../components/messagesContainer/NoChatSelected";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  //cleanup function
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-500 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
      <Sidebarr />
      {selectedConversation ? <MessageContainer /> : <NoChatSelected />}
    </div>
  );
};

export default Home;
