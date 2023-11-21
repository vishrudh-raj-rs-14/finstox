import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import smallLogo from "../../../assets/logo/smallLogo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./index.css";

// const user = {
//   name: "GKT",
//   email: "gkt@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Get Funded", href: "/pages/landing-pages/get-funded", current: false },
  { name: "Pricing", href: "#pricingsection", current: false },
  { name: "Contact Us", href: "/pages/landing-pages/contact-us", current: false },
];
const userNavigation = [{ name: "Sign In", href: "/pages/authentication/sign-in" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const handlePricing = () => {
    window.location.replace("/#pricingsection");
  };

  return (
    <>
      {/* <>
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-slate-800  w-full z-40 fixed">
            {({ open }) => (
              <>
                <div className="mx-auto mt-1  max-w-7xl px-4 z-40 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <motion.img
                          animate={{
                            scale: [1, 1, 1.2, 1.2, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                          className="h-8 w-8 rounded"
                          src={smallLogo}
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="my-4 flex items-center md:ml-6 z-40 rounded-md">
                        <Link
                          to="/pages/authentication/sign-in"
                          type="button"
                          className="relative rounded-md min-w-24 bg-slate-950 lg:bg-slate-800  p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Sign In</span>
                          Sign In
                        </Link>

                        
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="my-4 flex items-center md:ml-6 rounded-md">
                      <button
                        type="button"
                        className="relative rounded-sm w-20 bg-slate-950 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Sign In</span>
                        Sign In
                      </button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

        </div>
      </> */}
      <div className="min-h-full">
        <Disclosure as="nav" className=" py-4 w-full z-40 fixed">
          {({ open }) => (
            <header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
              <nav
                class="relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-white dark:border-gray-700"
                aria-label="Global"
              >
                <div class="flex items-center justify-between">
                  <Link
                    to="/"
                    class="flex-none text-xl font-semibold dark:text-white"
                    aria-label="Brand"
                  >
                    <motion.img
                      animate={{
                        scale: [1, 1, 1.2, 1.2, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                      transition={{
                        duration: 0,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="h-12 w-12 rounded border-2 border-black"
                      src={smallLogo}
                      alt="Your Company"
                    />
                  </Link>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
                <div
                  id="navbar-collapse-with-animation"
                  class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
                >
                  <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                    <Link
                      to="/"
                      class="font-medium text-blue-600 md:py-6 dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to="/pages/landing-pages/get-funded"
                      class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                      Get Funded
                    </Link>
                    <Link
                      class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                      to="#pricingsection"
                      onClick={handlePricing}
                    >
                      Pricing
                    </Link>
                    <Link
                      to="/pages/landing-pages/contact-us"
                      class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                      Contact
                    </Link>

                    {/* <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                  <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
                    Dropdown
                    <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                  </button>

                  <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                      About
                    </a>
                    <div class="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                      <button type="button" class="w-full flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                        Sub Menu
                        <svg class="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                      </button>

                      <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                          About
                        </a>
                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                          Downloads
                        </a>
                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                          Team Account
                        </a>
                      </div>
                    </div>

                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                      Downloads
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                      Team Account
                    </a>
                  </div>
                </div> */}

                    <Link
                      to="/pages/authentication/sign-in"
                      class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                    >
                      <svg
                        class="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Log in
                    </Link>
                  </div>
                </div>
              </nav>

              <Disclosure.Panel className="md:hidden bg-slate-800 rounded-2xl m-8 w-full">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="my-4 flex items-center md:ml-6 rounded-md">
                    <button
                      type="button"
                      className="relative rounded-sm w-20 bg-slate-950 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Sign In</span>
                      Sign In
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </header>
          )}
        </Disclosure>
      </div>
    </>
  );
}

// import { useEffect, useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from '../../../assets/logo/smallLogo.png'
// import darklogo from '../../../assets/logo/smallLogo.png'
// import { Link } from 'react-router-dom'
// import { Switch } from '@headlessui/react'

// const navigation = [
//   { name: "Home", href: "/", current: false },
//   { name: "Contact Us", href: "/pages/landing-pages/contact-us", current: false },
//   { name: "Get Funded", href: "/pages/landing-pages/get-funded", current: false },
//   // { name: "About", href: "/about", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [theme, setTheme] = useState(null);
//   // const [isToggled, setIsToggled] = useState(false);
//   const [agreed, setAgreed] = useState(false)

//   useEffect(() => {
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setTheme("dark");
//       setAgreed(true);
//     }
//     else {
//       setTheme("light")
//     } console.log("checking");
//   }, [])

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       // setIsToggled(true);
//     }
//     else {
//       document.documentElement.classList.remove("dark");
//       // setIsToggled(true);
//     }
//   }, [theme])

//   // Define a function to toggle the state.
//   const handleToggle = () => {
//     // setIsToggled(!isToggled);

//     // setAgreed(!agreed);
//     // setTheme(theme === "dark" ? "light" : "dark");

//   };

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <nav
//         className="flex items-center justify-between p-6 lg:px-60"
//         aria-label="Global"
//       >
//         <div className="flex lg:flex-1 ">
//           <Link href="#" className=" p-1.5 rounded-full">
//             {/* <span className="sr-only">Your Company</span> */}
//             <img
//               className="h-12 w-auto"
//               // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               src={logo}
//               alt=""
//             />
//           </Link>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6 dark:bg-white rounded" aria-hidden="true" />
//           </button>
//         </div>

//         <div className="hidden sm:visible z-50 dark:bg-slate-700 lg:flex lg:gap-x-12 bg-blue-100 rounded-full px-5 py-4">
//           {navigation.map((item) => (
//             <>
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="text-md font-semibold leading-6 text-gray-900 dark:text-white "
//               >
//                 {item.name}
//               </Link>
//             </>
//           ))}

//           {/* <div className="text-md font-semibold hover:bg-slate-600 leading-6 text-gray-900 dark:text-white">
//             <button type="button" onClick={handleToggle}>
//               {theme==="dark" ? "Light" : "Dark"}
//             </button>
//           </div> */}

//           {/* <div className="flex h-6 items-center ">
//               <Switch
//                 checked={agreed}
//                 onChange={handleToggle}
//                 className={classNames(
//                   agreed ? 'bg-slate-950' : 'bg-gray-200',
//                   'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//                 )}
//               >
//                 <span className="sr-only">Agree to policies</span>
//                 <span
//                   aria-hidden="true"
//                   className={classNames(
//                     agreed ? 'translate-x-3.5' : 'translate-x-0',
//                     'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
//                   )}
//                 />
//               </Switch>
//           </div> */}

//         </div>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <Link
//             to="login"
//             className="text-sm font-semibold leading-6 text-gray-900 bg-green-400  rounded-full px-5 py-4"
//           >
//             Log in <span aria-hidden="true">&rarr;</span>
//           </Link>
//         </div>
//       </nav>

//       <Dialog as="div" className="lg:hidden lg:display-none" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//         <div className="fixed inset-0 z-50" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <Link to="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 className="h-8 w-auto"
//                 src={darklogo}
//                 alt=""
//               />
//             </Link>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-900 hover:text-green-600"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}

//               <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-900 hover:text-green-600">
//                 <div className="flex h-6 items-center ">
//                   <Switch
//                     checked={agreed}
//                     onChange={handleToggle}
//                     className={classNames(
//                       agreed ? 'bg-slate-950' : 'bg-gray-200',
//                       'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//                     )}
//                   >
//                     <span className="sr-only">Agree to policies</span>
//                     <span
//                       aria-hidden="true"
//                       className={classNames(
//                         agreed ? 'translate-x-3.5' : 'translate-x-0',
//                         'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
//                       )}
//                     />
//                   </Switch>
//                 </div>
//               </div>

//               </div>
//               <div className="py-6">
//                 <Link
//                   to="login"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-slate-900 hover:text-green-600"
//                 >
//                   Log in
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>

//     </header>
//   )
// }

// export default NavBar;
