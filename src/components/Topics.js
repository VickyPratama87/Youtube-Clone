import React from "react";

const TopicBtn = ({ topic }) => {
  return (
    <>
      <div className="bg-gray-200 rounded-[.5rem] hover:bg-gray-300 hover:text-white duration-200 cursor-pointer">
        <p className="py-1 px-3 text-[14px]">{topic}</p>
      </div>
    </>
  );
};

export default TopicBtn;
