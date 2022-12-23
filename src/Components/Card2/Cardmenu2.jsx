import React from "react";
import Card2 from "./Card2";

const body2 = [
  {
    index: 1,
    name: "Salman Ahmed",
    email: "salman@oslash.com",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8  rounded-full"
      />
    ),
  },
  {
    index: 2,
    name: "Adarsh",
    email: "adarsh@oslash.com",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8  rounded-full"
      />
    ),
  },
  {
    index: 3,
    name: "Suhail Kani",
    email: "suhail@oslash.com",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-8 h-8  rounded-full"
      />
    ),
  },
];

const Cardmenu2 = () => {
  return body2.map((item) => {
    return <Card2 name={item.name} logo={item.logo} email={item.email} />;
  });
};

export default Cardmenu2;
