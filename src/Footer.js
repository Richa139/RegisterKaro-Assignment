import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const columns = [
    {
      heading: "Start a Business",
      links: ["About Us", "Careers", "Press", "Blog"],
    },
    {
      heading: "Government Registration",
      links: ["Pricing", "Features", "Integrations", "Security"],
    },
    {
      heading: "Compliance & Tax",
      links: ["Help Center", "Contact Support", "Community", "API Docs"],
    },
    {
      heading: "BIS & CDSCO",
      links: ["Privacy Policy", "Terms of Service", "Cookies", "Security"],
    },
  ];

  return (
    <footer className="custom-bg-blue text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <p>
              Design outstanding interfaces <br />
              with advanced Figma features in <br />a matter of minutes.
            </p>
            <div className="d-flex pt-3">
              <FaFacebook className="me-4 fs-4" />
              <AiFillGoogleCircle className="me-4 fs-4" />
              <FaApple className="me-4 fs-4" />
              <RiInstagramFill className="me-4 fs-4" />
            </div>
          </div>
          {columns.map((column, index) => (
            <div className="col-lg-2 col-md-6" key={index}>
              <h5 className="custom-heading-yellow mb-3">{column.heading}</h5>
              <ul className="list-unstyled">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a
                      href="#"
                      className="text-white text-decoration-none custom-hover-gray"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5 pt-4">
        <div>
          <button className="btn custom-btn-yellow">
            <FaArrowAltCircleUp className="custom-icon-white" />
          </button>
        </div>
        <p className="mt-2 text-white">
          © 2025 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
