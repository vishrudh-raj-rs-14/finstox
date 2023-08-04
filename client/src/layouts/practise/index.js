import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
//import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import LiveChart from "./LiveChart";
import axios from "axios";
import { useEffect } from "react";

function PractiseDashboard() {
  useEffect(() => {
    // Get the token from localStorage
    const jwtCookie = localStorage.getItem("jwt");
    axios
      .get("http://localhost:4337/checkAuthentication", {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
        },
      })
      .then((response) => {
        console.log(response.data.status);
        // If the response status is "ok", the user is authenticated
        if (response.data.status != "ok") {
          //setIsLoggedIn(true);
          window.location.href = "/pages/authentication/sign-in";
        }
      })
      .catch((error) => {
        console.error("Error checking authentication:", error);
        //setIsLoggedIn(false);
        window.location.href = "/pages/authentication/sign-in";
      });
  }, []);
  return (
    <DashboardLayout>
      <h1>Live chart of IBM</h1>
      <LiveChart symbol="AAPL" />
    </DashboardLayout>
  );
}

export default PractiseDashboard;
