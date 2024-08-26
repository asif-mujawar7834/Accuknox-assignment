import { FaAngleRight, FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { width } = useScreenSize();

  useEffect(() => {
    setIsSearchOpen(false);
  }, [width < 1024]);

  return (
    <div className="bg-white sticky top-0 z-20">
      <div className="p-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>Home</span>
          <FaAngleRight />
          <span className="text-blue-500 font-semibold">Dashboard v2</span>
        </div>
        <div
          className={`${
            isSearchOpen
              ? "absolute left-3 right-3 flex items-center gap-1"
              : "hidden lg:flex flex-1 max-w-[500px]"
          } bg-white`}
        >
          <div className="flex flex-1 gap-2 items-center bg-[#f0f5fa] rounded-md py-2 px-4">
            <FaSearch className="text-gray-500" />
            <input
              placeholder="search anything here..."
              className="w-full bg-transparent outline-none"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="block lg:hidden"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-gray-500">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden border border-gray-300 flex items-center gap-2 p-2 bg-white rounded-md duration-300 hover:bg-blue-500 hover:text-white"
          >
            <FaSearch />
          </button>
          <button className="border border-gray-300 flex items-center gap-2 p-2 bg-white rounded-md duration-300 hover:bg-blue-500 hover:text-white">
            <FaBell />
          </button>
          <button className="border border-gray-300 flex items-center gap-2 p-2 bg-white rounded-md duration-300 hover:bg-blue-500 hover:text-white">
            <BsFillPersonFill />
          </button>
        </div>
      </div>
    </div>
  );
};
