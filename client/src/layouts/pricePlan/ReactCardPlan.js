import React from "react";
import PropTypes from "prop-types";

function ReactCardPlan({ plan, features }) {
  ReactCardPlan.propTypes = {
    plan: PropTypes.string.isRequired, // plan prop should be a required string
    features: PropTypes.arrayOf(PropTypes.string).isRequired, // features prop should be a required array of strings
  };
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{plan.plan}</h5>
          <h6 className="card-price text-center">
            ${plan.Fee}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {plan.plan !== "FREE" ? <strong>{plan.user}</strong> : plan.user}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {plan.storage}
            </li>
            {features.map((feature, index) => {
              return (
                <React.Fragment key={index}>
                  {plan.feature_flags[index] !== 0 ? (
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      {feature === "Free Subdomain" && plan.plan === "PRO" ? (
                        <>
                          <strong>Unlimited</strong> {feature}{" "}
                        </>
                      ) : (
                        feature
                      )}
                    </li>
                  ) : (
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      {feature === "Free Subdomain" && plan.plan === "PRO" ? (
                        <>
                          <strong>Unlimited</strong> {feature}{" "}
                        </>
                      ) : (
                        feature
                      )}
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
          <button className="btn btn-block btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  );
}

export default ReactCardPlan;
