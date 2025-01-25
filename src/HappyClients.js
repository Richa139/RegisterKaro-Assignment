import React from "react";
import logo1 from "./Asset/65eba5ffa14998827c92cc01_slack-octothorpe.png";
import logo2 from "./Asset/Pinterest-logo.png";
import logo3 from "./Asset/_shopping-512.webp";
import logo4 from "./Asset/atlassian-icon-512x512-2p7fz86w.png";
import logo5 from "./Asset/download (1).png";
import logo6 from "./Asset/download (2).png";
import logo7 from "./Asset/download (3).png";
import { FaArrowRight } from "react-icons/fa";

const HappyClients = () => {
  const clients = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
    { image: logo6 },
    { image: logo7 },
  ];

  return (
    <div className="bg-white text-center mb-3 py-3">
      <h2 className="fw-bold display-6 mb-3">Our Happy Clients</h2>
      <p className="text-muted fs-6 mb-5 text-center">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
      </p>
      <div className="container">
        <div className="row justify-content-center gy-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center"
            >
              <img src={client.image} alt={`Client ${index + 1}`} className="img-fluid" style={{ maxWidth: "150px" }} />
            </div>
          ))}
        </div>
      </div>
      <a
        href="/"
        className="text-decoration-none d-flex align-items-center justify-content-center mx-auto mt-4"
        style={{ width: "150px"  , color:"#1C4670"}}
      >
        Show more
        <FaArrowRight className="ms-2" />
      </a>
    </div>
  );
};

export default HappyClients;
