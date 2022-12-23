import React from "react";

import Cardmenu1 from "../../Components/Card1/Cardmenu1";
import Cardmenu2 from "../../Components/Card2/Cardmenu2";
import Cardmenu3 from "../../Components/Card3/Cardmenu3";
import Cardmenu4 from "../../Components/Card4/Cardmenu4";

const CardLayout = ({ data }) => {
  return (
    <div className="px-16 white">
      <div className="font-semibold text-sm  ">
        <p>New shortcut created</p>
      </div>
      <Cardmenu1 data={data} />
      <div className="pt-10 font-semibold text-sm ">
        <p>New members added</p>
      </div>
      <Cardmenu2 data={data} />
      <div className="pt-10 font-semibold text-sm">
        <p>New snippet created</p>
      </div>
      <Cardmenu3 data={data} />
      <div className="pt-10 font-semibold text-sm">
        <p>Top shortcuts today</p>
      </div>
      <Cardmenu1 data={data} />
      <Cardmenu3 data={data} />
      <Cardmenu1 data={data} />
      <Cardmenu4 data={data} />
    </div>
  );
};

export default CardLayout;
