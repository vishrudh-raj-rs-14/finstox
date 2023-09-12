import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import bgImage from "assets/images/fund1.jpg";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file
//import MDBox from "components/MDBox";
import MKTypography from "components/MKTypography";
import { Card, CardContent } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";

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
      console.log(SymbolStockResponse.data);
      setTotalScore(20);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };
  useEffect(() => {
    fetchTotalScore();
  }, []);

  const [hoveredMark, setHoveredMark] = useState(null);
  console.log(hoveredMark);
  const [hoveredMessage, setHoveredMessage] = useState("");

  const handleMarkHover = (score) => {
    setHoveredMark(score);

    // Set the message based on the score
    if (score === totalScore) {
      setHoveredMessage(`Your Finstox score is ${totalScore}`);
    } else if (score === 40) {
      setHoveredMessage("Win 500");
    } else if (score === 80) {
      setHoveredMessage("Win 1000");
    }
  };

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
      <MDBox style={{ marginTop: "20px" }}>
        <MDBox style={{ marginTop: "20px" }}>
          <MKTypography className="gradient-text"></MKTypography>
        </MDBox>
      </MDBox>
      <MKBox pt={6} pb={12}>
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
      </MKBox>
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
