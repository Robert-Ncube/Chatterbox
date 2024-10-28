import React, { useState } from "react";
import MessageContainer from "../../components/messagesContainer/MessageContainer";
import Sidebarr from "../../components/sidebarr/Sidebarr";
import NoChatSelected from "../../components/messagesContainer/NoChatSelected";

const Home = () => {
  const [chats, setChats] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-500 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
      <Sidebarr />
      {chats ? <MessageContainer /> : <NoChatSelected />}
    </div>
  );
};

export default Home;
