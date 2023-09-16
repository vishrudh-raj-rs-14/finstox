import React from "react";
import ReactCardPlan from "./ReactCardPlan";
function ReactPricingCard() {
  const plans = [
    {
      plan: "BASIC",
      Fee: 0,
      user: "Single User",
      storage: "5GB Storage",
      feature_flags: [1, 0, 0] /* 1 , 0 - represents flag */,
    },
    {
      plan: "MEDIUM",
      Fee: 9,
      user: "5 Users",
      storage: "50GB Storage",
      feature_flags: [1, 1, 0] /* 1 , 0 - represents flag */,
    },
    {
      plan: "PREMIUM",
      Fee: 49,
      user: "Unlimited Users",
      storage: "150GB Storage",
      feature_flags: [1, 1, 1] /* 1 , 0 - represents flag */,
    },
  ];

  const features = ["Practice", "Analysis", "Get funded"];
  return (
    <div className="container">
      <div className="row">
        {plans.map((plan, index) => {
          return <ReactCardPlan key={index} plan={plan} features={features} />;
        })}
      </div>
    </div>
  );
}

export default ReactPricingCard;
