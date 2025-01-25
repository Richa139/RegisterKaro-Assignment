import React, { useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample1 from "./Asset/577fecc62a4c5235cee2977557cb6590.jpg";

const customers = [
  {
    name: "LusDen",
    review: "magna aliqua. Ut",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: sample1,
  },
  {
    name: "Court",
    review: "magna aliqua. Ut",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: sample1,
  },
  {
    name: "Zen Court",
    review: "magna aliqua. Ut",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: sample1,
  },
  {
    name: "Zen ",
    review: "magna aliqua. Ut",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: sample1,
  },
];

const CustomerFeedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // For larger tablets and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="py-5 text-white" style={{ background: "#1C4670" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold display-6 mb-0">What people say about us</h5>
          <div className="d-none d-md-flex justify-content-between align-items-center">
          <button
              onClick={previous}
              className="btn btn-secondary me-2 rounded-circle"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="btn btn-secondary rounded-circle"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="position-relative">
          <Slider ref={sliderRef} {...settings}>
            {customers.map((customer, index) => (
              <div key={index} className="px-3">
                <div className="card h-100 shadow-lg">
                  <div className="card-body">
                    <div className="mb-3">
                      <FaQuoteLeft className="text-primary fs-2" />
                    </div>
                    <p className="card-text text-muted">{customer.feedback}</p>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <img
                      src={customer.image}
                      alt="Customer"
                      className="rounded-circle me-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{customer.name}</h6>
                      <p className="text-muted small mb-0">{customer.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
