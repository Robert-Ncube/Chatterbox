import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="">
      <form className="flex items-center py-1 pb-2">
        <input
          type="text"
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
