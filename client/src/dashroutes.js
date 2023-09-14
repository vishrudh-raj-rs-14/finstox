import React from "react";
import Dashboard from "layouts/dashboard";
import Icon from "@mui/material/Icon";
import LearnDashboard from "layouts/learn";
import PracticeDashboard from "layouts/practice";
import FundDashboard from "layouts/funding";
import AnalyseDashboard from "layouts/analyse";

const dashroutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Learn",
    key: "learn",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/learn",
    component: <LearnDashboard />,
  },
];
const membership = 0;
if (membership >= 1) {
  // Add Practice route for membership >= 1
  dashroutes.push({
    type: "collapse",
    name: "Practice",
    key: "practice",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/practice",
    component: <PracticeDashboard />,
  });
}

if (membership >= 2) {
  // Add Analyse route for membership >= 2
  dashroutes.push({
    type: "collapse",
    name: "Analyse",
    key: "analyse",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/dashboard/analyse",
    component: <AnalyseDashboard />,
  });
}

if (membership >= 3) {
  // Add Get funded route for membership >= 3
  dashroutes.push({
    type: "collapse",
    name: "Get funded",
    key: "getFunded",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/dashboard/get-funded",
    component: <FundDashboard />,
  });
}

export default dashroutes;
