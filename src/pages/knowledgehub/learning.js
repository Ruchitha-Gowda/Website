import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Learning = ({ title, desc }) => {
    return (
            <div className="col-md-4 d-flex mt-0">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div>
    );
};

export default Learning;
