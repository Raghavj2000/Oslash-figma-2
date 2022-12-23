import React from "react";
import { body3 } from "../../data";

import Card3 from "./Card3";

const Cardmenu3 = ({ data }) => {
  return data.body3.map((item) => {
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
