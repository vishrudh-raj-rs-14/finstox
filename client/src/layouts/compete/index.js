import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { createChart } from "lightweight-charts";
import React, { useEffect } from "react";

function CompeteDashboard() {
  useEffect(() => {
    const chart = createChart(document.getElementById("chart-container"), {
      width: 800,
      height: 500,
    });

    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 },
    ]);
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <div id="chart-container"></div>
    </DashboardLayout>
  );
}

export default CompeteDashboard;
