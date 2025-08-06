import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './projects.css';
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import Project4 from "../images/project4.png";
import Project5 from "../images/project5.png";
import Project6 from "../images/project6.png";

const projects = [
  {
    title: "Secure Video Player App",
    description: "A React Native app with custom video playback, watermarking, and screenshot protection.",
    image: Project1,
    github: "#"
  },
  {
    title: "Hotel Booking and Management",
    description: "Hotel Management System (HMS) developed for managing small hotel's or guess house in Web Base.",
    image: Project2,
    github: "#"
  },
  {
    title: "CHAT APP",
    description: "A web based real time chat application using react MERN stack with web socket.io for two way communication.",
    image: Project3,
    github: "#"
  },
  {
    title: "Hospital Management System",
    description: "The purpose of the project entitled as “HOSPITAL MANAGEMENT SYSTEM” is to computerize the Front Office Management of Hospital to develop software which is user friendly simple, fast, and cost – effective. It deals with the collection of patient’s information, diagnosis details, etc.",
    image: Project4,
    github: "#"
  },
  {
    title: "Travel Booking",
    description: "MERN Stack Tours & Travels Booking Website Created with React JS.",
    image: Project5,
    github: "#"
  },
  {
    title: "Event Booking",
    description: "Booking function for Availability + Event Creation",
    image: Project6,
    github: "#"
  },

];

export default function Projects() {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Projects</h1>
        <p>Explore the tech We've built and contributed to</p>
      </header>

      <section className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
