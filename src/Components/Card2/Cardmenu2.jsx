import React from "react";
import Card2 from "./Card2";
import { body2 } from "../../data";

const Cardmenu2 = ({ data }) => {
  return data.body2.map((item) => {
    return <Card2 name={item.name} logo={item.logo} email={item.email} />;
  });
};

export default Cardmenu2;
