import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import bgImage from "assets/images/fund1.jpg";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file
//import MDBox from "components/MDBox";
import MKTypography from "components/MKTypography";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
//import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

//import FastfoodIcon from "@mui/icons-material/Fastfood";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import HotelIcon from "@mui/icons-material/Hotel";
// import RepeatIcon from "@mui/icons-material/Repeat";

// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

// const ZeroIcon = () => <FontAwesomeIcon icon={faCircle} />;

function FundDashboard() {
  const CardComponent = ({ title, content }) => (
    <Card>
      <CardContent>
        <MKTypography>{title}</MKTypography>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
  CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  const [totalScore, setTotalScore] = useState(0);
  console.log(totalScore);
  const fetchTotalScore = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("http://localhost:4337/getScore", {
        email: storedUserEmail,
      });
      setTotalScore(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };
  useEffect(() => {
    fetchTotalScore();
  }, []);

  return (
    <DashboardLayout>
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div className="fund-dashboard-container">
          <p className="fund-text">QUALIFY NOW</p>
          <p className="fund-text">AND GET FUNDED</p>
          <p className="fund-text">UPTO ₹1000000</p>
          <Link to="/dashboard/practice">
            <button className="fund-button">Start Trading</button>
          </Link>
        </div>
      </MKBox>
      {/* <MDBox style={{ marginTop: "20px" }}>
        <MDBox style={{ marginTop: "20px" }}>
          <MKTypography className="gradient-text"></MKTypography>
        </MDBox>
      </MDBox> */}
      <MDBox style={{ marginTop: "40px", marginBottom: "60px", bgcolor: "dark" }}>
        <Typography variant="h4" component="div" className="score-text">
          Your Finstox Score: {totalScore}
        </Typography>
      </MDBox>

      <MDBox>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <p>0</p>
              </TimelineDot>
              <TimelineConnector sx={{ height: "75px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Initaial Score
              </Typography>
              {/* <Typography>Because you need strength</Typography> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ left: "25%" }} color="primary">
                <p>25</p>
              </TimelineDot>
              <TimelineConnector sx={{ height: "30px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Level 1
              </Typography>
              <Typography>Win upto 500</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ left: "35%" }} color="primary">
                <p>35</p>
              </TimelineDot>
              <TimelineConnector sx={{ height: "30px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Level 2
              </Typography>
              <Typography>Win upto 1000</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ left: "45%" }} color="primary">
                <p>45</p>
              </TimelineDot>
              <TimelineConnector sx={{ height: "45px", bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Level 3
              </Typography>
              <Typography>Win upto 5000</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: "20px", bgcolor: "secondary.main" }} />
              <TimelineDot style={{ left: "60%" }} color="secondary">
                <p>60</p>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Level 4
              </Typography>
              <Typography>Win upto 10000</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ left: "100%" }} color="primary">
                <p>100</p>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Level 5
              </Typography>
              <Typography>Explore FinstoX for free</Typography>
            </TimelineContent>
          </TimelineItem> */}
        </Timeline>
      </MDBox>
    </DashboardLayout>
  );
}

export default FundDashboard;

{
  /* <MDBox style={{ marginTop: "20px" }}>
        <MDBox style={{ marginTop: "20px" }}>
          <MKTypography className="gradient-text"></MKTypography>
        </MDBox>
      </MDBox>
      <MDBox style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardComponent title="Free demo stage" content="Explore and learn the platform" />
          </Grid>
          <Grid item xs={4}>
            <CardComponent title="Qualification stages" content="Meet the trading requirements" />
          </Grid>
          <Grid item xs={4}>
            <CardComponent title="Funded trading account" content="Start trading with real funds" />
          </Grid>
        </Grid>
      </MDBox> */
}

// const [hoveredMark, setHoveredMark] = useState(null);
// console.log(hoveredMark);
// const [hoveredMessage, setHoveredMessage] = useState("");

// const handleMarkHover = (score) => {
//   setHoveredMark(score);

//   // Set the message based on the score
//   if (score === totalScore) {
//     setHoveredMessage(`Your Finstox score is ${totalScore}`);
//   } else if (score === 40) {
//     setHoveredMessage("Win 500");
//   } else if (score === 80) {
//     setHoveredMessage("Win 1000");
//   }
// };

{
  /* <MKBox pt={6} pb={12}>
        <div className="milestone-line">
          <div
            className="mark"
            style={{ left: `${totalScore}%` }}
            onMouseEnter={() => handleMarkHover(totalScore)}
          >
            <span className="score-popup">{hoveredMessage}</span>
          </div>
          <div
            className="mark win-mark"
            style={{ left: "40%" }}
            onMouseEnter={() => handleMarkHover(40)}
          >
            <span className="score-popup">{hoveredMessage}</span>
          </div>
          <div
            className="mark win-mark"
            style={{ left: "80%" }}
            onMouseEnter={() => handleMarkHover(80)}
          >
            <span className="score-popup">{hoveredMessage}</span>
          </div>
        </div>
      </MKBox> */
}

{
  /* <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              9:30 am
            </TimelineOppositeContent> */
}
