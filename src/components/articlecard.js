import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../components/articlecard.css";

export default function ArticleCard({ image, category, title, description, author, date }) {
    return (
        <>
            <div className="article-card mb-4 mt-5  d-flex flex-column">
                <img src={image} className="card-img-top" alt="Blog Post Image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="txt-muted">By {author} on {date}</small></p>
                    <p className="card-text"><small className="txt-muted">Category: {category}</small></p>
                </div>
                <div className="card-footer pt-0">
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}