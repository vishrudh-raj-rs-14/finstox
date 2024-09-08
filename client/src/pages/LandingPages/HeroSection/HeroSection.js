import React from "react";
import HeroImage from "../../../assets/newImages/generalImg1.jpg";
import whitebgImg from "../../../assets/logo/whitebgLogo.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const variants = {
    hidden: {
      height: 0,
      width: "100%",
      // Add `opacity: 0` to hide the component completely.
      opacity: 0,
    },
    visible: {
      height: "auto",
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <section className="bg-white text-gray-800 pt[35rem] lg:pt-[14rem] justify-center lg:pb-32 ">
        <div className="container flex flex-col pt[35rem]  max-w-7xl items-center justify-center mx-auto sm:py-12 lg:py-0 lg:flex-row lg:justify-center">
          <div
            className="flex flex-col items-center lg:mt-[-30rem] justify-center z-10 static sm:pt-8 lg:absolute p-6 pt-16 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            style={{
              fontFamily: "Roboto",
            }}
          >
            {/* <h1 className="text-5xl font-bold leadi sm:text-7xl pb-4">
              FinstoX
              <br />
            </h1> */}
            <img src={whitebgImg} className="lg:-ml-7" alt="imgage" />
            <h2 className="text-3xl font-bold leadi sm:text-6xl lg:w-[80rem]">
              Where Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                Meets Funding for Irresistible
              </span>
              <br />
            </h2>
            <h2 className="text-3xl font-bold leadi sm:text-6xl">
              <span className=" text-black">
                <Typewriter
                  words={["Trading", "Wealth-building!"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            {/* <p className="mt-6 mb-8 text-lg sm:mb-12">
              Discover Finstox
              <br className="hidden md:inline lg:hidden" /> Your Path to Financial Excellence
            </p> */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              onViewportEnter={() => {
                console.log("Component entered the viewport");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col mt-12 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center"
            >
              <Link
                to="/pages/authentication/sign-in"
                className="px-8 py-3 text-lg font-semibold rounded bg-green-500 text-gray-50"
              >
                CREATE ACCOUNT
              </Link>
              {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a> */}
            </motion.div>
          </div>
          <div className="hidden lg:visible lg:flex items-center blur-sm z-0 lg:mt-[12rem] rounded-xl  h-[33rem] justify-center  xl:h-112 2xl:h-128">
            <img
              src={HeroImage}
              alt=""
              className="object-contain w-max h-fit  xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
}
