import React from "react";

const Card4 = ({
  shortcutname,
  url,
  logo,
  shortcutdesc,
  avatar,
  personname,
}) => {
  return (
    <div className="flex pt-4 bg-white  pb-4">
      {logo}
      <div className="">
        <a
          onClick={(e) => e.stopPropagation()}
          href={url}
          className=" flex py-1 items-center gap-1 font-medium text-sm hover:underline "
        >
          <span className="text-indigo-500">{shortcutname}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>

        <p className="text-xs text-gray-400 bg-gray-50 p-1 ">{shortcutdesc}</p>

        <ul className="flex text-gray-500 gap-[5px] items-center font-display pt-1 text-xs">
          <li>
            <p>-by</p>
          </li>
          <li>{avatar}</li>
          <li>{personname}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card4;
