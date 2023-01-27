import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ShortsCard = ({ photo, title, viewer }) => {
  return (
    <>
      <div className="w-full">
        <div className="shadow-lg shadow-gray-300 rounded-[.7rem] overflow-hidden">
          <img src={photo} alt="" className="object-cover rounded-[.7rem] hover:scale-110 duration-200 cursor-pointer ease-out" />
        </div>
        <div className="flex items-center justify-between">
          <p className="pt-1 text-[14px] font-semibold flex">{title}</p>
          <BsThreeDotsVertical className="pt-1" />
        </div>
        <p className="text-[13px] pt-[2px] text-gray-500">{viewer}</p>
      </div>
    </>
  );
};

export default ShortsCard;
