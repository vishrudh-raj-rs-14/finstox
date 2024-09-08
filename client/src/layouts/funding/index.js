import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file

import MKTypography from "components/MKTypography";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import getFundedImg from "../../assets/newImages/stockbgImg.jpg";

function FundDashboard() {
  const CardComponent = ({ title, content }) => (
    <Card>
      <CardContent>
        <MKTypography>{title}</MKTypography>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
  CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  const [totalScore, setTotalScore] = useState(0);
  console.log(totalScore);
  const fetchTotalScore = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("process.env.REACT_APP_BACKEND_URL/getScore", {
        email: storedUserEmail,
      });
      setTotalScore(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };
  useEffect(() => {
    fetchTotalScore();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <section className="">
        <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="max-w-2xl p-10 mx-auto z-10 relative text-center">
            <div>
              <p className="mt-8 text-5xl font-medium tracking-tighter text-black">
                Get Funded: <span className="text-blue-600">Qualify now</span> and get funded upto
                ₹10000
              </p>
              <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
                Start your journey now
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row">
              <Link
                to="#"
                className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                Get Funded
              </Link>
            </div>
          </div>
        </div>

        <div className="relative items-center w-full z-0 mt-[-16rem] px-5 pb-12 mx-auto  md:px-12  max-w-7xl">
          <img className="w-full bg-gray-300 rounded-xl" src={getFundedImg} alt="" />
        </div>
      </section>

      <p className="mx-[12rem] sm:8 flex  text-5xl font-medium tracking-tighter text-black">
        Your Finstox Score: <span className="text-blue-600"> {totalScore}</span>
      </p>

      <MDBox>
        <div>
          <section className=" text-gray-800">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
                    <h3 className="text-3xl font-semibold">Score</h3>
                    {/* <span className="text-sm font-bold tracki uppercase text-gray-600">Vestibulum diam nunc</span> */}
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                      <h3 className="text-xl font-semibold tracki">Initial Score </h3>
                      <time className="text-xs tracki uppercase text-gray-600"></time>
                      {/* <p className="mt-3">Give some desc</p> */}
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                      <h3 className="text-xl font-semibold tracki">Level 1</h3>
                      <time className="text-xs tracki uppercase text-gray-600">Win upto 500</time>
                      {/* <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p> */}
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                      <h3 className="text-xl font-semibold tracki">Level 2</h3>
                      <time className="text-xs tracki uppercase text-gray-600">Win upto 1000</time>
                      {/* <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p> */}
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                      <h3 className="text-xl font-semibold tracki">Level 3</h3>
                      <time className="text-xs tracki uppercase text-gray-600">Win upto 5000</time>
                      {/* <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p> */}
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                      <h3 className="text-xl font-semibold tracki">Level 4</h3>
                      <time className="text-xs tracki uppercase text-gray-600">Win upto 10000</time>
                      {/* <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default FundDashboard;
