import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import CardLayout from "./ActivityMenu/Pages/CardLayout";
import Header from "./ActivityMenu/Pages/Header";
import Footer from "./ActivityMenu/Pages/Footer";
import { data } from "./data";

import SummaryEmail from "./ActivityMenu/SummaryEmail";
import ActivityCard from "./ActivityMenu2/Components/ActivityCard";
import Cardlayout2 from "./ActivityMenu2/Pages/Cardlayout2";

function App() {
  // return <SummaryEmail data={data} />

  return (
    <div className="font-display">
      <Cardlayout2 />
    </div>
  );
}

export default App;
