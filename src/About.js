import React from "react";
import sampleImage from "./Asset/sample1.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const text = {
  description: (
    <>
      We have been using Intelegencia as our DevOps vendor for our field service
      applications over the last couple of years and I’m extremely pleased with
      their performance, ability to execute, and willingness to adapt in our
      ever-changing environment.
      <br />
      Perry is an outstanding leader who is fanatical about customer
      satisfaction. He has built a solid team which has consistently delivered
      on projects thereby exceeding everyone’s expectations.
      <br />
      <br />I would strongly recommend their services to any organization that
      is looking for solid, reliable, and predictable outcomes.
    </>
  ),
};

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text section */}
        <div className="col-md-6">
          <div
            className="text-uppercase mb-3"
            style={{ fontSize: "0.875rem", color: "#EB8D15" }}
          >
            Welcome to RegisterKaro.in
          </div>
          <h3 className="display-4 fw-bold">
            About <span style={{ color: " #EB8D15" }}>Register Karo</span>
          </h3>
          <p className="mt-4 mb-5">{text.description}</p>
          {/* <button className="btn btn-primary d-flex align-items-center py-2 px-4 rounded-lg shadow-lg">
            <span>Learn More</span>
          </button> */}
          <a
            className="btn d-flex align-items-center mt-4 text-white"
            href="/"
            style={{
              width: "fit-content",
              padding: "10px 20px",
              borderRadius: "8px",
              background: "#1C4670",
            }}
          >
            Learn More {"    "}
            <FaArrowAltCircleRight className="ml-2" />
          </a>
        </div>

        {/* Image section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <img
            src={sampleImage}
            alt="Example"
            className="img-fluid rounded border border-amber-600"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
