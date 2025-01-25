import React from "react";

const Blog = () => {
  const blog = [
    {
      who: "1M⁺",
      title: "Customers",
    },
    {
      who: "12⁺",
      title: "Years of Excellence",
    },
    {
      who: "41⁺",
      title: "R&D Engineer",
    },
    {
      who: "78⁺",
      title: "Countries",
    },
    {
      who: "3287⁺",
      title: "Partners",
    },
    {
      who: "41⁺",
      title: "Awards Received",
    },
  ];

  return (
    <div className="bg-white text-center py-4">
      {/* Section Heading */}
      <div
        className="text-uppercase small pt-3 font-weight-bold"
        style={{ color: "#EB8D15" }}
      >
        Why Register Karo
      </div>
      <div className="font-weight-bold display-5 py-2 pb-4">
        Some Numbers are Important
      </div>

      {/* Blog Items in One Row */}
      <div className="row justify-content-center text-center">
        {blog.map((house, index) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4"
            key={index}
          >
            <div
              className="p-4"
              style={{
                textAlign: "center",
                background: "transparent",
              }}
            >
              {/* Number with Gradient */}
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
                {house.who}
              </div>
              {/* Title */}
              <div
                className="small font-weight-semibold mt-3"
                style={{ fontWeight: 700 }}
              >
                {house.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
