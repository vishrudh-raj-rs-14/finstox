import React from "react";
import HeroImage from "../../../assets/newImages/generalImg1.jpg";
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
      <section className="bg-white text-gray-800 pt-36 lg:px-48">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-7xl pb-4">
              FinstoX
              <br />
            </h1>
            <h2 className="text-3xl font-bold leadi sm:text-6xl">
              <span className="text-blue-600"> Where Learning </span>Meets Funding for Irresistible
              <br />
              <span className="text-blue-600 text-yellow-500">
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
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Discover Finstox
              <br className="hidden md:inline lg:hidden" /> Your Path to Financial Excellence
            </p>
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
              className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            >
              <Link
                to="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50"
              >
                CREATE ACCOUNT
              </Link>
              {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a> */}
            </motion.div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={HeroImage}
              alt=""
              className="object-contain h-72 sm:h-80 w-max lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
}
