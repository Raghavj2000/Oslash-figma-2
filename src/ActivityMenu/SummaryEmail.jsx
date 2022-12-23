import React from "react";
import CardLayout from "./Pages/CardLayout";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import { data } from "../data";

const SummaryEmail = ({ data }) => {
  return (
    <div className="App ">
      <Header />
      <CardLayout data={data} />
      <Footer />
    </div>
  );
};

export default SummaryEmail;
