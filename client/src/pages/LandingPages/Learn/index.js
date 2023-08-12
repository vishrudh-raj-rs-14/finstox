import React, { useState, useEffect } from "react";
import { setLayout } from "context";
import { useMaterialUIController } from "context";
import { useLocation, useNavigate } from "react-router-dom";
import "./Modal.css";

function Learn() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set the layout
    setLayout(dispatch, "page");

    // Set a timeout to show the modal after 30 seconds
    const modalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 30 seconds in milliseconds

    // Clean up the timeout when the component unmounts or pathname changes
    return () => {
      clearTimeout(modalTimeout);
    };
  }, [dispatch, pathname]);

  const handleModalClick = () => {
    // Hide the modal
    setShowModal(false);

    // Redirect to sign-in page
    navigate("/pages/authentication/sign-in");
  };

  return (
    <div>
      <h1>Coming soon</h1>
      <div className={`page-content ${showModal ? "blur" : ""}`}>
        {/* The rest of your page content */}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <p>Please sign in to continue.</p>
              <button className="modal-button" onClick={handleModalClick}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Learn;
