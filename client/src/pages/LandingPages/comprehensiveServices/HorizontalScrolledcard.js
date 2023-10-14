import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import practiceImg from "../../../assets/newImages/practiceImg.jpg";
import financialliteracyImg from "../../../assets/newImages/financialliteracy.jpg";
import mentorshipImg from "../../../assets/newImages/mentroshipbg.jpg";


const HorizontalScrolledcard = () => {
  return (
    <div className="bg-white">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
        
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    
    <section ref={targetRef} className="  relative h-[300vh] bg-white">
        
      <div className="sticky top-0  flex flex-row h-screen items-center overflow-hidden pl-32">
        
        <motion.div style={{ x }} className="flex gap-4 ">
            <div className="relative  max-w-7xl flex flex-col items-center justify-center">
                <h2 className="text-6xl sm:3xl font-bold text-gray-900">
                Comprehensive Services <br />
                <span className="mt-2 text-2xl sm:xl font-bold text-gray-900">
                Your Financial Journey, All in One Place
                </span>
                </h2>
            </div>
          {callouts.map((callout) => (

            <div key={callout.name} className={`group relative p-16 ${callout.BgColor} rounded-2xl lg:w-[898px] lg:h-[576px] w-[26rem] sm:flex sm:flex-col sm:items-center sm:justify-center mr-16`}>
               <div className="relative h-[550px] w-full flex-col overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2  lg:aspect-w-1 group-hover:opacity-75">
                 <img
                   src={callout.imageSrc}
                   alt={callout.imageAlt}
                   className=" lg:h-[600px] w-full object-cover object-center"
                 />
               </div>
               <div>

               <h3 className="mt-6 text-2xl font-semibold text-black">
                 <a href={callout.href}>
                   <span className="absolute inset-0" />
                   {callout.name}
                 </a>
               </h3>
               <p className="text-base font-medium text-gray-900">{callout.description}</p>
               </div>
             </div>

          ))}
        </motion.div>
      </div>
    </section>
    
  );
};


export default HorizontalScrolledcard;

const callouts = [
    {
      id: 1,
      name: "Financial Literacy",
      BgColor: "bg-blue-100",
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
      BgColor: "bg-yellow-100",
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
      BgColor: "bg-blue-100",
      description:
        "Learn from past mistakes, optimize your trading with one-on-one guidance, and receive weekly expert strategies directly to your inbox/WhatsApp.",
      imageSrc: mentorshipImg,
      imageAlt:
        "Learn from past mistakes, optimize your trading with one-on-one guidance, and receive weekly expert strategies directly to your inbox/WhatsApp.",
      href: "#",
    },
  ];