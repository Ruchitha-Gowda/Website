import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Js1 from "../images/js1.jpg";
import F1 from "../images/f1.png";
import F2 from "../images/f2.png";
import F5 from "../images/f5.png";
import J1 from "../images/j1.png";
import J2 from "../images/j2.png";
import J3 from "../images/j3.png";
import J4 from "../images/j4.png";
import J5 from "../images/j5.png";
import J6 from "../images/j6.png";
import J7 from "../images/j7.png";
import './job.css';

const jobs = [
  {
    company: 'IBM',
    role: 'Web Designer',
    img: F5,
  },
  {
    company: 'HCL Tech',
    role: 'Senior UX Developer',
    img: F1,
  },
  {
    company: 'Cognizant',
    role: 'Art Director',
    img: F2,
  },
  {
    company: "Capgemini",
    role: "Frontend Developer",
    img: J4,
  },
  {
    company: "Tech Solutions",
    role: "Frontend Developer",
    img: J3,
  },
  {
    company: "CodeLab",
    role: "Backend Develoer Intern",
    img: J5,
  },
  {
    company: "Design Studio",
    role: "UI/UX Designer",
    img: J1,
  },
  {
    company: "Apify",
    role: "Mobile App Developer",
    img: J2,
  },
  {
    company: "PixelCraft",
    role: "Graphic Designer",
    img: J6,
  },
  {
    company: "QualitySoft",
    role: "Software Tester",
    img: J7,
  }
];

export default function Jobs() {
  return (
    <div className="job-page">
      <div className="hero">
        <h1>Job Board WordPress Themes</h1>
        <p>Your job search starts and ends with us.</p>
        <button className="btn-primary">See Our Curated Jobs</button>
      </div>

      <section className="featured">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <img src={job.img} alt={job.company} />
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <button><a href='#'>Apply Now</a></button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
