import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
import PropTypes from "prop-types";
import bgImage from "assets/images/fund1.jpg";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import "./FundDashboard.css"; // Import the CSS file
import MDBox from "components/MDBox";
import MKTypography from "components/MKTypography";
import { Card, CardContent, Grid } from "@mui/material";

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
      </MDBox>
    </DashboardLayout>
  );
}

export default FundDashboard;
