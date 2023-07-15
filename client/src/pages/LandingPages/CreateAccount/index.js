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
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-login.jpg";
import { useEffect, useState } from "react";
import { setLayout } from "context";
import { useMaterialUIController } from "context";

function SignUpBasic() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);
  //const [rememberMe, setRememberMe] = useState(false);

  //const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [termsChecked, setTermsChecked] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handleTermsChecked = (event) => {
  //   setTermsChecked(event.target.checked);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const name = { firstName: firstName, lastName: lastName };
    try {
      const response = await fetch("http://localhost:4337/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          //name,
        }),
      });

      if (response.ok) {
        navigate("/pages/authentication/sign-in");
      } else {
        // Registration failed, handle accordingly (e.g., show error message, etc.)
        console.error("Registration failed");
      }
    } catch (error) {
      // Handle any other errors that occur during the request
      console.error(error);
    }
  };

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
                <MKTypography variant="h4" fontWeight="medium" color="blue" mt={-2} mb={2} mx={10}>
                  Sign up
                </MKTypography>
                <MKBox component="form" role="form" onSubmit={handleSubmit}>
                  <MKBox mb={2}>
                    <MKInput
                      type="name"
                      value={username}
                      label="username"
                      onChange={handleUsernameChange}
                      required
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      label="Email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      required
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" type="submit" fullWidth>
                      sign up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="../pages/authentication/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
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
export default SignUpBasic;
