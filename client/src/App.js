import { useState, useEffect } from "react";
import { Routes, Route, /*Navigate,*/ useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import dashroutes from "dashroutes";
import SignIn from "layouts/pages/authentication/sign-in";
import CreateAccount from "layouts/pages/authentication/create-account";
import { useMaterialUIController, setMiniSidenav /*,setOpenConfigurator*/ } from "context";
import Sidenav from "examples/Sidenav";
//import Configurator from "examples/Configurator";
//import MDBox from "components/MDBox";

//import brandWhite from "assets/images/logo-ct.png";
//import brandDark from "assets/images/logo-ct-dark.png";
import finstoxLogo from "assets/images/finstox-logo.png";

//import Icon from "@mui/material/Icon";
import Learn from "pages/LandingPages/Learn";
import Graph from "pages/Graph";

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
    //openConfigurator,
    layout,
    sidenavColor,
    //transparentSidenav,
    //whiteSidenav,
    //darkMode,
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
  //const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // const configsButton = (
  //   <MDBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.25rem"
  //     height="3.25rem"
  //     bgColor="white"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="dark"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="small" color="inherit">
  //       settings
  //     </Icon>
  //   </MDBox>
  // );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        {/*<Route path="*" element={<Navigate to="/" />} />*/}
        <Route path="pages/authentication/sign-in" element={<SignIn />} />
        <Route path="pages/authentication/create-account" element={<CreateAccount />} />
        <Route path="pages/LandingPages/learn" element={<Learn />} />
        <Route path="pages/Graph" element={<Graph />} />
        {getRoutes(dashroutes)}
      </Routes>
      {layout === "dashboard" &&
        (pathname == "/dashboard" ||
          pathname == "/dashboard/learn" ||
          pathname == "/dashboard/learn" ||
          pathname == "/dashboard/practice" ||
          pathname == "/dashboard/compete") && (
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
            {/* <Configurator />
          {configsButton} */}
          </>
        )}
    </ThemeProvider>
  );
}
