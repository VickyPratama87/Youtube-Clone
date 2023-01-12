import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";
import logo from "../assets/logo-youtube.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3 md:px-9 lg:px-8 fixed w-full bg-white border-b border-gray-300 z-50">
      {/* Left Side */}
      <div className="flex items-center shrink-0">
        <FiMenu className="w-6 h-6 cursor-pointer" />
        <div className="pl-4">
          <img src={logo} alt="" className="w-20 cursor-pointer" />
        </div>
      </div>

      {/* Middle */}
      <div className="flex w-full justify-center">
        <div className="relative hidden items-center sm:flex w-full max-w-[35rem] mx-4">
          <input type="search" placeholder="Search..." className="w-full pl-4 py-2 outline-1 rounded-full bg-slate-200 " />
          <div className="absolute right-4">
            <AiOutlineSearch className="" />
          </div>
        </div>
        <div className="flex items-center">
          <BsMic className="w-6 h-6 invisible md:visible sm:collapse hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Right */}
      <div className="flex h-full items-center gap-5">
        <AiOutlineSearch className="h-6 w-6 sm:hidden cursor-pointer" />
        <BiVideoPlus className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
        <VscBellDot className="w-6 h-6 hover:text-red-600 cursor-pointer" />
        <div className="flex items-center p-1.5 border border-blue-500 text-blue-500 rounded-[.5rem] hover:text-white hover:bg-blue-500 duration-200 cursor-pointer">
          <CgProfile className="w-6 h-6 ml-2 mr-1.5" />
          <p className="font-semibold mr-2 whitespace-nowrap">Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
