import PropTypes from "prop-types";

export default function DetailBox({ generalImg }) {
  // propTypes is the correct spelling
  DetailBox.propTypes = {
    generalImg: PropTypes.string.isRequired,
  };
  // console.log(props);
  return (
    <div className="flex lg:flex-row-reverse sm:w-full flex-col items-center justify-center p-4 sm:p-16 md:p-24">
      <div className="flex lg:flex-row-reverse lg:py-20 flex-col rounded-md shadow-lg sm:p-4 w-full justify-around mx-10 bg-white justify-space-between ">
        <img
          className="w-auto h-48 lg:h-96 object-cover sm:h-64 md:h-96 lg:w-1/2 min-h-full rounded-md"
          src={generalImg}
          alt="Affordable Access"
        />
        <div className="p-4">
          <h2 className="mt-4 text-lg lg:text-4xl font-semibold sm:text-2xl md:text-3xl">
            Affordable Access
          </h2>
          <ul className="lg:mt-20 text-md text-gray-500 sm:text-base ">
            <li className="mt-4 text-xl lg:text-3xl">
              ⭐ Learn by doing and taking inspiration from others
            </li>
            <li className="mt-4 text-xl lg:text-3xl">
              ⭐ Talk to people about design, marketing, web3, and a lot more!
            </li>
            <li className="mt-4 text-xl lg:text-3xl">
              ⭐ Upskill by participating in hackathons, live events, and speaker sessions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
