import React from "react";
import profile from "../assets/profile/profile.jpg";
import profile1 from "../assets/profile/profile1.jpg";
import profile2 from "../assets/profile/profile2.jpg";
import profile3 from "../assets/profile/profile3.jpg";
import profile4 from "../assets/profile/profile4.jpg";
import profile5 from "../assets/profile/profile5.jpg";
import profile6 from "../assets/profile/profile6.jpg";
import profile7 from "../assets/profile/profile7.jpg";
import profile8 from "../assets/profile/profile8.jpg";
import profile9 from "../assets/profile/profile9.jpg";
import profile10 from "../assets/profile/profile10.jpg";
import profile11 from "../assets/profile/profile11.jpg";
import thumbnail from "../assets/thumbnail/thumbnail.jpg";
import thumbnail1 from "../assets/thumbnail/thumbnail1.jpg";
import thumbnail2 from "../assets/thumbnail/thumbnail2.jpg";
import thumbnail3 from "../assets/thumbnail/thumbnail3.jpg";
import thumbnail4 from "../assets/thumbnail/thumbnail4.jpg";
import thumbnail5 from "../assets/thumbnail/thumbnail5.jpg";
import thumbnail6 from "../assets/thumbnail/thumbnail6.jpg";
import thumbnail7 from "../assets/thumbnail/thumbnail7.jpg";
import thumbnail8 from "../assets/thumbnail/thumbnail8.jpg";
import thumbnail9 from "../assets/thumbnail/thumbnail9.jpg";
import thumbnail10 from "../assets/thumbnail/thumbnail10.jpg";
import thumbnail11 from "../assets/thumbnail/thumbnail11.jpg";
import ContentCard from "./ContentCard";

const Content = () => {
  const videos = [
    {
      photo: thumbnail,
      title: "Tutorial Website Menggunakan React JS",
      profile: profile,
      channel: "Web Programming Unpas",
      viewer: "20M views",
      time: "5 hours ago",
    },
    {
      photo: thumbnail1,
      title: "Algoritma dalam Pemrograman",
      profile: profile1,
      channel: "Programmer Zaman Now",
      viewer: "33.5K views",
      time: "1 year ago",
    },
    {
      photo: thumbnail2,
      title: "Variabel dan Tipe Data",
      profile: profile2,
      channel: "Dea Afrizal",
      viewer: "374K views",
      time: "4 weeks ago",
    },
    {
      photo: thumbnail3,
      title: "Perbedaan Var, Let dan Const",
      profile: profile3,
      channel: "Ngoding Pintar",
      viewer: "180K views",
      time: "17 hours ago",
    },
    {
      photo: thumbnail4,
      title: "Tips Belajar Programming",
      profile: profile4,
      channel: "Web Programming Unpas",
      viewer: "15K views",
      time: "27 minutes ago",
    },
    {
      photo: thumbnail5,
      title: "Panduan Front-End Web Developer Tahun 2023",
      profile: profile5,
      channel: "Sekolah Koding",
      viewer: "12M views",
      time: "5 months ago",
    },
    {
      photo: thumbnail6,
      title: "Fitur Terbaru di Node JS",
      profile: profile6,
      channel: "Pintaar",
      viewer: "5.3K views",
      time: "4 year ago",
    },
    {
      photo: thumbnail7,
      title: "Ngoding Bareng Full JavaScript",
      profile: profile7,
      channel: "Programming Nusantara",
      viewer: "512 views",
      time: "7 days ago",
    },
    {
      photo: thumbnail8,
      title: "Tools dan Website Pendukung untuk Web Developer",
      profile: profile8,
      channel: "Ipung Dev",
      viewer: "452K views",
      time: "3 months ago",
    },
    {
      photo: thumbnail9,
      title: "Tutorial OOP JavaScript",
      profile: profile9,
      channel: "Coder Media",
      viewer: "97K views",
      time: "17 days ago",
    },
    {
      photo: thumbnail10,
      title: "Belajar Node JS dan Express JS",
      profile: profile10,
      channel: "Programming Di Rumahrafif",
      viewer: "23K views",
      time: "35 minutes ago",
    },
    {
      photo: thumbnail11,
      title: "Mengenal DOM pada JavaScript",
      profile: profile11,
      channel: "Goose Dev",
      viewer: "315 views",
      time: "3 weeks ago",
    },
  ];

  return (
    <>
      <div className="px-1 pt-56 sm:pt-52 md:pt-48 lg:pt-[150px] pb-4 gap-4 gap-y-14 sm:px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <ContentCard photo={video.photo} title={video.title} profile={video.profile} channel={video.channel} viewer={video.viewer} time={video.time} />
        ))}
      </div>
    </>
  );
};

export default Content;
