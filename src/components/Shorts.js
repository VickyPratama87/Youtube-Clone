import React from "react";
import thumbnail from "../assets/shorts/thumbnail.jpg";
import thumbnail1 from "../assets/shorts/thumbnail1.jpg";
import thumbnail2 from "../assets/shorts/thumbnail2.jpg";
import thumbnail3 from "../assets/shorts/thumbnail3.jpg";
import thumbnail4 from "../assets/shorts/thumbnail4.jpg";
import thumbnail5 from "../assets/shorts/thumbnail5.jpg";
import ShortsCard from "./ShortsCard";

const Shorts = () => {
  const videos = [
    {
      photo: thumbnail,
      title: "Ngoding With Ipad",
      viewer: "23K views",
    },
    {
      photo: thumbnail1,
      title: "Setup Youtuber",
      viewer: "2K views",
    },
    {
      photo: thumbnail2,
      title: "Macbook Retina",
      viewer: "12M views",
    },
    {
      photo: thumbnail3,
      title: "Setup Minimalis",
      viewer: "357 views",
    },
    {
      photo: thumbnail4,
      title: "Setup Aesthetic",
      viewer: "15M views",
    },
    {
      photo: thumbnail5,
      title: "Setup Programmer",
      viewer: "157 views",
    },
  ];

  return (
    <>
      <div className="px-1 py-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:px-4 lg:px-8 ">
        {videos.map((video) => (
          <ShortsCard photo={video.photo} title={video.title} viewer={video.viewer} />
        ))}
      </div>
    </>
  );
};

export default Shorts;
