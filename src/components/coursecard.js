import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../components/coursecard.css";

export default function CourseCard({ image, title, description }) {
    return (
        <>
            <div className="card-base course-card mb-4 mt-5 d-flex flex-column">
                <img src={image} className="card-img-top" alt="Course Image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer pt-0">
                    <a href="#" className="btn btn-primary">Enroll Now</a>
                </div>
            </div>
        </>
    )
}