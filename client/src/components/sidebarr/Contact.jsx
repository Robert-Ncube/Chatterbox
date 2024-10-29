import React from "react";
import useConversation from "../../zustand/useConversation";

const Contact = ({ contact }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === contact._id;

  return (
    <div className="">
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded-lg p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(contact)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={contact.profilePic} alt="User Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-800">{contact.username}</p>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default Contact;
