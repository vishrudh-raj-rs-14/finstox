import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import "./price.css";
import ReactPricingCard from "./ReactPricingCard";
function PricePlan() {
  return (
    <DashboardLayout>
      <div className="pricing py-5">
        {/* <PricingCard /> */}
        <ReactPricingCard />
      </div>
    </DashboardLayout>
  );
}

export default PricePlan;
