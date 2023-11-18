/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// import { motion } from "framer-motion";
import practiceImg from "../../../assets/newImages/practiceImg.jpg";
import financialliteracyImg from "../../../assets/newImages/financialliteracy.jpg";
import mentorshipImg from "../../../assets/newImages/mentroshipbg.jpg";
import HorizontalScrolledcard from "./HorizontalScrolledcard";
import React, { useState, useEffect } from "react";

const callouts = [
  {
    id: 1,
    name: "Financial Literacy",
    description:
      "Unlock a wealth of educational resources, tutorials, and interactive materials that simplify complex financial concepts.",
    imageSrc: financialliteracyImg,
    imageAlt:
      "Unlock a wealth of educational resources, tutorials, and interactive materials that simplify complex financial concepts.",
    href: "#",
  },
  {
    id: 2,
    name: "Virtual Trading & Practice",
    description:
      "Hone Strategies with 5 Lakh INR Virtual Capital in Realistic, Risk-Free Environments",
    imageSrc: practiceImg,
    imageAlt:
      "Hone Strategies with 5 Lakh INR Virtual Capital in Realistic, Risk-Free Environments.",
    href: "#",
  },
  {
    id: 3,
    name: "Personalized Mentorships",
    description:
      "Learn from past mistakes, optimize your trading with one-on-one guidance, and receive weekly expert strategies directly to your inbox/WhatsApp.",
    imageSrc: mentorshipImg,
    imageAlt:
      "Learn from past mistakes, optimize your trading with one-on-one guidance, and receive weekly expert strategies directly to your inbox/WhatsApp.",
    href: "#",
  },
];

export default function ComprehensiveServices() {
  //   const variants = {
  //     hidden: {
  //       height: 0,
  //       width: "100%",
  //       // Add `opacity: 0` to hide the component completely.
  //       opacity: 0,
  //     },
  //     visible: {
  //       height: "auto",
  //       width: "100%",
  //       opacity: 1,
  //       transition: {
  //         duration: 1,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update windowSize when the window is resized
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add an event listener to the window to listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-white visible lg:hidden ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-gray-900">
              Comprehensive Services
              <br />{" "}
            </h2>
            <p className="mt-2 mb-8 text-md lg:text-sm sm:mb-12">
              Your Financial Journey, All in One Place
            </p>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:visible"> */}

      {/* <HorizontalScrolledcard /> */}
      {/* </div> */}
    </>
  );
}

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {callouts.map((callout) => {
//             return <Card card={callouts} key={callouts.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[90vh] w-[100vw] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// const cards = [
//   {
//     imageurl: "/imgs/abstract/1.jpg",
//     title: "",
//     id: 1,
//   },
//   {
//     imageurl: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     imageurl: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },

// ];
