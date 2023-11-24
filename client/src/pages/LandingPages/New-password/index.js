import { useLocation, useNavigate } from "react-router-dom";
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
//import { DataContext } from "../../../DataContext";
//import { IconButton, InputAdornment } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

function NewPassword() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  //const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleNewPassword = async (event) => {
    event.preventDefault();
    const api = process.env.REACT_APP_BACKEND_URL;
    console.log(api);
    const email = localStorage.getItem("userEmail");
    console.log("Email:", email);

    try {
      const response = await fetch(`${api}/new-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.status === 500) {
        alert("Cannot reset password. Internal Server Error.");
      } else {
        alert("Password reset completed");
        navigate("/pages/authentication/sign-in");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while resetting the password");
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
      <DefaultNavbar routes={routes} transparent mb={8} />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="120vh"
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
      <MKBox pt={20} px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox pt={4} pb={3} px={3}>
                <MKTypography variant="h5" fontWeight="medium" color="blue" mt={-2} mb={5} mx={10}>
                  New Password
                </MKTypography>
                <MKBox component="form" role="form" onSubmit={handleNewPassword}>
                  <MKBox mb={2}>
                    <MKInput
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      fullWidth
                    />
                    {passwordError && (
                      <div className="password error" style={{ color: "red", fontSize: "11px" }}>
                        {passwordError}
                      </div>
                    )}
                  </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" type="submit" fullWidth>
                      Reset Password
                    </MKButton>
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

export default NewPassword;
