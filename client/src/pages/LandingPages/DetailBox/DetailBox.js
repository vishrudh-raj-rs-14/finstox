import PropTypes from "prop-types";
import AffordableSection from "./AffordableSection";

// images new

import RealFunding from "./RealFunding";
import Milestone from "./Milestone";

export default function DetailBox() {
  // propTypes is the correct spelling
  DetailBox.propTypes = {
    generalImg: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
  };
  // console.log(props);
  return (
    <>
      <AffordableSection />
      <RealFunding />
      <Milestone />
    </>
  );
}
