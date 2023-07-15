// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/bg-home.jpg";
import bgBack from "assets/images/bg-home.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Learn from
                    <br />
                    Scratch
                  </>
                }
                description="All the materials that you need to begin with trading is provided here."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="Create a free account with Finstox and start your trading journey"
                action={{
                  type: "internal",
                  route: "/pages/authentication/create-account",
                  label: "Create Account",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Personalized Stock Trading Courses"
                  description="FinstoX offers customized courses based on the user's mistakes in their 15-day demo trading sessions. 
                  This unique feature allows users to learn from their mistakes and improve their trading skills and knowledge."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Funding Based on Knowledge and Analysis"
                  description="FinstoX provides funds to users based on their knowledge and analysis. 
                  Our algorithm formula analyses the user's knowledge and provides them with funds accordingly, allowing users to invest in the stock market even if they lack funds."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Profit Milestone Rewards"
                  description="FinstoX rewards users for achieving profit milestones. This unique feature incentivizes users to invest and succeed on our platform."
                />
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
