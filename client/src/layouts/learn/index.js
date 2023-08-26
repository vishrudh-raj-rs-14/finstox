import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
import bgImage from "assets/images/bg-home.jpg";
import MKBox from "components/MKBox";

function LearnDashboard() {
  return (
    <DashboardLayout>
      <MKBox
        minHeight="60vh"
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
        <h1 style={{ color: "#fff" }}>What do you want to learn today?</h1>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "50%",
            padding: "10px",
            marginTop: "10px",
          }}
        />
      </MKBox>
      <div style={{ paddingTop: "20px" }}>
        <h4>Courses</h4>
      </div>
    </DashboardLayout>
  );
}

export default LearnDashboard;
