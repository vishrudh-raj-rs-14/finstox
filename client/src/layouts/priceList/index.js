import React from "react";
import "./CardContainer.scss";
import CardItem from "./CardItem";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Pricing from "pages/LandingPages/Pricing/Pricing";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ThreeTierPricing from "pages/LandingPages/Pricing/ThreeTierPricing";

const allCardsInfo = [
  {
    level: "BASIC",
    applyGradient: "blueGradient",
    price: 39,
    //para1: "Great for Staters",
    //para2: "Discover practice in trading.",
    btnDark: false,
    tick: false,
    tick2: false,
  },
  {
    level: "MEDIUM",
    applyGradient: "purpleGradient",
    price: 179,
    //para1: "For Improving Performance",
    //para2: "Get your performance analysis.",
    btnDark: true,
    tick: true,
    tick2: false,
  },
  {
    level: "PREMIUM",
    applyGradient: "orangeGradient",
    price: 299,
    //para1: "For Professional Use",
    //para2: "Get funded on reaching milestones with FinstoX",
    btnDark: false,
    tick: true,
    tick2: true,
  },
];
//CardContainer

const PriceList = () => {



  return (
    <DashboardLayout>
      {/* <div className="card__container">
        {allCardsInfo.map((singleCard) => {
          return <CardItem objProp={singleCard} key={singleCard.level} />;
        })}
      </div> */}
      <DashboardNavbar />
      <div>
        <ThreeTierPricing />
      </div>
    </DashboardLayout>
  );
};

export default PriceList;
