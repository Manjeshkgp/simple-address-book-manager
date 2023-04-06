import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="h-12 flex justify-center items-center bg-gradient-to-b from-[#0b0529] to-transparent text-gray-200">
        <div className="flex w-60 bg-gray-950 rounded group">
          <AiOutlineSearch className="w-8 h-8 group-focus-within:hidden" />
          <input
            className="focus:outline-none bg-transparent h-8 px-1"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
