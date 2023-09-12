// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
//import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
//import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import axios from "axios";
import React, { useEffect, useState } from "react";
//import { Card } from "@mui/material";
//import MDTypography from "components/MDTypography";
//import DataTable from "examples/Tables/DataTable";

// function getCookie(name) {
//   const value = "; " + document.cookie;
//   const parts = value.split("; " + name + "=");
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    // Get the token from localStorage
    const jwtCookie = localStorage.getItem("jwt");
    axios
      .get("http://localhost:4337/checkAuthentication", {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
        },
      })
      .then((response) => {
        console.log(response.data.status);
        // If the response status is "ok", the user is authenticated
        if (response.data.status != "ok") {
          //setIsLoggedIn(true);
          window.location.href = "/pages/authentication/sign-in";
        }
      })
      .catch((error) => {
        console.error("Error checking authentication:", error);
        //setIsLoggedIn(false);
        window.location.href = "/pages/authentication/sign-in";
      });
  }, []);

  const [totalProfit, setTotalProfit] = useState(0);
  const fetchTotalProfit = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("http://localhost:4337/getTotalProfit", {
        email: storedUserEmail,
      });
      setTotalProfit(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchTotalProfit();
  }, []);
  //total participated
  const [totalAction, setTotalAction] = useState(0);
  const fetchTotalAction = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("http://localhost:4337/getSuccess", {
        email: storedUserEmail,
      });
      setTotalAction(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchTotalAction();
  }, []);

  const [totalRoi, setTotalRoi] = useState(0);
  const fetchTotalRoi = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("http://localhost:4337/getTotalReturns", {
        email: storedUserEmail,
      });
      setTotalRoi(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchTotalRoi();
  }, []);

  const [chartData, setChartData] = useState({});
  const fetchchartData = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("http://localhost:4337/getTradesDay", {
        email: storedUserEmail,
      });
      setChartData(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchchartData();
  }, []);

  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Success Rate"
                count={totalAction + "%"}
                // percentage={{
                //   color: "success",
                //   amount: "+55%",
                //   label: "than lask week",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Ranking"
                count="2,300"
                // percentage={{
                //   color: "success",
                //   amount: "+3%",
                //   label: "than last month",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="ROI"
                count={totalRoi + "%"}
                // percentage={{
                //   color: "success",
                //   amount: "+1%",
                //   label: "than yesterday",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Profit"
                count={"₹" + totalProfit}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Trades"
                  description="Last week daily trades"
                  //date="2 days ago"
                  chart={chartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Revenue"
                  // description={
                  //   <>
                  //     (<strong>+15%</strong>) increase in today revenue.
                  //   </>
                  // }
                  description="Last week daily revenue"
                  //date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Profit"
                  description="Last week daily profit"
                  //date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
