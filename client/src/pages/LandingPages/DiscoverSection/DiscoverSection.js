import React, { useRef } from "react";
import discoverImg from "../../../assets/newImages/discoverDarkImg.png";
import { motion, useScroll, useTransform } from "framer-motion";

function index() {
          
  const myref = useRef(null);

  const { scrollYProgress } = useScroll({
      target: myref,
      offset: ["0 1", "1.11 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="bg-white">
      <div className="items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl p-10 mx-auto text-center">
          <div>
            <p className="mt-8 lg:text-5xl text-xl font-medium tracking-tighter text-black">
              Discover Finstox Your Path to Financial Excellence
            </p>
            {/* <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
              If you could kick the person in the pants responsible for most of your trouble, you
              wouldn't sit for a month
            </p> */}
          </div>
          {/* <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row">
            <a
              href="#"
              className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
            >
              Button
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
            >
              Learn more &nbsp; →
            </a>
          </div> */}
        </div>
      </div>

      <motion.div ref={myref}
      style={{ scale: scaleProgress, opacity: opacityProgress }} className="relative items-center w-full  px-5 pb-12 mx-auto  md:px-12 lg:px-16 max-w-7xl">
        <img className="w-full bg-gray-300 rounded-2xl" src={discoverImg} alt="" />
      </motion.div>
    </section>
  );
}

export default index;
