import React from "react";
import sampleImage from "./Asset/vecteezy_smartphone-and-mobile-phone_11047522.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function AppStore() {
  return (
    <div
      className="container-fluid text-white ps-5 pe-5"
      style={{ overflow: "hidden", background: "#1C4670" }}
    >
      <div className="row align-items-center g-5">
        {/* Left Section */}
        <div className="col-md-6 text-left px-4">
          <h2 className="display-6 fw-bold mb-3 text-center text-md-start">
            Manage Your Services by your <br /> Mobile Phone
          </h2>
          <p className="text-white mb-4 text-center text-md-start">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <p className="mb-3 text-center text-md-start">Get the App</p>
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
            <button className="btn btn-light d-flex align-items-center me-md-3 mb-3 mb-md-0 shadow-sm">
              <FaApple className="fs-2 text-success me-3" />
              <div className="text-start">
                <small>Get it on</small>
                <div className="fw-bold">App Store</div>
              </div>
            </button>
            <button className="btn btn-light d-flex align-items-center shadow-sm">
              <FaGooglePlay className="fs-2 text-success me-3" />
              <div className="text-start">
                <small>Get it on</small>
                <div className="fw-bold">GOOGLE PLAY</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 p-2 d-flex justify-content-center position-relative">
          {/* First Phone - Hidden on Mobile */}
          <img
            src={sampleImage}
            alt="Partially visible phone"
            className="img-fluid rounded position-absolute d-none d-md-block"
            style={{
              transform: "translate(-50%, 50%)",
              zIndex: 1,
              height: "70%",
              bottom: "3%",
              left: "4%",
            }}
          />
          {/* Second Phone - Hidden on Mobile */}
          <img
            src={sampleImage}
            alt="Fully visible phone"
            className="img-fluid rounded position-relative d-none d-md-block"
            style={{ zIndex: 2, height: "90%" }}
          />
          {/* Overlay Text - Also Hidden on Mobile */}
          <h2
            className="position-absolute fw-bold text-primary d-none d-md-block"
            style={{
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              zIndex: 3,
            }}
          >
            Register<span className="text-secondary">Karo</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
