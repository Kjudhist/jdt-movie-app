// import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-[#181f3a] text-white px-8 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold tracking-wide text-teal-400">JD-21</div>
      <nav className="flex gap-8 text-lg font-medium">
        <a href="/" className="text-white border-b-2 border-teal-400 pb-1">Home</a>
        {/* <a href="/tv" className="text-gray-300 hover:text-white transition">TV Shows</a> */}
        {/* <a href="/movies" className="text-gray-300 hover:text-white transition">Movies</a> */}
        {/* <a href="/upcoming" className="text-gray-300 hover:text-white transition">Try me beyonce</a> */}
      </nav>
      <div>
        <button className="text-gray-300 hover:text-teal-400 transition text-2xl">
          <FiSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;