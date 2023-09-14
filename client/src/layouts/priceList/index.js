import React from "react";
import "./cardMain.scss";

// Importing the component
import CardContainer from "./CardContainer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

const PriceList = () => {
  return (
    <DashboardLayout>
      <div className="container-1200">
        <CardContainer />
      </div>
    </DashboardLayout>
  );
};

export default PriceList;
