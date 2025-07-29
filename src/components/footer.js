import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../components/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5><a href="/about">About Us</a></h5>
                        {/* <p>We are a team of passionate developers and designers dedicated to creating innovative web solutions.</p> */}
                    </div>
                    <div className="col-md-3">
                        <h5><a href="/contact">Contact Us</a></h5>
                        {/* <p>Email:info@cloudisian.com</p>
                        <p>Phone: +1 234 567 890</p> */}
                    </div>
                    <div className="col-md-3">
                        <h5><a href="/faq">FAQ</a></h5>
                        {/* <p>Have questions? Check our <a href="/faq">FAQ</a> page for answers to common queries.</p> */}
                    </div>
                    <div className="col-md-3">
                        <h5><a href="/service">Services</a></h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}