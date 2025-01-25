import React from "react";
import sampleImage from "./Asset/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.avif";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function About() {
  return (
    <div className="text-white py-5" style={{ background: "#1C4670" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Our Video Introductions</h2>
            <p className="mb-4">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
            <ul className="list-unstyled">
              {/* List Item 1 */}
              <li className="d-flex mb-4">
                <div
                  className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaRegLightbulb className="fs-1 text-white" />
                </div>
                <div>
                  <h3 className="h5 fw-bold">Explore ideas together</h3>
                  <p className="mb-0">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </li>
              {/* List Item 2 */}
              <li className="d-flex mb-4">
                <div
                  className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <AiOutlineFundProjectionScreen className="fs-2 text-white" />
                </div>
                <div>
                  <h3 className="h5 fw-bold">Bring those ideas to life</h3>
                  <p className="mb-0">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0 position-relative">
            <img
              src={sampleImage}
              alt="Example"
              className="img-fluid rounded-3"
            />
            <FaYoutube
              className="position-absolute top-50 start-50 translate-middle text-danger fs-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
