import React from "react";
import TopicBtn from "./TopicBtn";

const Topics = () => {
  const topics = ["Bootstrap", "CSS", "HTML", "JavaScript", "Laravel", "Node JS", "Python", "React JS", "React Native", "Tailwind CSS"];

  return (
    <div className="flex flex-wrap items-center gap-3 px-4 pt-20 pb-4 w-full bg-white lg:px-8 whitespace-nowrap font-semibold fixed z-40">
      {topics.map((topic) => (
        <TopicBtn topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
