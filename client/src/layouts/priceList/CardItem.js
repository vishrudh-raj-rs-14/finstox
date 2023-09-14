import React from "react";
import "./CardItem.scss";
import PropTypes from "prop-types";

const CardItem = (props) => {
  const { objProp } = props;
  const { level, applyGradient, price, para1, para2, btnDark, tick, tick2 } = objProp;
  CardItem.propTypes = {
    objProp: PropTypes.shape({
      level: PropTypes.string.isRequired,
      applyGradient: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      para1: PropTypes.string.isRequired,
      para2: PropTypes.string.isRequired,
      btnDark: PropTypes.bool.isRequired,
      tick: PropTypes.bool.isRequired,
      tick2: PropTypes.bool.isRequired,
    }).isRequired,
  };
  return (
    <div className="card__item">
      <div className={`card__item--title ${applyGradient}`}>
        <h2>{level}</h2>
      </div>
      <div className="card__item--pricing">
        <div>
          <h1>${price}/mo</h1>
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
      <div className="card__item--btn-ul">
        <button className={btnDark ? "btn-dark" : "btn-outline"}>GET STARTED</button>
        <ul>
          <li>✔️ Practice</li>
          <li>{tick ? "✔️" : "❌"} Analysis&Improvement</li>
          <li>{tick2 ? "✔️" : "❌"} Get Funded</li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
