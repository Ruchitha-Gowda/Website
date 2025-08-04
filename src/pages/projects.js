import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './projects.css';
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";

const projects = [
  {
    title: "Secure Video Player App",
    description: "A React Native app with custom video playback, watermarking, and screenshot protection.",
    image: Project1,
    github: "https://github.com/Shuaib77/SecureVideoPlayer.git"
  },
  {
    title: "Hotel Booking and Management",
    description: "Hotel Management System (HMS) developed for managing small hotel's or guess house in Web Base.",
    image: Project2,
    github: "https://github.com/phegondev/phegon-hotel-booking-and-management.git"
  },
  {
    title: "CHAT APP",
    description: "A web based real time chat application using react MERN stack with web socket.io for two way communication.",
    image: Project3,
    github: "https://github.com/Ruchitha-Gowda/CHATAPP-MASTER.git"
  }
];

export default function Projects() {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>My Projects</h1>
        <p>Explore the tech I've built and contributed to</p>
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
