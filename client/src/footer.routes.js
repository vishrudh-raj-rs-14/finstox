// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
//import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

//const date = new Date().getFullYear();

export default {
  brand: {
    name: "FinstoX",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/pages/landing-pages/about-us" },
        { name: "freebies" },
        { name: "premium tools" },
        { name: "blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations" },
        { name: "bits & snippets" },
        { name: "affiliate program" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", route: "/pages/landing-pages/contact-us" },
        { name: "knowledge center" },
        { name: "custom development" },
        { name: "sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions" },
        { name: "privacy policy" },
        { name: "licenses (EULA)" },
      ],
    },
  ],
  // copyright: (
  //   <MKTypography variant="button" fontWeight="regular">
  //     All rights reserved. Copyright &copy; {date} by{" "}
  //     <MKTypography
  //       component="a"
  //       href="https://www.creative-tim.com"
  //       target="_blank"
  //       rel="noreferrer"
  //       variant="button"
  //       fontWeight="regular"
  //     ></MKTypography>
  //     .
  //   </MKTypography>
  // ),
};
