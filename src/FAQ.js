import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const faqData = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-3">
    <div
      className="d-flex justify-content-between align-items-center bg-light border p-3 rounded"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <span className="fw-bold">{question}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && (
      <div className="mt-2 p-3 bg-white border rounded">
        <p className="text-muted">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <small className="text-uppercase " style={{ color: "#EB8D15" }}>
          FAQ
        </small>
        <h2 className="fw-bold text-black">Frequently Asked Questions</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <a
          className="btn d-inline-flex align-items-center"
          href="/"
          style={{ backgroundColor: " #1C4670", color: "white" }}
        >
          Show more <FaArrowRight className="ms-2" />
        </a>
      </div>
    </div>
  );
};

export default FAQ;
