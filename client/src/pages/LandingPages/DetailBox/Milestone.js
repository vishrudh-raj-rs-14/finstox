import React, { useRef } from "react";
import fundingImagebg from "../../../assets/newImages/fundingBgImg.jpg";
import lastSecImg from "../../../assets/newImages/milestone.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

function Milestone() {
  const myref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: myref,
    offset: ["0 1", "1.11 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="bg-white flex justify-center p-4">
      <motion.div
        ref={myref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className=" bg-white max-w-[85rem] lpx-4 py-10 sm:px-6  lg:py-14"
      >
        <div className="grid sm:grid-cols-2  bg-green-50 sm:items-center shadow-md gap-8 rounded-xl p-4 lg:p-16">
          <div className="sm:order-2 ">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg bg-blue-500">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src={lastSecImg}
                alt="Image Description"
              />
            </div>
          </div>

          <div className="sm:order-1">
            {/* <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                Business insight
              </p> */}

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-white">
              <a className="text-black" href="#">
                Milestone Celebrations
              </a>
            </h2>

            <ul className="lg:mt-8 text-md lg:text-2xl text-gray-500 sm:text-base ">
              <li className="mt-4  pb-4 text-md lg:text-2xl max-w-1/2 wrap ">
                Achieve success milestones and earn real money with us.{" "}
                <span className="text-blue-400"> real market investments. </span>
                <br />
              </li>
              {/* <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                Regardless of your situation, we're here to help you learn and grow in the
                <span classNameName="text-orange-400"> TRADING WORLD.</span>
                </li> */}
              <li className="mt-4 text-md lg:text-2xl pb-4">
                We celebrate every victory, big or small, on your trading journey.
              </li>
            </ul>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-900">
              <a className="text-black" href="#">
                Continuous Support
              </a>
            </h2>

            <ul className="lg:mt-8 text-md lg:text-2xl text-gray-500 sm:text-base ">
              <li className="mt-4  pb-4 text-md lg:text-2xl max-w-1/2 wrap ">
                We're with you every step of the way on your{" "}
                <span className="text-blue-400"> financial journey.</span>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Milestone;
