import React from "react";
import Contact from "./Contact";

const Contacts = () => {
  return (
    <div className="py-2 flex flex-col gap-2 overflow-auto">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
};

export default Contacts;
