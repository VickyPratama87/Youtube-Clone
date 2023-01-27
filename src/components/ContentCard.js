import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const ContentCard = ({ photo, title, profile, channel, viewer, time }) => {
  return (
    <>
      <div className="mx-12 sm:mx-0">
        {/* Thumbnail */}
        <div className="flex h-48 justify-center shadow-lg shadow-gray-300 rounded-[.7rem] md:h-32 overflow-hidden">
          <img src={photo} alt="" className="w-full h-full object-cover rounded-[.7rem] md:h-32 hover:scale-110 duration-200 cursor-pointer ease-out" />
        </div>

        {/* Description */}
        <div className="flex pt-3">
          <div className="w-9 h-9 shrink-0">
            <img src={profile} alt="" title={channel} className="rounded-full w-9 h-9 hover:scale-125 duration-100 cursor-pointer" />
          </div>

          {/* Info */}
          <div className="pl-2">
            <div className="flex flex-wrap overflow-hidden ">
              <p className="text-[14px] font-semibold flex">{title}</p>
            </div>
            <div className="flex items-center text-gray-500">
              <p className="text-[13px] pt-[2px] mr-1">{channel}</p>
              <HiCheckCircle />
            </div>
            <p className="text-[12px] text-gray-500 pt-[1px] pr-1">
              {viewer} &#x2022; {time}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
