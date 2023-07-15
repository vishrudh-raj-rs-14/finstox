import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { useNavigate } from "react-router-dom";
//import MKButton from "components/MKButton";

function Counters() {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate("pages/LandingPages/learn");
  };
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <MKBox onClick={handleLearnClick}>
              <DefaultCounterCard
                count={20}
                suffix="+"
                title="Learn"
                description="Lots of Materials provided to learn trading tricks from base to advance levels"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Practise"
              description="This section helps users to practise what they have learned and analyse their performance"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={1000}
              suffix="+"
              title="Compete"
              description="Competers from worldwide, where users can analyse their trade performance and view ranking"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
