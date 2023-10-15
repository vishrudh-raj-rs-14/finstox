import PropTypes from "prop-types";
import generalImg1 from "../../../assets/newImages/generalImg1.jpg";
import generalImg2 from "../../../assets/newImages/tradingBgimg.jpg";
import growphnimg from "../../../assets/newImages/growphnimg.jpg";
import phoneInHand from "../../../assets/newImages/phoneHand.jpg";
import talkingSvg from "../../../assets/newImages/svg/Business Plan.gif";
import AffordableSection from "./AffordableSection";
import mockPhoneImg from "../../../assets/newImages/iPhone-12-Mockup.png";

// images new
import fundingImagebg from "../../../assets/newImages/fundingBgImg.jpg"
import lastSecImg from "../../../assets/newImages/milestone.jpg"

export default function DetailBox() {
  // propTypes is the correct spelling
  DetailBox.propTypes = {
    generalImg: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
  };
  // console.log(props);
  return (
    <>
      <AffordableSection />
      {/* <div classNameName="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center bg-white  px-4 sm:p-16 md:p-24">
        
        <div classNameName="flex lg:flex-row-reverse flex-col max-w-7xl sm:p-4 w-full justify-around mx-10 justify-space-between ">
          
          <div classNameName="min-w-fit">
            <div classNameName="relative mx-auto lg:m-16 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px] ">
              <div classNameName="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div classNameName="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div classNameName="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div classNameName="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div classNameName="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                <img
                  src={growphnimg}
                  // src={generalImg2}
                  // classNameName="dark:hidden h-[426px] md:h-[654px]"
                  classNameName=" h-[426px] md:h-[654px]"
                  alt=""
                />

                \
              </div>
            </div>
          </div>
          <div classNameName="p-4 m-4 items-center">
            <h2 classNameName="mt-4 text-3xl font-bold leadi sm:text-5xl">
              <span classNameName="text-orange-400"> Affordable</span> Access
            </h2>
            <ul classNameName="lg:mt-20 text-md text-gray-500 sm:text-base ">
              <li classNameName="mt-4 text-xl pb-10 lg:text-2xl max-w-1/2 wrap ">
                Join our journey to inclusive
                <span classNameName="text-blue-400"> FINANCIAL EMPOWERMENT</span>
                <br />
              </li>
              <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                Regardless of your situation, we're here to help you learn and grow in the
                <span classNameName="text-orange-400"> TRADING WORLD.</span>
              </li>
              <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                The future holds great opportunities; now is the perfect time to start your trading
                journey.
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <div classNameName="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center  px-4 sm:p-16 md:p-24">
        <div classNameName="flex lg:flex-row  flex-col max-w-7xl  sm:p-4 w-full justify-between mx-1 justify-space-between ">
  

          <div classNameName="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div classNameName="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div classNameName="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div classNameName="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div classNameName="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div classNameName="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                classNameName=" w-[272px] h-[572px]"
                alt=""
              />
              
            </div>
          </div>

          <div classNameName="p-4 m-4">
            <h2 classNameName="mt-4 text-orange-400 text-3xl font-bold leadi sm:text-5xl">
              <span classNameName=""> Real Funding</span>
            </h2>
            <ul classNameName="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li classNameName="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                Showcase your virtual trading skills to secure up to 5 lakhs for
                <span classNameName="text-blue-400"> real market investments.</span>
                <br />
              </li>
              <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                Celebrate your success with a prestigious FinstoX certificate, a symbol of your
                trading prowess.
              </li>
            </ul>
            <h2 classNameName="mt-4 text-3xl font-bold leadi sm:text-5xl">
              <span classNameName="text-orange-400">Expert Guidance</span>
            </h2>
            <ul classNameName="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li classNameName="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                Elevate your trading with{" "}
                <span classNameName="text-blue-400">personalized mentorships</span> by experienced
                traders.
                <br />
              </li>
              <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
                We believe in analyzing mistakes to help you grow.
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="bg-white flex justify-center p-4">
        <div className=" bg-white max-w-[85rem] lpx-4 py-10 sm:px-6  lg:py-14">
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
                <a
                  className="text-black"
                  href="#"
                >
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
                <a
                  className="text-black"
                  href="#"
                >
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
        </div>
      </div>

      <div className="bg-white flex justify-center p-4">
        <div className=" bg-white max-w-[85rem] lpx-4 py-10 sm:px-6  lg:py-14">
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
                <a
                  className="text-black"
                  href="#"
                >
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
                <a
                  className="text-black"
                  href="#"
                >
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
        </div>
      </div>

      {/* <div classNameName="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center px-4 sm:p-16 md:p-24">
        <div classNameName="flex lg:flex-row items-center flex-col max-w-7xl sm:p-4 w-full justify-between mx-10 justify-space-between ">
          <img
            classNameName="w-auto h-48 lg:h-96 object-cover sm:h-64 md:h-96 lg:w-1/2 min-h-full rounded-md"
            src={generalImg1}
            alt="Affordable Access"
          />
          <div classNameName="p-4 m-4">
            <h2 classNameName="mt-4 text-3xl font-bold leadi sm:text-5xl">
              <span classNameName="text-orange-400"> Milestone Celebrations</span>
            </h2>
            <ul classNameName="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li classNameName="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                Achieve success milestones and earn real money with us.
                <span classNameName="text-blue-400"> real market investments.</span>
                <br />
              </li>
              <li classNameName="mt-4 text-xl pb-10 lg:text-2xl">
              We celebrate every victory, big or small, on your trading journey.
              </li>
            </ul>
            <h2 classNameName="mt-4 text-3xl font-bold leadi sm:text-5xl">
              <span classNameName="text-orange-400">Continuous Support</span>
            </h2>
            <ul classNameName="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li classNameName="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                We're with you every step of the way on your{" "}
                <span classNameName="text-blue-400">financial journey.</span> <br />
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}
