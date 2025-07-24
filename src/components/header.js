import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from "../images/logo.png";
import "./header.css";

export default function Header() {
    return (
        <>
            <div className="header-container">

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light  border-bottom">
                    <div className="container-fluid d-flex flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            {/* Logo */}
                            <a className="navbar-brand" href="/">
                                <img src={Logo} alt="Cloudisian Logo" height="60" />
                            </a>

                            <div className="right-section">
                                <a href="/" className="home-link" >Home</a>
                                <div className="dropdown mx-4">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Register</button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/signup">Sign Up</a></li>
                                        <li><a className="dropdown-item" href="Login">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* button */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        {/* Collapsed content */}
                        <div className="collapse navbar-collapse w-100 mt-2" id="navbarContent">

                            {/* Right section */}
                            <ul className="navbar-nav flex-wrap mx-3">
                                <li className="nav-item"><a className="nav-link" href="/course">Courses</a></li>
                                <li className="nav-item"><a className="nav-link" href="/batch">Batches</a></li>
                                <li className="nav-item"><a className="nav-link" href="/project">Projects</a></li>
                                <li className="nav-item"><a className="nav-link" href="/faculty">Faculty & Mentors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/learning">Knowledge Hub</a></li>
                                <li className="nav-item"><a className="nav-link" href="/job">Jobs</a></li>
                                <li className="nav-item"><a className="nav-link" href="/success">Success Stories</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}
