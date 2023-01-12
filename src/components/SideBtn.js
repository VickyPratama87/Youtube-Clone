import React from "react";

const SideBtn = ({ name, icon }) => {
  return (
    <div className="w-full flex flex-col items-center py-1 lg:gap-5 md:p-3 lg:flex-row hover:bg-gray-300 duration-100 ease-out cursor-pointer rounded-[.5rem]">
      <div className="text-[20px] lg:text-[22px]">{icon}</div>
      <p className="text-[11px] lg:text-[14px] font-semibold">{name}</p>
    </div>
  );
};

export default SideBtn;
