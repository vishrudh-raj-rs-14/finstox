/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/
import React from "react";
import Dashboard from "layouts/dashboard";
//import Tables from "layouts/tables";
//import Billing from "layouts/billing";
//import RTL from "layouts/rtl";
//import Notifications from "layouts/notifications";
//import Profile from "layouts/profile";
//import SignIn from "layouts/authentication/sign-in";
//import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
//import CreateAccountPage from "layouts/pages/authentication/create-account";
import LearnDashboard from "layouts/learn";
import PracticeDashboard from "layouts/practice";
//import CompeteDashboard from "layouts/compete";
import FundDashboard from "layouts/funding";
import AnalyseDashboard from "layouts/analyse";
//import CareerDashboard from "layouts/career";

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
  {
    type: "collapse",
    name: "Practice",
    key: "practice",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/practice",
    component: <PracticeDashboard />,
  },
  {
    type: "collapse",
    name: "Get funded",
    key: "Get funded",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/dashboard/get-funded",
    component: <FundDashboard />,
  },
  {
    type: "collapse",
    name: "Analyse",
    key: "Analyse",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/dashboard/analyse",
    component: <AnalyseDashboard />,
  },
];

export default dashroutes;
