import { useLocation } from "react-router-dom";

// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
//import MKSocialButton from "components/MKSocialButton";
// import MKTypography from "components/MKTypography";
//import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Navbar from "examples/Navbars/NewNavBar/NavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
//import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
//import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
//import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
//import Download from "pages/Presentation/sections/Download";

// Presentation page components
//import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
//import SignIn from "layouts/pages/authentication/sign-in";
// Routes

// import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/fund4.jpg";
import { useEffect } from "react";
import { setLayout } from "context";
import { useMaterialUIController } from "context";
import HeroSection from "pages/LandingPages/HeroSection/HeroSection";
// import ComprehensiveServices from "pages/LandingPages/comprehensiveServices/ComprehensiveServices";
import DetailBox from "pages/LandingPages/DetailBox/DetailBox";
import DiscoverSection from "../LandingPages/DiscoverSection/DiscoverSection";

// Images
import generalImg from "../../assets/newImages/mentroshipbg.jpg";
import Pricing from "pages/LandingPages/Pricing/Pricing";
import DeviceModel from "pages/LandingPages/DeviceModel/DeviceModel";
import HorizontalScrolledcard from "pages/LandingPages/comprehensiveServices/HorizontalScrolledcard";

function Presentation() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  // const navigate = useNavigate();
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "pages/authentication/sign-in",
          label: "Sign in",
          color: "default",
        }}
        transparent
        light
      /> */}
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      {/* <ComprehensiveServices /> */}
      <HorizontalScrolledcard />
      <DetailBox props={{ generalImg }} />
      {/* <DetailBox props={{ generalImg }} /> */}
      <DeviceModel />
      <Pricing />
      <MKBox color={"white"}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
