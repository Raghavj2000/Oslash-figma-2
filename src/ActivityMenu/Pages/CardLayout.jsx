import React from "react";

import Cardmenu1 from "../../Components/Card1/Cardmenu1";
import Cardmenu2 from "../../Components/Card2/Cardmenu2";
import Cardmenu3 from "../../Components/Card3/Cardmenu3";
import Cardmenu4 from "../../Components/Card4/Cardmenu4";

const CardLayout = () => {
  return (
    <div className="px-16 white">
      <div className="font-semibold text-sm  ">
        <p>New shortcut created</p>
      </div>
      <Cardmenu1 />
      <div className="pt-10 font-semibold text-sm ">
        <p>New members added</p>
      </div>
      <Cardmenu2 />
      <div className="pt-10 font-semibold text-sm">
        <p>New snippet created</p>
      </div>
      <Cardmenu3 />
      <div className="pt-10 font-semibold text-sm">
        <p>Top shortcuts today</p>
      </div>
      <Cardmenu1 />
      <Cardmenu3 />
      <Cardmenu1 />
      <Cardmenu4 />
    </div>
  );
};

export default CardLayout;
