import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

export default function ThreeTierPricing() {
  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_live_51O581GSC4pjh2Cs8C7tRgiHMMqxl1j7hNkBNTj097pjwhpaqSv7cotaA6Tnj2l1r5Zc7FsJMviiKmV6H2bW4nc1b00kb5MEuuj"
    );

    const body = {
      products: [
        {
          option: "practice",
          price: 5,
          qnty: 1,
        },
      ],
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("process.env.REACT_APP_BACKEND_URL/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log(result);

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div className="bg-white flex justify-center p-4">
      <div className="grid sm:grid-cols-2  bg-green-50 sm:items-center shadow-md gap-8 rounded-xl p-4 lg:p-16">
        <div className="sm:order-1">
          {/* <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                Business insight
              </p> */}

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-white">
            <a className="text-black" href="#">
              Pricing
            </a>
          </h2>
        </div>
        <div className="sm:order-2 ">
          <div className="relative pt-[50%] sm:pt-[100%] rounded-lg bg-blue-500">
            <div className="mt-12 mx-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-1 lg:items-center">
              <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
                <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-900">
                  ₹ 49
                  <span className="font-bold text-2xl -mr-2">/month</span>
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  All the basics for starting a new setup
                </p>

                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-600">Practice</span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-600">Analysis</span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-600">Get Funded</span>
                  </li>
                </ul>

                <Link
                  className="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  onClick={makePayment}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="bg-white w-full">
  <div id="pricingsection" className="bg-white sm:mx-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 lg:col-span-1">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-blacke">Pricing</h2>
    </div>
    <div className="mt-12 mx-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-1 lg:items-center">
      <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-900">
          ₹ 49
          <span className="font-bold text-2xl -mr-2">/month</span>
        </span>
        <p className="mt-2 text-sm text-gray-500">All the basics for starting a new setup</p>

        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 h-5 w-5 text-blue-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-gray-800 dark:text-gray-600">Practice</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 h-5 w-5 text-blue-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-gray-800 dark:text-gray-600">Analysis</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 h-5 w-5 text-blue-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-gray-800 dark:text-gray-600">Get Funded</span>
          </li>
        </ul>

        <Link
          className="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          onClick={makePayment}
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
</div>; */
}
