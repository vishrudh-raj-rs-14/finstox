import React from 'react'
import affordableSecImg from "../../../assets/newImages/Investment data-rafiki.png"

function AffordableSection() {
  return (
   <div className="bg-white flex justify-center p-4">
    <div className=" bg-white max-w-[85rem] lpx-4 py-10 sm:px-6  lg:py-14">
    
    <div className="grid sm:grid-cols-2  bg-slate-100 sm:items-center shadow-md gap-8 rounded-xl  p-4 lg:p-16">
        <div className="sm:order-2">
        <div className="relative pt-[50%] sm:pt-[100%] rounded-lg bg-blue-500">
            <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src={affordableSecImg} alt="Image Description" />
        </div>
        </div>
        

        <div className="sm:order-1">
        {/* <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            Business insight
        </p> */}

        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 ">
            <a className="  " href="#">
            Affordable Access
            </a>
        </h2>

        <ul className="lg:mt-20 text-md lg:text-2xl text-gray-500 sm:text-base ">
            <li className="mt-4  pb-4 text-md lg:text-2xl max-w-1/2 wrap ">
            Join our journey to inclusive financial empowerment.
            <span className="text-blue-400"> FINANCIAL EMPOWERMENT</span>
            <br />
            </li>
            {/* <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
            Regardless of your situation, we're here to help you learn and grow in the
            <span classNameName="text-orange-400"> TRADING WORLD.</span>
            </li> */}
            <li className="mt-4 text-md lg:text-2xl pb-4">
            Now is the perfect time to start your trading journey!
            </li>
        </ul>
         
        {/* <div className="mt-6 sm:mt-10 flex items-center">
            <div className="flex-shrink-0">
            <img className="h-10 w-10 sm:h-14 sm:w-14 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
            </div>

            <div className="ml-3 sm:ml-4">
            <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                Louise Donadieu
            </p>
            <p className="text-xs text-gray-500">
                Strategic Marketing Consultant
            </p>
            </div>
        </div> */}
        {/* <!-- End Avatar --> */}

        {/* <div className="mt-5">
            <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="#">
            Read more
            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            </a>
        </div> */}
        </div>

       
      
    </div>
    
    </div>
    </div>
  )
}

export default AffordableSection