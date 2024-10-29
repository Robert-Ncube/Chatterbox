import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetContacts from "../../hooks/useGetContacts";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { contacts } = useGetContacts();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters long.");
      return;
    }

    const filteredContacts = contacts.find(
      (contact) =>
        contact.username.toLowerCase().includes(search.toLowerCase()) ||
        contact.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredContacts) {
      setSelectedConversation(filteredContacts);
      setSearch("");
    } else {
      toast.error("No contacts found with that name.");
      setSearch("");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex items-center py-1 pb-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search..."
          className="input input-bordered rounded-full"
        />
        <button type="submit" className="btn btn-circle bg-blue-500 text-white">
          <IoMdSearch size={28} />
        </button>
      </form>
    </div>
  );
};

export default Search;
