import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
//import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import LiveChart from "./LiveChart";

function PractiseDashboard() {
  return (
    <DashboardLayout>
      <h1>Live chart of IBM</h1>
      <LiveChart symbol="IBM" />
    </DashboardLayout>
  );
}

export default PractiseDashboard;
