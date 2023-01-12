import React from "react";
import { SlHome } from "react-icons/sl";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineVideoLibrary, MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import SideBtn from "./SideBtn";

const Sidebar = () => {
  const sideItems = [
    {
      name: "Home",
      icon: <SlHome />,
    },
    {
      name: "Mini",
      icon: <HiOutlineVideoCamera />,
    },
    {
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
    {
      name: "Library",
      icon: <MdOutlineVideoLibrary />,
    },
    {
      name: "History",
      icon: <RiHistoryFill />,
    },
    {
      name: "Your videos",
      icon: <AiOutlinePlaySquare />,
    },
    {
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      name: "Liked videos",
      icon: <BiLike />,
    },
  ];

  return (
    <div className="hidden flex-col items-center gap-2 pt-20 px-1 md:flex lg:px-5">
      {sideItems.map((item) => (
        <SideBtn name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default Sidebar;
