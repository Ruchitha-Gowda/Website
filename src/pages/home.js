import React from "react";
import "./home.css";
// import Explore from "../images/explore.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid px-4 py-3">

        <section className="text-center text-container my-5">
          <h1 className="wel-head">Welcome to Our Website</h1>
          <p className="wel-para"> Empowering careers through knowledge, mentorship, and oppurtunities.</p>
          <a href="/knowledgehub" className="btn btn-explore btn-primary">Explore Knowledge Hub</a>
        </section>

        <section className="row text-ceneter my-5">
          <h2 className="mb-4 text-offer">What we Offer</h2>
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
            <div key={index} className="col-md-4 d-flex my-3">
              <Link to={item.link} className="text-decoration-none text-dark">
                <div className="border rounded p-3">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </section>

        <section className="my-5">
          <h2 className="learn-head">Learning Hub</h2>
          <p className="learn-para">Find a variety of resources to enhance your knowledge and skills.</p>
          <div className="row">
            <div className="col-md-4">
              <h5 className="exp-topic">Explore Topics</h5>
              <ul>
                <li>Web Dev (HTML, CSS, JS, React)</li>
                <li>Data Structures (Arrays, Trees, Graphs)</li>
                <li>Cyber Security (OWASP, Cryptography)</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Resources</h5>
              <ul>
                <li><a href="https://developer.mozilla.org/">MDN Web Docs</a></li>
                <li><a href="https://www.w3schools.com/">W3Schools</a></li>
                <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Sample Quiz</h5>
              <p><strong>Q:</strong> What does CSS stand for?</p>
              <ul>
                <li>Creative Style Sheets</li>
                <li><strong>Cascading Style Sheets</strong></li>
                <li>Computer Style Sheets</li>
                <li>Colorful Style Sheets</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h2>Courses We Offer</h2>
          <div className="row">
            {[
              "Full Stack Development",
              "Data Science with Python",
              "UI & UX",
              "Android App Development",
              "Cloud Computing",
              "Machine Learning Basics",
              "SEO & Content Strategy",
              "Mobile Game Development"
            ].map((course, idx) => (
              <div key={idx} className="col-6 col-md-3 d-flex mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">{course}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/course" className="btn-explore btn-secondary mt-3">See All Courses</Link>
        </section>

      </div>
    </>
  )
}