import React from "react";
import bgImage from "assets/images/stock-lap.jpg";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import whiteLogo from "../../../assets/logo/whitebgLogo.jpg"

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
        {/* <MKBox
          minHeight="100vh"
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
          }}
        >
          <div className="fund-dashboard-container">
            <p className="fund-text text-yellow-400">QUALIFY NOW</p>
            <p className="fund-text text-yellow-400">AND GET FUNDED</p>
            <p className="fund-text text-yellow-400">UPTO 1000000</p>
            <Link to="/dashboard/practice">
              <button className="fund-button">Start Trading</button>
            </Link>
          </div>
        </MKBox> */}

        <div className="flex lg:-m-10 sm:mt-36 sm:flex-row-reverse  lg:flex-row-reverse sm:w-full flex-col items-center justify-center  sm:p-36 md:p-24">
          <div className="flex lg:flex-row  flex-col max-w-7xl sm:p-4 w-full justify-around justify-space-between ">
            {/* <img
          className="w-auto h-48 lg:h-96 object-cover sm:h-64 md:h-96 lg:w-1/2 min-h-full rounded-md"
          src={generalImg1}
          alt="Affordable Access"
        /> */}
            <div className="min-w-fit">
              <div className="relative mx-auto lg:m-16 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px] ">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                  {/* <img
                    src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                    // className="dark:hidden h-[426px] md:h-[654px]"
                    className=" h-[426px] md:h-[654px]"
                    alt=""
                  /> */}
                  <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
                className="hidden dark:block h-[426px] md:h-[654px]"
                alt=""
              />
                </div>
              </div>
            </div>
            <div className="my-20 items-center flex">
              <div className="">
                <h2 className="mt-4 text-7xl lg:text-4xl text-center font-semibold sm:text-2xl md:text-3xl">
                  <span className="text-orange-400"> Get Funded</span>
                </h2>
                <div className="fund-dashboard-container">
                  <p className="text-black text-6xl mb-20 lg:text-4xl font-semibold sm:text-2xl md:text-3xl  text-center">QUALIFY NOW AND GET FUNDED UPTO 1000000</p>
              
                  <Link to="/dashboard/practice">
                    <button className="fund-button">Start Trading</button>
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MKBox>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default GetFundDashboard;
