import React from "react";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { MdStars } from "react-icons/md";
import sample3 from "./Asset/7067548.png";
import { IoIosPlayCircle } from "react-icons/io";
import sampleImage from "./Asset/main-img.png";
import last from "./Asset/main-last.png";

const MainPage = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        background:
          "linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%)",
      }}
    >
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-flex align-items-center text-primary font-weight-semibold py-3">
            <IoIosStar className="mr-2 text-warning" />
            Google Rating
            <MdStars className="ml-2 text-warning" />
            <MdStars className="ml-1 text-warning" />
            <MdStars className="ml-1 text-warning" />
            <MdStars className="ml-1 text-warning" />
            <MdStars className="ml-1 text-warning" />
          </div>

          <h1 className="display-5 fw-semibold mb-4">
            Your Trusted Partner for Compliance Business Needs
          </h1>

          <hr className="my-4 w-25 bg-danger border-0 rounded" />

          <p className="mb-6">
            An online business compliance platform that helps entrepreneurs and{" "}
            <br />
            other individuals with various <b>registrations</b>,{" "}
            <b>tax filings</b>, and other <b>legal matters</b>.
          </p>

          <div className="row mb-4">
            <div className="col-12 col-md-4 mb-3">
              <div className="d-flex align-items-center py-3 px-4 rounded-lg w-100">
                <PiSquaresFourLight className="text-3xl mr-3" style={{ fontSize: "80px" }} />
                <div className="text-left">
                  <div
                    className="font-weight-bold"
                    style={{
                      background:
                        "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontSize: "40px",
                      fontWeight: 700,
                      whiteSpace: "nowrap", // Prevent wrapping
                    }}
                  >
                    4.5+{" "}
                  </div>{" "}
                  <p className="small mb-0">Customer Rating</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="d-flex align-items-center py-3 px-4 rounded-lg w-100">
                <IoIosPeople className="text-3xl mr-3" style={{ fontSize: "80px" }} />
                <div className="text-left">
                  <div
                    className="font-weight-bold"
                    style={{
                      background:
                        "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontSize: "40px",
                      fontWeight: 700,
                      whiteSpace: "nowrap", // Prevent wrapping
                    }}
                  >
                    200+{" "}
                  </div>{" "}
                  <p className="small mb-0">Clients</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="d-flex align-items-center py-3 px-4 rounded-lg w-100">
                <FaHandshakeSimple className="text-3xl mr-3" style={{ fontSize: "80px" }} />
                <div className="text-left">
                  <div
                    className="font-weight-bold"
                    style={{
                      background:
                        "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontSize: "40px",
                      fontWeight: 700,
                      whiteSpace: "nowrap", // Prevent wrapping
                    }}
                  >
                    99.8+{" "}
                  </div>{" "}
                  <p className="small mb-0">Financial Stability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row">
            <a
              className="btn font-weight-semibold text-white px-4 py-2 mb-3 mb-sm-0 mr-sm-4"
              style={{ background: "#1C4670" }}
              href="/"
            >
              Talk an Expert
            </a>
            <a
              className="d-flex align-items-center text-primary font-weight-semibold px-4 py-2 transition"
              href="/"
            >
              <IoIosPlayCircle className="mr-2 text-danger" />
              See how it works
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-6 position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <img
              src={sample3}
              alt="Example"
              className="img-fluid rounded-lg shadow-sm"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <div className="position-relative z-index-2">
            <img
              src={sampleImage}
              alt="Example"
              className="img-fluid rounded-lg"
            />
          </div>

          {/* Last image positioned at bottom-right */}
          <div className="position-absolute bottom-0 end-0 p-3">
            <img
              src={last}
              alt="Last Example"
              className="img-fluid rounded-lg"
              style={{ maxWidth: "150px" }} // Adjust the size as needed
            />
          </div>

          <div className="position-absolute top-50 end-0 translate-middle-y d-flex flex-column gap-3">
            <button className="btn btn-light text-dark py-2 px-4 rounded-lg shadow-sm">
              Annual Compliance
            </button>
            <button className="btn btn-light text-dark py-2 px-4 rounded-lg shadow-sm">
              Payroll Services
            </button>
            <button className="btn btn-light text-dark py-2 px-4 rounded-lg shadow-sm">
              Company Formations
            </button>
            <button className="btn btn-light text-dark py-2 px-4 rounded-lg shadow-sm">
              Annual Compliance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
