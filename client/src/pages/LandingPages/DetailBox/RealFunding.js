import React, { useRef } from "react";
import fundingImagebg from "../../../assets/newImages/fundingBgImg.jpg";
import affordableSecImg from "../../../assets/newImages/Investment data-rafiki.png";
import { motion, useScroll, useTransform } from "framer-motion";

function RealFunding() {
        
    const myref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: myref,
        offset: ["0 1", "1.11 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="bg-white flex justify-center p-4">
        <motion.div ref={myref}
      style={{ scale: scaleProgress, opacity: opacityProgress }} className=" bg-white max-w-[85rem] lpx-4 py-10 sm:px-6  lg:py-14">
            <div className="grid sm:grid-cols-2  bg-orange-50 sm:items-center shadow-md gap-8 rounded-xl   p-4 lg:p-16">
                <div className="sm:order-2">
                <div className="relative pt-[50%] sm:pt-[100%] rounded-lg bg-blue-500">
                    <img
                    className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                    src={fundingImagebg}
                    alt="Image Description"
                    />
                </div>
                </div>

                <div className="sm:order-1">
                <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Business insight
                </p>

                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-900">
                    <a className="text-black" href="#">
                    Real Funding
                    </a>
                </h2>

                <ul className="lg:mt-8 text-md lg:text-2xl text-gray-500 sm:text-base ">
                    <li className="mt-4  pb-4 text-md lg:text-2xl max-w-1/2 wrap ">
                    Showcase your virtual trading skills to secure up to{" "}
                    <span className="text-blue-400"> 5 lakhs </span> for real market investments.
                    <br />
                    </li>
                    {/* <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                    Regardless of your situation, we're here to help you learn and grow in the
                    <span classNameName="text-orange-400"> TRADING WORLD.</span>
                    </li> */}
                    <li className="mt-4 text-md lg:text-2xl pb-4">
                    Celebrate your success with a prestigious FinstoX certificate, a symbol of your
                    trading prowess.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-900">
                    <a className="text-black" href="#">
                    Expert Guidance
                    </a>
                </h2>

                <ul className="lg:mt-8 text-md lg:text-2xl text-gray-500 sm:text-base ">
                    <li className="mt-4  pb-4 text-md lg:text-2xl max-w-1/2 wrap ">
                    Elevate your trading with{" "}
                    <span className="text-blue-400"> personalized mentorships </span> by experienced
                    traders.
                    <br />
                    </li>
                    {/* <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                    Regardless of your situation, we're here to help you learn and grow in the
                    <span classNameName="text-orange-400"> TRADING WORLD.</span>
                    </li> */}
                    <li className="mt-4 text-md lg:text-2xl pb-4">
                    We believe in analyzing mistakes to help you grow.
                    </li>
                </ul>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default RealFunding