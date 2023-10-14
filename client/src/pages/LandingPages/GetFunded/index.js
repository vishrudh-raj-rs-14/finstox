import React from "react";
import bgImage from "../../../assets/newImages/Investment data-rafiki.png";

import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import whiteLogo from "../../../assets/logo/whitebgLogo.jpg";

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

      
      {/* <div className=" h-screen ">
        <section className="bg-gray-100 text-gray-800 lg:pt-32">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={bgImage}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leadi sm:text-6xl">
                Get Funded
              </h1>
              <h1 className="text-5xl font-bold mt-10 leadi sm:text-6xl">
                <span className="text-blue-600 pt-10">Qualify now  </span>and get funded upto 10000
              </h1>
              
              <div className="flex flex-col mt-10 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50"
                >
                  Start Trading
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div> */}

   
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:mb-16">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-gray-900">Get Funded <span class="text-blue-600">Qualify now</span> and get funded upto 10000</h1>
          {/* <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Build your business here. Take it anywhere.</p> */}
        </div>

        <div class="mt-10 relative max-w-5xl mx-auto">
          <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div class="absolute inset-0 w-full h-full">
            <div class="flex flex-col justify-center items-center w-full h-full">
              <a class="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                </svg>
                Get Funded
              </a>
            </div>
          </div>

          <div class="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
            <div class="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
          </div>

          <div class="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div class="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
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
