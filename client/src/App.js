import React, { useState, useEffect } from "react";
import { Routes, Route, /*Navigate,*/ useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import Presentation from "layouts/pages/presentation";

import routes from "routes";
//import dashroutes from "dashroutes";
import SignIn from "layouts/pages/authentication/sign-in";
import ForgetPassword from "layouts/pages/authentication/forget-password";
import CreateAccount from "layouts/pages/authentication/create-account";
import OtpVerification from "./pages/LandingPages/OtpVerification/index";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
//import MDBox from "components/MDBox";

// import brandWhite from "assets/images/logo-ct.png";
// import brandDark from "assets/images/logo-ct-dark.png";
import finstoxLogo from "assets/logo/darklogobgrm.png";

//import Icon from "@mui/material/Icon";
import Learn from "pages/LandingPages/Learn";

import Dashboard from "layouts/dashboard";
import Icon from "@mui/material/Icon";
import LearnDashboard from "layouts/learn";
import PracticeDashboard from "layouts/practice";
// import PractiseDashboard from "layouts/practise";
import FundDashboard from "layouts/funding";
import AnalyseDashboard from "layouts/analysing";
import axios from "axios";
//import Pricing from "layouts/pricing";
// import Pricing from "pages/LandingPages/Pricing/Pricing";
import MDBox from "components/MDBox";
import NewPassword from "pages/LandingPages/New-password";
import OtpRegister from "pages/LandingPages/OtpRegister";
import Buyplan from "layouts/Buyplan";
//import Profile from "pages/LandingPages/Author/sections/Profile";
// import PriceList from "layouts/priceList";
// import NavBar from "examples/Navbars/NewNavBar/NavBar";
//import PricePlan from "layouts/pricePlan";
export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    openConfigurator,
    layout,
    sidenavColor,
    // transparentSidenav,
    // whiteSidenav,
    darkMode,
  } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  //const [rtlCache, setRtlCache] = useState(null);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );
  const [membership, setMember] = useState(2);

  const fetchMember = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/membership`,
        {
          email: storedUserEmail,
        }
      );
      setMember(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);
  const dashroutes = [
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      icon: <Icon fontSize="small">dashboard</Icon>,
      route: "/dashboard",
      component: <Dashboard />,
    },
    {
      type: "collapse",
      name: "Learn",
      key: "learn",
      icon: <Icon fontSize="small">book</Icon>,
      route: "/dashboard/learn",
      component: <LearnDashboard />,
    },
    {
      type: "collapse",
      name: "Practice",
      key: "practice",
      icon: <Icon fontSize="small">table_view</Icon>,
      route: "/dashboard/practice",
      component: membership >= 1 ? <Buyplan /> : <PracticeDashboard />,
    },
    // {
    //   type: "collapse",
    //   name: "Profile",
    //   key: "profile",
    //   icon: <Icon fontSize="small">table_view</Icon>,
    //   route: "/dashboard/profile",
    //   component: membership >= 1 ? <Profile /> : null,
    // },
    {
      type: "collapse",
      name: "Analyse",
      key: "analyse",
      icon: <Icon fontSize="small">receipt_long</Icon>,
      route: "/dashboard/analyse",
      component: membership >= 1 ? <AnalyseDashboard /> : <Buyplan />,
    },
    {
      type: "collapse",
      name: "Get funded",
      key: "getFunded",
      icon: <Icon fontSize="small">money</Icon>,
      route: "/dashboard/get-funded",
      component: membership >= 1 ? <FundDashboard /> : <Buyplan />,
    },
  ];

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />

      <Routes>
        {getRoutes(routes)}

        <Route path="/" element={<Presentation />} />

        {/*<Route path="*" element={<Navigate to="/" />} />*/}
        <Route path="pages/authentication/sign-in" element={<SignIn />} />
        <Route path="pages/authentication/new-password" element={<NewPassword />} />
        <Route path="pages/authentication/create-account" element={<CreateAccount />} />
        <Route path="pages/authentication/forgot-password" element={<ForgetPassword />} />
        <Route path="pages/authentication/otp-verification" element={<OtpVerification />} />
        <Route path="pages/authentication/otp-register" element={<OtpRegister />} />
        <Route path="pages/LandingPages/learn" element={<Learn />} />
        {getRoutes(dashroutes)}
      </Routes>
      {layout === "dashboard" &&
        (pathname == "/dashboard" ||
          pathname == "/dashboard/learn" ||
          pathname == "/dashboard/learn" ||
          pathname == "/dashboard/practice" ||
          pathname == "/dashboard/compete" ||
          pathname == "/dashboard/get-funded" ||
          pathname == "/dashboard/analyse") && (
          <>
            <Sidenav
              color={sidenavColor}
              //brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brand={finstoxLogo}
              //brandName="FinstoX"
              routes={dashroutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
    </ThemeProvider>
  );
}
