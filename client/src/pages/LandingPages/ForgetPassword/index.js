//import { useState } from "react";

// react-router-dom components
import { Link, useLocation, useNavigate } from "react-router-dom";
// import dotenv from "dotenv";
// dotenv.config();

// @mui material components
import Card from "@mui/material/Card";
//import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
//import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKIconify from "components/MKIconify";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
// import bgImage from "assets/images/bg-login.jpg";
import bgImage from "../../../assets/images/bg-login.jpg";

import { /*useContext,*/ useEffect, useState } from "react";
import { useMaterialUIController } from "context";
import { setLayout } from "context";
//import { DataContext } from "../../../DataContext";
import { IconButton, InputAdornment } from "@mui/material";

function SignInBasic() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);
  //const [rememberMe, setRememberMe] = useState(false);

  //const handleSetRememberMe = () => setRememberMe(!rememberMe);

  //const { hellodata, setHelloData } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem("hellodata");
  //   localStorage.removeItem("facsemdata");
  // }, []);
  const validateUser = async (event) => {
    event.preventDefault();
    const api = process.env.REACT_APP_BACKEND_URL;
    console.log(api);

    const response = await fetch(`${api}/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });

    const data = await response.json();
    //setHelloData(data);
    console.log(data.token);
    if (data.status === "ok") {
      //console.log(hellodata);
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("userEmail", email);
      navigate("/dashboard", { replace: true });
    }
    if (data.status !== "ok") {
      alert("Incorrect username or password");
    }
  };

  // const handleForgotPassword = () => {
  //   navigate("/forgot-password");
  // };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      validateUser(event);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

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
              {/* <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox> */}

  
            <main class="w-full max-w-md mx-auto p-6">
            <div class="mt-7 rounded-xl shadow-sm dark:border-gray-700">
                <div class="p-4 sm:p-7">
                <div class="text-center">
                    <h1 class="block text-2xl font-bold text-gray-800 ">Forgot password?</h1>
                    <p class="mt-2 text-sm text-gray-600">
                    Remember your password?
                    <Link class="text-blue-600 decoration-2 hover:underline font-medium" to="/pages/authentication/sign-in">
                        Sign in here
                    </Link>
                    </p>
                </div>

                <div class="mt-5">
                   
                    <form>
                    <div class="grid gap-y-4">
                       
                        <div>
                        <label for="email" class="block text-sm mb-2 text-black">Email address</label>
                        <div class="relative">
                            <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                            </div>
                        </div>
                        <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        

                        <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
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

export default SignInBasic;
