import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function IconHeadings() {
  const headings = [
    {
      text: "Fill up Application Form",
      icon: <FaCheckCircle />,
      color: "#eb5757",
    },
    {
      text: "Make Online Payment",
      icon: <FaTimesCircle />,
      color: "#27ae60",
    },
    {
      text: "Executive will Process Application",
      icon: <FaInfoCircle />,
      color: "#f2994a",
    },
    {
      text: "Get Confirm Mail",
      icon: <FaExclamationCircle />,
      color: "#828282",
    },
  ];

  return (
    <div className="p-4 text-center" style={{ background: "#FFA229" }}>
      <div className="row justify-content-evenly">
        {headings.map((heading, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-3 d-flex align-items-center my-3"
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white me-2"
              style={{
                backgroundColor: heading.color,
                width: "50px",
                height: "50px",
              }}
            >
              {heading.icon}
            </div>
            <h2 className="h6 fw-semibold mb-0">{heading.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconHeadings;
