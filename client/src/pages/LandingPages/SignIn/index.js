//import { useState } from "react";

// react-router-dom components
import { Link, useLocation, useNavigate } from "react-router-dom";

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
import bgImage from "assets/images/bg-login.jpg";
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
    const response = await fetch("http://localhost:4337/loginUser", {
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
              <MKBox pt={4} pb={3} px={3}>
                <MKTypography variant="h4" fontWeight="medium" color="blue" mt={-2} mb={2} mx={11}>
                  Sign in
                </MKTypography>
                <MKBox component="form" role="form" onSubmit={validateUser}>
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      name="password"
                      value={password}
                      label="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                              <MKIconify
                                icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </MKBox>
                  {/* <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox> */}
                  <MKBox mt={1} mb={0}>
                    <MKTypography variant="button" color="text">
                      {" "}
                      <MKTypography
                        component={Link}
                        to="../pages/authentication/forgot-password"
                        variant="button"
                        color="info"
                        //fontWeight="medium"
                        textGradient
                      >
                        Forgot password?
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={2} mb={1}>
                    <MKButton variant="gradient" color="info" type="submit" fullWidth>
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="../pages/authentication/create-account"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignInBasic;
