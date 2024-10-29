import React from "react";
import Contact from "./Contact";
import useGetContacts from "../../hooks/useGetContacts";

const Contacts = () => {
  const { loading, contacts } = useGetContacts();
  console.log("contacts:", contacts);

  return (
    <div className="py-2 flex flex-col gap-2 overflow-auto">
      {loading && <span className="loading loading-spinner mx-auto"></span>}
      {contacts.map((contact) => (
        <Contact key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
