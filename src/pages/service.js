import React from "react";
import "./service.css";
import { FaLaptopCode, FaPaintBrush, FaPenNib, FaSketch, FaSearch, FaBullhorn, FaCogs, FaChartBar } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode />, title: "Website Development" },
  { icon: <FaPaintBrush />, title: "Graphic Designing" },
  { icon: <FaPenNib />, title: "UI/UX Web Designing" },
  { icon: <FaSketch />, title: "Training & Placements" },
  { icon: <FaSearch />, title: "SEO & Content Writing" },
  { icon: <FaBullhorn />, title: "Digital Market Planning" },
  { icon: <FaCogs />, title: "Business Management" },
  { icon: <FaChartBar />, title: "Market Data Analyzing" },
];

const Service = () => {
  return (
    <div className="service-container">
      {/* Top section */}
      <div className="header-section">
        <h1>Services</h1>
      </div>

      {/* Services grid */}
      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <div className="service-title">{item.title}</div>
          </div>
        ))}
      </div>

      <div className="cta-box">
        <div className="cta-left">
            
            <p>Contact Us:</p>
            <h3> 987 233 0000</h3>
        </div>
        <div className="cta-center">
            <p>Want to start a project or get consultation?</p>
        </div>
        <div className="cta-right">
          <button className="cta-btn">Get in Touch</button>
        </div>
      </div>

      <div className="process-section">
        <h2>Process <span className="highlight">We Follow</span></h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <p>Planning the Project</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <p>Design & Development</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <p>Launch Product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
