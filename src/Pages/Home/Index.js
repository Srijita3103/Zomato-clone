import React, { useState } from "react";
import Header from "../../Components/Common/Header/Index";
import TabOptions from "../../Components/Common/Tab Options/Index";
import Footer from "../../Components/Common/Footer/Index";
import Delivery from "../../Components/Delivery/Index";
import DiningOut from "../../Components/Dining Out/Index";
import Nightlife from "../../Components/Nightlife/Index";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Dining Out");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
