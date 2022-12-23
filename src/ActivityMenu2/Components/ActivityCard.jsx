import React from "react";

const ActivityCard = ({
  fname,
  days,
  description,
  sname,
  tname,
  isbug,
  isavail,
}) => {
  return (
    <div>
      <ol className=" relative border-1 border-gray-200 ">
        <li className="pt-1">
          <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
              alt=""
              className="rounded-full"
            />
          </span>
          <div className="pl-8 bg-white">
            <div></div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default ActivityCard;
