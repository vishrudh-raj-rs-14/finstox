import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import routes from "routes";

// Images
// import bgImage from "assets/images/bg-login.jpg";
import bgImage from "../../../assets/images/bg-login.jpg";

import { /*useContext,*/ useEffect, useState } from "react";
import { useMaterialUIController } from "context";
import { setLayout } from "context";

function OtpVerification() {
  const [, dispatch] = useMaterialUIController();
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleOtpVerification = async (event) => {
    event.preventDefault();
    const api = process.env.REACT_APP_BACKEND_URL;
    console.log(api);

    const response = await fetch(`${api}/confirm-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    });

    const data = await response.json();

    // if (data.statu == 500) {
    //   navigate("/dashboard", { replace: true });
    // }
    if (data.status == 500) {
      alert("Failed to send email");
      setEmail("Internal Server Error");
    } else {
      setEmail("");
      navigate("/");
    }
  };

  // const handleForgotPassword = () => {
  //   navigate("/forgot-password");
  // };

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <>
      <DefaultNavbar routes={routes} transparent light mb={3} />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(4px)",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <main className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 rounded-xl shadow-sm dark:border-gray-700">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 ">Verify OTP</h1>
                      <p className="mt-2 text-sm text-gray-600">
                        {/* Remember your password? */}
                        <Link
                          className="text-blue-600 decoration-2 hover:underline font-medium"
                          to="/pages/authentication/sign-in"
                        >
                          Sign in here
                        </Link>
                      </p>
                    </div>

                    <div className="mt-5">
                      <form>
                        <div className="grid gap-y-4">
                          <div>
                            <label for="otp" className="block text-sm mb-2 text-black">
                              Enter OTP
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                                required
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                              <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
                                <svg
                                  className="h-5 w-5 text-red-500"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                              </div>
                            </div>
                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                              Please include a valid email address so we can get back to you
                            </p>
                          </div>

                          <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            onClick={handleOtpVerification}
                          >
                            Verify
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default OtpVerification;
