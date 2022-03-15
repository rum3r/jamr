import React from "react";

const Searchbar = () => {
  return (
    <div>
      <input
        className="placeholder:text-grey-400 bg-white hidden sm:block sm:w-52 md:w-80 lg:w-144 h-10 border 
          border-grey-500 rounded-md pl-9 pr-3 focus:outline-none focus:ring-black 
          focus:ring-1 sm:text-sm text-md"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </div>
  );
};

export default Searchbar;
