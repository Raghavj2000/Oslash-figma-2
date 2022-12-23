import React from "react";
import Card1 from "./Card1";

const body = [
  {
    index: 1,
    shorcutname: "o/product",
    url: "https://www.google.com/",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8 top-[-2px] relative rounded-full"
      />
    ),
    shortcutdesc: "Product description",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
    personname: "Salman",
  },
  {
    index: 2,
    shorcutname: "o/roadmap",
    url: "https://www.google.com/",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8 top-[-2px] relative rounded-full"
      />
    ),
    shortcutdesc: "Product/product/group/lol",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
    personname: "Salman",
  },
  {
    index: 3,
    shorcutname: "o/drive",
    url: "https://www.google.com/",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8 top-[-2px] relative rounded-full"
      />
    ),
    shortcutdesc: "Google Drive Folder",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
    personname: "Salman",
  },
];

const Cardmenu1 = () => {
  return body.map((item) => {
    return (
      <Card1
        shortcutname={item.shorcutname}
        shortcutdesc={item.shortcutdesc}
        logo={item.logo}
        url={item.url}
        avatar={item.avatar}
        personname={item.personname}
      />
    );
  });
};

export default Cardmenu1;
