"use client";
import { banner } from "@/data/myInfo";
import MenuBar from "../MenuBar/MenuBar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header
      className={`relative md:flex justify-between items-center p-5 bg-[#1c1c1c] rounded-[40px] shadow-[0_-1px_0px_0px_#777] w-11/12 max-w-7xl mt-8 mx-auto transition-all ${
        !isNavShown ? "rounded-full" : "rounded-[40px]"
      }`}
    >
      <h1 className="text-xl font-bold uppercase">{banner.brand}</h1>
      <MenuBar className={`md:space-x-4 ${!isNavShown && "hidden md:flex"}`} />
      {!isNavShown ? (
        <button
          onClick={() => setIsNavShown(true)}
          className="absolute hover:text-gray-400 right-8 top-6"
        >
          <FaBars />
        </button>
      ) : (
        <button
          onClick={() => setIsNavShown(false)}
          className="absolute right-7 top-5"
        >
          <FaTimes />
        </button>
      )}
    </header>
  );
};

export default Navbar;
