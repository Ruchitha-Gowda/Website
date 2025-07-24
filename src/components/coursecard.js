import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function CourseCard({ image, title, description }) {
    return (
        <>
            <div className="card mb-4 mt-5 article-card d-flex flex-column">
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