import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import V1 from "../videos/v1.mp4"
import V2 from "../videos/v2.mp4"
import V3 from "../videos/v3.mp4"
import V4 from "../videos/v4.mp4"
import V5 from "../videos/v5.mp4"
import V6 from "../videos/v6.mp4"
import V7 from "../videos/v7.mp4"
import V8 from "../videos/v8.mp4"
import I1 from "../images/i1.jpg"
import I2 from "../images/i2.jpg"
import I3 from "../images/i3.jpg"
import I4 from "../images/i6.jpg"
import I5 from "../images/i9.jpg"
import I8 from "../images/i8.jpg"
import I7 from "../images/i7.jpg"
import I6 from "../images/gp1.jpg"


import "../pages/success.css"


export default function Success() {
    return (
        <>
        <div className="success">
            <div className="container">
                <h1 className="m-4 text-center">What Our Studenets And Partners Say</h1>
                <div className="row">
                    <div className=" col-6 col-lg-3 col-md-6 mt-2 d-flex ">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-2 h-10 d-flex flex-column" src={I1} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Sarah K.</h4>
                                <p className="card-text ">"Thanks to the individual training program, I improved my coding skills drastically and landed an internship at a top tech firm!"</p>                              
                            </div>
                            <div className="card-footer">
                                <a href="#">Software Engineer</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10 d-flex flex-column" src={I2} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Mehak</h4>
                                <p className="card-text">"The corporate training sessions helped our sales team increase productivity by 30%. Highly recommend their professional approach!"</p>                              
                            </div>
                            <div className="card-footer">
                                <a href="#">Software Engineer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10 d-flex flex-column" src={I3} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Muskan</h4>
                                <p className="card-text">"The career guidance and recruitment assistance helped me find a job aligned with my passion. The support was exceptional!"</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" >Software Engineer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10 d-flex flex-column" src={I4} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Ruchitha</h4>
                                <p className="card-text">"The freelancing course helped me structure my business and land clients worldwide. Highly recommended!"</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" >Freelancer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex ">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10 d-flex flex-column" src={I5} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Amreen</h4>
                                <p className="card-text">"I learned crucial UX principles in the training sessions, which helped me improve the design of our company’s main app."</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" >UX Designer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex ">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10 d-flex flex-column" src={I6} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Nandini</h4>
                                <p className="card-text">"The cloud certification course opened new job opportunities for me and boosted my salary by 20%."</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" >Cloud Engineer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex ">
                        <div className="mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4 h-10 d-flex flex-column" src={I7} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">Harish</h4>
                                <p className="card-text">"The hands-on workshops boosted my data analytics skills and helped me secure my first job in the industry."</p>

                            </div>
                            <div className="card-footer">
                                <a href="#" >Data Analyst</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6 mt-2 d-flex ">
                        <div className=" mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4 h-10 d-flex flex-column" src={I8} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title mt-2">chandu</h4>
                                <p className="card-text">"I gained practical knowledge and leadership skills through their courses, which accelerated my career growth."</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" >Project Manager</a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V1}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3  mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V2}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V3}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V4}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V5}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V6}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper mt-4">
                            <video
                                src={V7}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 d-flex justify-content-center">
                        <div className="video-wrapper my-4">
                            <video
                                src={V8}
                                className="custom-video"
                                muted
                                preload="metadata"
                                controls
                            ></video>
                        </div>
                    </div>


                </div>
            </div>
            </div>
        </>
    )
}
