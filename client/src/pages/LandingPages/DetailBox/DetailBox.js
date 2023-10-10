import PropTypes from "prop-types";
import generalImg1 from "../../../assets/newImages/generalImg1.jpg";

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
      <div className="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center p-4 px-4 sm:p-16 md:p-24">
        <div className="flex lg:flex-row-reverse lg:py-20 flex-col max-w-7xl rounded-md shadow-lg sm:p-4 w-full justify-around mx-10 bg-slate-200 justify-space-between ">
          {/* <img
          className="w-auto h-48 lg:h-96 object-cover sm:h-64 md:h-96 lg:w-1/2 min-h-full rounded-md"
          src={generalImg1}
          alt="Affordable Access"
        /> */}
          <div className="min-w-fit">
            <div className="relative mx-auto lg:m-16 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px] ">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                  // className="dark:hidden h-[426px] md:h-[654px]"
                  className=" h-[426px] md:h-[654px]"
                  alt=""
                />
                {/* <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
                className="hidden dark:block h-[426px] md:h-[654px]"
                alt=""
              /> */}
              </div>
            </div>
          </div>
          <div className="p-4 m-4 items-center">
            <h2 className="mt-4 text-6xl lg:text-4xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-orange-400"> Affordable</span> Access
            </h2>
            <ul className="lg:mt-20 text-md text-gray-500 sm:text-base ">
              <li className="mt-4 text-xl pb-10 lg:text-2xl max-w-1/2 wrap ">
                Join our journey to inclusive `&#39;`
                <span className="text-blue-400">financial empowerment.</span>
                <br />
              </li>
              <li className="mt-4 text-xl pb-10 lg:text-2xl">
                Regardless of your situation, we're here to help you learn and grow in the `&#39;`
                <span className="text-orange-400">trading world.</span>
              </li>
              <li className="mt-4 text-xl pb-10 lg:text-2xl">
                The future holds great opportunities; now is the perfect time to start your trading
                journey.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center p-4 px-4 sm:p-16 md:p-24">
        <div className="flex lg:flex-row lg:p-16 flex-col max-w-7xl rounded-md shadow-lg sm:p-4 w-full justify-between mx-10 bg-slate-200 justify-space-between ">
          {/* <img
          className="w-auto h-48 lg:h-96 object-cover sm:h-64 md:h-96 lg:w-1/2 min-h-full rounded-md"
          src={generalImg1}
          alt="Affordable Access"
        /> */}

          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                className=" w-[272px] h-[572px]"
                alt=""
              />
              {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="" /> */}
            </div>
          </div>

          <div className="p-4 m-4">
            <h2 className="mt-4 text-6xl lg:text-4xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-orange-400"> Real Funding</span>
            </h2>
            <ul className="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li className="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                Showcase your virtual trading skills to secure up to 5 lakhs for
                <span className="text-blue-400"> real market investments.</span>
                <br />
              </li>
              <li className="mt-4 text-xl pb-10 lg:text-2xl">
                Celebrate your success with a prestigious FinstoX certificate, a symbol of your
                trading prowess.
              </li>
            </ul>
            <h2 className="mt-4 text-6xl lg:text-4xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-orange-400">Expert Guidance</span>
            </h2>
            <ul className="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li className="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                Elevate your trading with{" "}
                <span className="text-blue-400">personalized mentorships</span> by experienced
                traders.
                <br />
              </li>
              <li className="mt-4 text-xl pb-10 lg:text-2xl">
                We believe in analyzing mistakes to help you grow.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center p-4 px-4 sm:p-16 md:p-24">
        <div className="flex lg:flex-row items-center flex-col max-w-7xl rounded-md shadow-lg sm:p-4 w-full justify-between mx-10 bg-slate-200 justify-space-between ">
          <img
            className="w-auto h-48 lg:h-96 object-cover sm:h-64 md:h-96 lg:w-1/2 min-h-full rounded-md"
            src={generalImg1}
            alt="Affordable Access"
          />
          <div className="p-4 m-4">
            <h2 className="mt-4 text-6xl lg:text-4xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-orange-400"> Milestone Celebrations</span>
            </h2>
            <ul className="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li className="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                Achieve success milestones and earn real money with us.
                <span className="text-blue-400"> real market investments.</span>
                <br />
              </li>
              <li className="mt-4 text-xl pb-10 lg:text-2xl">
                We celebrate every victory, big or small, on your trading journey.
              </li>
            </ul>
            <h2 className="mt-4 text-6xl lg:text-4xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-orange-400">Continuous Support</span>
            </h2>
            <ul className="lg:mt-10 text-md text-gray-500 sm:text-base ">
              <li className="mt-4 text-xl lg:text-2xl max-w-1/2 wrap ">
                We're with you every step of the way on your{" "}
                <span className="text-blue-400">financial journey.</span> <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
