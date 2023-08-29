import React from "react";
import bgImage from "assets/images/stock-lap.jpg";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

function GetFundDashboard() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "../pages/authentication/sign-in",
          label: "Sign in",
          color: "default",
        }}
        transparent
        light
      />
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
          <p className="fund-text">UPTO 1000000</p>
          <Link to="/dashboard/practice">
            <button className="fund-button">Start Trading</button>
          </Link>
        </div>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default GetFundDashboard;
