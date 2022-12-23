import React from "react";
import Card1 from "./Card1";
import { body } from "../../data";

const Cardmenu1 = ({ data }) => {
  return (
    <div>
      {data.body.map((item) => {
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
      })}
    </div>
  );
};

export default Cardmenu1;
