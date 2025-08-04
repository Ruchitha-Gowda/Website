import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './about.css';
import Js1 from "../images/js1.jpg";

export default function About() {
  return (
    <div className="job-page">
      <div className="hero">
        <h1>About Cloudisian</h1>
        <p>Transforming Ideas to Impact</p>
      </div>

      <section className="featured">
        <h2>What We Do?</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", color: "#C0C0C0" }}>
          We empower individuals and organisations to thrive in an ever-changing digital world.
          Cloudisian is a forward-thinking IT consulting and services firm committed to driving growth,
          fostering innovation, and delivering excellence through customised solutions.
        </p>

        <div className="about-section">
          <div className="about-box">
            <h3>Individual & Corporate Training</h3>
            <p>
              We provide tailored training for individuals and organisations. Our programs enhance personal skills,
              support career growth, and foster team development, innovation, and productivity to ensure companies stay
              competitive in today’s digital landscape.
            </p>
          </div>

          <div className="about-box">
            <h3>IT Consulting & Services</h3>
            <p>
              We offer expert services designed to optimise operations through strategic planning, seamless integrations,
              and scalable solutions. Our goal is to help businesses navigate digital transformation and achieve sustainable success.
            </p>
          </div>

          <div className="about-box">
            <h3>Research & Development</h3>
            <p>
              Cloudisian's R&D drives innovation by exploring emerging technologies. We help businesses stay ahead of
              digital trends, solve complex challenges, and grow in a rapidly evolving landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
