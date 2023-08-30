import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
import bgImage from "assets/images/stock-lap.jpg";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file

function FundDashboard() {
  return (
    <DashboardLayout>
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div className="fund-dashboard-container">
          <p className="fund-text">QUALIFY NOW</p>
          <p className="fund-text">AND GET FUNDED</p>
          <p className="fund-text">UPTO ₹1000000</p>
          <Link to="/dashboard/practice">
            <button className="fund-button">Start Trading</button>
          </Link>
        </div>
      </MKBox>
    </DashboardLayout>
  );
}

export default FundDashboard;
