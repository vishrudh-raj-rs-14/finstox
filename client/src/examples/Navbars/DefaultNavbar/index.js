// import { Fragment, useState, useEffect } from "react";

// // react-router components
// import { Link } from "react-router-dom";

// // prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";

// // @mui material components
// // import Container from "@mui/material/Container";
// import Icon from "@mui/material/Icon";
// import Popper from "@mui/material/Popper";
// import Grow from "@mui/material/Grow";
// import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
// import MuiLink from "@mui/material/Link";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// // import MKButton from "components/MKButton";

// // Material Kit 2 React example components
// import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
// // import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
// //import SignIn from "layouts/pages/authentication/sign-in";

// // Material Kit 2 React base styles
// import breakpoints from "assets/theme/base/breakpoints";
import NavBar from "../NewNavBar/NavBar";

function DefaultNavbar() {
  // const [dropdown, setDropdown] = useState("");
  // const [dropdownEl, setDropdownEl] = useState("");
  // const [dropdownName, setDropdownName] = useState("");
  // const [nestedDropdown, setNestedDropdown] = useState("");
  // const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  // const [nestedDropdownName, setNestedDropdownName] = useState("");
  // const [arrowRef, setArrowRef] = useState(null);
  // const [mobileNavbar, setMobileNavbar] = useState(false);
  // const [mobileView, setMobileView] = useState(false);

  return <NavBar />;
}

// Setting default values for the props of DefaultNavbar
// DefaultNavbar.defaultProps = {
//   brand: "FinstoX",
//   transparent: false,
//   light: false,
//   action: false,
//   sticky: false,
//   relative: false,
//   center: false,
// };

// Typechecking props for the DefaultNavbar
// DefaultNavbar.propTypes = {
//   brand: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   transparent: PropTypes.bool,
//   light: PropTypes.bool,
//   action: PropTypes.oneOfType([
//     PropTypes.bool,
//     PropTypes.shape({
//       type: PropTypes.oneOf(["external", "internal"]).isRequired,
//       route: PropTypes.string.isRequired,
//       color: PropTypes.oneOf([
//         "primary",
//         "secondary",
//         "info",
//         "success",
//         "warning",
//         "error",
//         "dark",
//         "light",
//         "default",
//         "white",
//       ]),
//       label: PropTypes.string.isRequired,
//     }),
//   ]),
//   sticky: PropTypes.bool,
//   relative: PropTypes.bool,
//   center: PropTypes.bool,
// };

export default DefaultNavbar;
