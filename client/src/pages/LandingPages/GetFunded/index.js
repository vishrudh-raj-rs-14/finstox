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
      <div className="flex flex-row m-auto">
        {/* <div>
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
                class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
                class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
                alt=""
              />
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
          <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </div> */}
        <MKBox
          minHeight="80vh"
          width="100%"
          sx={{
            // backgroundImage: `url(${bgImage})`,
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
      </div>
        <MKBox mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
    </>
  );
}

export default GetFundDashboard;
