import React from "react";
import "./CardContainer.scss";
import CardItem from "./CardItem";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Pricing from "pages/LandingPages/Pricing/Pricing";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

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
        <section className="py-20 bg-gray-100 text-gray-800 border-black">
          <div className="container p-4 lg:px-32 lg:pb-16 mx-auto rounded-md border border-black border-solid border-1 ">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <span className="font-bold tracki uppercase text-blue-600">Pricing</span>
              <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
            </div>
            <div className="flex flex-wrap items-stretch -mx-4 lg:h-96 rounded-md ">
              <div className="flex  w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Basic</h4>
                    <span className="text-6xl font-bold">₹39<span className="text-sm tracki">/month</span></span>
                  </div>
                  {/* <p className="mt-3 leadi text-gray-600">
                    Etiam ac convallis enim, eget euismod dolor.
                  </p> */}
                  <ul className="flex-1 mb-6 text-gray-600">
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Practice</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-red-600"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10 -4.48 10 -10S17.52 2 12 2zm5 13.89c-.39.39-.9.39-1.29 0L12 13.47l-3.71 3.71c-.39.39-.9.39-1.29 0s-.39-.9-.39-1.29L10.71 12L7 8.29c-.39-.39-.39-.9 0-1.29.39-.39.9-.39 1.29 0L12 10.53l3.71-3.71c.39-.39.9-.39 1.29 0s.39.9.39 1.29L13.29 12L17 15.89c.39.39.39.9 0 1.29z" />
                      </svg>
                      <span>Analysis</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-red-600"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10 -4.48 10 -10S17.52 2 12 2zm5 13.89c-.39.39-.9.39-1.29 0L12 13.47l-3.71 3.71c-.39.39-.9.39-1.29 0s-.39-.9-.39-1.29L10.71 12L7 8.29c-.39-.39-.39-.9 0-1.29.39-.39.9-.39 1.29 0L12 10.53l3.71-3.71c.39-.39.9-.39 1.29 0s.39.9.39 1.29L13.29 12L17 15.89c.39.39.39.9 0 1.29z" />
                      </svg>
                      <span>Get Funded</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-blue-600 text-gray-50"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-white text-gray-800">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Medium</h4>
                    <span className="text-6xl font-bold">
                      ₹179
                      <span className="text-sm tracki">/month</span>
                    </span>
                  </div>
                  {/* <p className="leadi">Morbi cursus ut sapien sit amet consectetur.</p> */}
                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6  text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Practice</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6  text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-red-600"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10 -4.48 10 -10S17.52 2 12 2zm5 13.89c-.39.39-.9.39-1.29 0L12 13.47l-3.71 3.71c-.39.39-.9.39-1.29 0s-.39-.9-.39-1.29L10.71 12L7 8.29c-.39-.39-.39-.9 0-1.29.39-.39.9-.39 1.29 0L12 10.53l3.71-3.71c.39-.39.9-.39 1.29 0s.39.9.39 1.29L13.29 12L17 15.89c.39.39.39.9 0 1.29z" />
                      </svg>
                      <span>Get Funded</span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-blue-600 text-gray-50 "
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-white">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Premium</h4>
                    <span className="text-6xl font-bold">
                      ₹299
                      <span className="text-sm tracki">/month</span>
                    </span>
                  </div>
                  {/* <p className="leadi">Morbi cursus ut sapien sit amet consectetur.</p> */}
                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Practice</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Get Funded</span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-blue-600 text-gray-50 "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default PriceList;
