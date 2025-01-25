import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Connect = () => {
  return (
    <div
      className="text-center p-5"
      style={{
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
      }}
    >
      {/* Industry text */}
      <div className="text-white text-uppercase font-weight-bold pt-8 tracking-widest">
        1% of the industry
      </div>

      {/* Main Heading */}
      <div className="text-white font-weight-bold display-6 p-3 pb-10">
        Welcome to your new Digital Reality, Now.
      </div>

      {/* Email input and button */}
      <div className="p-4">
        <div className="input-group justify-content-center">
          <input
            type="text"
            placeholder="Enter your Mail"
            className="form-control rounded-left border-0 shadow-lg"
            style={{ maxWidth: "350px" }}
          />
          <button className="btn btn-warning rounded-right shadow-lg px-4">
            Submit
          </button>
        </div>
      </div>

      {/* Features with icons */}
      <div className="row justify-content-center">
        {/* Feature 1 */}
        <div className="col-12 col-md-4 d-flex align-items-center mb-4 mb-md-0">
          <div className="d-flex align-items-center justify-content-center text-white mr-3">
            <IoCheckmarkDoneCircle className="fs-3 text-white" />
          </div>
          <h5 className="text-white font-weight-semibold ms-3">
            Instant Result
          </h5>
        </div>

        {/* Feature 2 */}
        <div className="col-12 col-md-4 d-flex align-items-center mb-4 mb-md-0">
          <div className="d-flex align-items-center justify-content-center text-white mr-3">
            <IoCheckmarkDoneCircle className="fs-3 text-white" />
          </div>
          <h5 className="text-white font-weight-semibold ms-3">
            User-friendly Interface
          </h5>
        </div>

        {/* Feature 3 */}
        <div className="col-12 col-md-4 d-flex align-items-center mb-4 mb-md-0">
          <div className="d-flex align-items-center justify-content-center text-white mr-3">
            <IoCheckmarkDoneCircle className="fs-3 text-white" />
          </div>
          <h5 className="text-white font-weight-semibold ms-3">
            Personalized Interface
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Connect;
