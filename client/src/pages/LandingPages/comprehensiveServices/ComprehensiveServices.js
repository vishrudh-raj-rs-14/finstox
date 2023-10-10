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

const callouts = [
  {
    name: "Financial Literacy",
    description:
      "Unlock a wealth of educational resources, tutorials, and interactive materials that simplify complex financial concepts.",
    imageSrc: financialliteracyImg,
    imageAlt:
      "Unlock a wealth of educational resources, tutorials, and interactive materials that simplify complex financial concepts.",
    href: "#",
  },
  {
    name: "Virtual Trading & Practice",
    description:
      "Hone Strategies with 5 Lakh INR Virtual Capital in Realistic, Risk-Free Environments",
    imageSrc: practiceImg,
    imageAlt:
      "Hone Strategies with 5 Lakh INR Virtual Capital in Realistic, Risk-Free Environments.",
    href: "#",
  },
  {
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

  return (
    <div className="bg-gray-100">
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
  );
}
