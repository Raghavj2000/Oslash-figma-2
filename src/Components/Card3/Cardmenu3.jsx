import React from "react";

import Card3 from "./Card3";

const body3 = [
  {
    index: 1,
    shorcutname: "o/intro",
    url: "https://www.google.com/",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8  rounded-full"
      />
    ),
    shortcutdesc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
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
    shorcutname: "o/sales",
    url: "https://www.google.com/",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8 top-[-2px] relative rounded-full"
      />
    ),
    shortcutdesc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
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

const Cardmenu3 = () => {
  return body3.map((item) => {
    return (
      <Card3
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

export default Cardmenu3;
