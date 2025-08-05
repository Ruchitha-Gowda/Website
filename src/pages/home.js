import React from "react";
import "./home.css";
// import Explore from "../images/explore.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid home px-4 py-2">

        <section className="text-center text-container my-2">
          <h1>Welcome to Our Website</h1>
          <p> Empowering careers through knowledge, mentorship, and opportunities.</p>
          <Link to="/knowledgehub" className="btn btn-explore btn-primary">Explore Knowledge Hub</Link>
        </section>

        <section className="row my-3">
          {[
            { title: "Knowledge Hub", link: "/knowledgehub", desc: "Access a wide range of resources to enhance your skills and knowledge." },
            { title: "Courses", link: "/course", desc: "Enroll in our comprehensive courses designed to help you excel in your field." },
            { title: "Services", link: "/service", desc: "Explore our services to get personalized guidance and support." },
            { title: "Blogs", link: "/blog", desc: "Stay updated with the latest trends and insights through our blogs." },
            { title: "FAQ", link: "/faq", desc: "Find answers to common  questions and get help with your queries." },
            { title: "Contact Us", link: "/contact", desc: "Get in touch with us for any inquiries or support." },
            { title: "Jobs", link: "/job", desc: "Explore job opportunities and connect with potential employers." },
            { title: "Faculty & Mentors", link: "/faculty", desc: "Meet our experienced faculty and mentors who guide you on your journey." },
            { title: "Testimonials", link: "/success", desc: "Hear from our satisfied users about their experiences with our platform." },
          ].map((item, index) => (
            <div key={index} className="col-md-4 d-flex  align-items-stretch my-3">
              <Link to={item.link} className="text-decoration-none text-dark w-100">
                <article className="border custom-card rounded p-3 h-100">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </article>
              </Link>
            </div>
          ))}
        </section>

        <section className="my-2">
          <h2>Learning Hub</h2>
          <p>Find a variety of resources to enhance your knowledge and skills.</p>
          <div className="row ">
            <div className="col-md-6">
              <h5>Explore Topics</h5>
              <ul>
                <li>Web Dev (HTML, CSS, JS, React)</li>
                <li>Data Structures (Arrays, Trees, Graphs)</li>
                <li>Cyber Security (OWASP, Cryptography)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Resources</h5>
              <ul>
                <li><a href="https://developer.mozilla.org/" rel="noopener noreferrer">MDN Web Docs</a></li>
                <li><a href="https://www.w3schools.com/" rel="noopener noreferrer">W3Schools</a></li>
                <li><a href="https://www.freecodecamp.org/" rel="noopener noreferrer">FreeCodeCamp</a></li>
              </ul>
            </div>
            
          </div>
        </section>
        <section className="my-2">
          <h2>Courses We Offer</h2>
          <div className="row">
            {[
              "Full Stack Development",
              "Data Science with Python",
              "UI & UX",
              "Android App Development"
            ].map((course, idx) => (
              <div key={idx} className="col-6 col-md-3 d-flex mb-3">
                <div className="card ">
                  <div className="card-body">
                    <h6 className="card-title ">{course}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/course" className="btn btn-explore btn-secondary mt-3">See All Courses</Link>
        </section>

      </div>
    </>
  )
}