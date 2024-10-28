import React from "react";
import Search from "./Search";
import Contacts from "./Contacts";
import { BiLogOut } from "react-icons/bi";
import NoPrevConversations from "./NoPrevConversations";

const Sidebarr = () => {
  const preConvos = false;
  return (
    <div className="bg-slate-400 p-2 px-2 flex flex-col border-r-4 border-slate-500">
      <Search />
      <hr className="my-4" />
      {preConvos ? <Contacts /> : <NoPrevConversations />}
      <div className="flex flex-1 items-end justify-start ">
        <BiLogOut
          size={42}
          className="cursor-pointer hover:bg-slate-50 rounded-lg hover:text-blue-500"
        />
      </div>
    </div>
  );
};

export default Sidebarr;
