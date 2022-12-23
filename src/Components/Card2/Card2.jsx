import React from "react";

const Card2 = ({ name, logo, email }) => {
  return (
    <div className="flex items-center pt-4 bg-white border-b-2 pb-4">
      {logo}

      <div className="">
        <p className="text-sm">{name}</p>
        <p className="text-xs text-gray-400">{email}</p>
      </div>
    </div>
  );
};

export default Card2;
