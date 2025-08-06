import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from "../images/logo.png";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Cloudisian Logo" height="60" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/course">Courses</a></li>
                        <li className="nav-item"><a className="nav-link" href="/project">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="/faculty">Faculty & Mentors</a></li>
                        <li className="nav-item"><a className="nav-link" href="/knowledgehub">Knowledge Hub</a></li>
                        <li className="nav-item"><a className="nav-link" href="/job">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link" href="/success">Success Stories</a></li>
                        <li className="nav-item"><a className="nav-link" href="/blog">Blogs</a></li>
                    </ul>

                    <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center ms-lg-auto gap-2">
                        <a href="/" className="home-link">Home</a>
                        <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                Register
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/signup">Sign Up</a></li>
                                <li><a className="dropdown-item" href="/login">Login</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}
