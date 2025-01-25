import React from "react";
import img1 from "./Asset/e7dda523e77516da100b1a88dbaecb3c.jpeg";
import img2 from "./Asset/adefff9c6fad99774e0aa7808b2270ab.jpeg";
import img4 from "./Asset/76ceafadb9f758a56d19a086f7505a80.jpeg";
import img5 from "./Asset/6b913ddf85158d3f3246fba7da982400.jpeg";
import img6 from "./Asset/ab8c0e971321e0daafdbc3bc3adffb48.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blog = [
    {
      image: img1,
      who: "Prabhash Mishra",
      time: "1 Jan 2023",
      title: "Small Business & startup",
      info: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Tax & Audit",
      tag2: "Management",
    },
    {
      image: img2,
      who: "Mahesh Kumar",
      time: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      info: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag2: "Research",
      tag3: "Tax",
      tag4: "Compliance",
    },
    {
      image: img1,
      who: "Rakhi Verma",
      time: "1 Jan 2023",
      title: "Growing Business Package",
      info: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Audit",
      tag3: "Money Back",
    },
    {
      image: img4,
      who: "Karan Kumar",
      time: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      info: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Money",
      tag2: "Management",
    },
    {
      image: img5,
      who: "Prabhash Mishra",
      time: "1 Jan 2023",
      title: "Small Business & startup",
      info: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "",
      tag2: "News",
      tag3: "Tax & Return",
      tag4: "Audit",
    },
    {
      image: img6,
      who: "Miss Nora",
      time: "1 Jan 2023",
      title: "Small Business & startup",
      info: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Private Limited ",
      tag2: "Customer ",
      tag3: "",
      tag4: "",
    },
  ];

  return (
    <div className="container py-5">
      <div
        className="text-sm pt-8 text-center text-uppercase"
        style={{ color: "#EB8D15" }}
      >
        Explore Our Blogs
      </div>
      <div className="fw-bold display-5 pb-3 text-center">
        Accelerate Digital Transformation
      </div>

      <div className="row g-4">
        {blog.map((house, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="card shadow-lg h-100 border-0">
              <img
                src={house.image}
                className="card-img-top"
                alt={house.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex align-items-center text-muted mb-3">
                  <div
                    className="fw-bold text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {house.who}
                  </div>
                  <div
                    className="ms-2 text-grey"
                    style={{ fontSize: "0.8rem", color: "#6c757d" }}
                  >
                    {house.time}
                  </div>
                </div>
                <h5 className="card-title fs-5 font-weight-bold">
                  {house.title}
                </h5>
                <p className="card-text text-muted">{house.info}</p>
                <div className="d-flex flex-wrap gap-2">
                  {house.tag1 && (
                    <span className="badge bg-success text-white">
                      {house.tag1}
                    </span>
                  )}
                  {house.tag2 && (
                    <span className="badge bg-primary text-white">
                      {house.tag2}
                    </span>
                  )}
                  {house.tag3 && (
                    <span className="badge bg-info text-white">
                      {house.tag3}
                    </span>
                  )}
                  {house.tag4 && (
                    <span className="badge bg-danger text-white">
                      {house.tag4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        className="btn d-flex align-items-center justify-content-center mt-4 mx-auto text-white"
        href="/"
        style={{
          width: "fit-content",
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#1C4670",
        }}
      >
        Show more blogs
        <FaArrowRight className="ms-2" />
      </a>
    </div>
  );
};

export default Blog;
