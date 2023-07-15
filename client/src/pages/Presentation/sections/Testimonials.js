// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" mb={2}>
            Trusted by over
          </MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            190,477+ Traders
          </MKTypography>
          {/*<MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>*/}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Anand Goyal"
              date="1 day ago"
              review="This is an excellent product, easy to practise trading."
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Kiran Tiwari"
              date="1 week ago"
              review="I found solution to all my trading needs from FinStox. The competiton feature is awesome"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Roopa sharma"
              date="3 weeks ago"
              review="I started my trading career from FinStox and I am happy to make profit with the help of FinStox"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
