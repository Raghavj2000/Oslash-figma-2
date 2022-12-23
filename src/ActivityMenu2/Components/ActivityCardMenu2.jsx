import React from "react";
import ActivityCard from "./ActivityCard";

const card1 = [
  {
    fname: "Eduardo Benz",
    days: "6d ago",
    description:
      "Loream ipsum Loream ipsum Loream ipsum Loream ipsum Loream ipsum Loream ipsum Loream ipsum  ",
    sname: "Hilary Mahy",
    tname: "Kristen Watson",
  },
];
const ActivityCardMenu2 = () => {
  return card1.map((item) => {
    return (
      <ActivityCard
        fname={item.fname}
        days={item.days}
        description={item.description}
        sname={item.sname}
        tname={item.tname}
      />
    );
  });
};

export default ActivityCardMenu2;
