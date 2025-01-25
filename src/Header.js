import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./Asset/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Blue Background Section for Contact Info */}
      <div className="text-white py-2 d-none d-sm-flex" style={{ background: "#1C4670" }}>
  <div className="d-flex justify-content-end align-items-center flex-wrap w-100">
    {/* Email Section */}
    <a href="mailto:contact@example.com" className="text-white d-flex align-items-center fs-7 mb-2 mb-sm-0">
      <FaEnvelope className="mr-2" />
      contact@example.com
    </a>

    {/* Divider between Email and Phone */}
    <span className="text-white mx-3 fs-7 d-none d-sm-inline-block">|</span>

    {/* Phone Number Section */}
    <a href="tel:+1234567890" className="text-white d-flex align-items-center fs-7 mb-2 mb-sm-0">
      <FaPhoneAlt className="mr-2" />
      +123 456 7890
    </a>

    {/* Divider between Phone and Social Media */}
    <span className="text-white mx-3 fs-7 d-none d-sm-inline-block">|</span>

    {/* Social Media Icons */}
    <div className="d-flex align-items-center">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FaLinkedin />
      </a>
    </div>
  </div>
</div>




      {/* Main Header Section */}
      <header className="py-3 shadow w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <h2 className="font-weight-bold text-primary">
            <img src={logo} alt="logo" className="img-fluid" style={{ maxWidth: "150px" }} />
          </h2>

          {/* Hamburger Menu on Mobile */}
          <button
            className="d-block d-lg-none text-white"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu size={30} />
          </button>

          {/* Navigation Links for Desktop */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <a className="text-decoration-none text-dark hover:text-primary mx-2" href="/">Home</a>
            <a className="text-decoration-none text-dark hover:text-primary mx-2" href="/">Our Services</a>
            <a className="text-decoration-none text-dark hover:text-primary mx-2" href="/">Blog</a>
            <a className="text-decoration-none text-dark hover:text-primary mx-2" href="/">Contact Us</a>
            <a className="text-decoration-none text-dark hover:text-primary mx-2" href="/">About us</a>
            <a className="text-decoration-none text-dark hover:text-primary mx-2" href="/">
              <CiSearch />
            </a>
            <a className="btn btn-secondary text-white px-4 py-2 transition" href="/">
              Talk An Expert
            </a>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        {menuOpen && (
          <div className="d-block d-lg-none mt-4 p-3 bg-dark text-white">
            <a className="d-block text-white text-decoration-none mb-2" href="/">Home</a>
            <a className="d-block text-white text-decoration-none mb-2" href="/">Our Services</a>
            <a className="d-block text-white text-decoration-none mb-2" href="/">Blog</a>
            <a className="d-block text-white text-decoration-none mb-2" href="/">Contact Us</a>
            <a className="d-block text-white text-decoration-none mb-2" href="/">About Us</a>
            <a className="d-block text-white text-decoration-none mb-2" href="/">
              <CiSearch />
            </a>
            <a className="d-block text-white text-decoration-none mb-2" href="/">
              Talk An Expert
            </a>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
