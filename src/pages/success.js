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
            <div className="container">
                <h3>What Our Studenets And Partners Say</h3>
                <div className="row">
                    <div className=" col-6 col-lg-3 col-md-4 mt-4 d-flex ">
                        <div className="80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4 h-100PX  w-100px d-flex flex-column" src={I1} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Sarah K.</h4>
                                <p className="card-text">"Thanks to the individual training program, I improved my coding skills drastically and landed an internship at a top tech firm!"</p>
                                <a href="#">Sales Manager at XYZ Corp.</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 col-md-4 mt-4 d-flex">
                        <div className="80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10PX  w-10px d-flex flex-column" src={I2} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Mehak</h4>
                                <p className="card-text">""The corporate training sessions helped our sales team increase productivity by 30%. Highly recommend their professional approach!""</p>
                                <a href="#" >Software Developer Intern</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4 mt-4 d-flex">
                        <div className="80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10PX  w-10px d-flex flex-column" src={I3} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Muskan</h4>
                                <p className="card-text">"The career guidance and recruitment assistance helped me find a job aligned with my passion. The support was exceptional!"</p>
                                <a href="#" >Marketing Executive</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4 mt-4 d-flex">
                        <div className="80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10PX  w-10px d-flex flex-column" src={I4} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Ruchita</h4>
                                <p className="card-text">"The freelancing course helped me structure my business and land clients worldwide. Highly recommended!"</p>
                                <a href="#" >Freelance Graphic Designer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4  d-flex ">
                        <div className="80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10PX  w-10px d-flex flex-column" src={I5} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Amreen</h4>
                                <p className="card-text">"I learned crucial UX principles in the training sessions, which helped me improve the design of our company’s main app."</p>
                                <a href="#" >UX Designer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4 d-flex ">
                        <div className="80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4  h-10PX  w-10px d-flex flex-column" src={I6} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Nandini</h4>
                                <p className="card-text">"The cloud certification course opened new job opportunities for me and boosted my salary by 20%."</p>
                                <a href="#" >Cloud Engineer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 ccard h-ol-md-4 d-flex ">
                        <div className="h-80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4 h-10PX  w-10px d-flex flex-column" src={I7} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">Harish</h4>
                                <p className="card-text">"The hands-on workshops boosted my data analytics skills and helped me secure my first job in the industry."</p>
                                <a href="#" >Data Analyst</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4 d-flex ">
                        <div className=" h-80 w-100 mt-4 d-flex flex-column">
                            <img className="card-circular-image mt-4 ms-3  h-10px  w-10px d-flex flex-column" src={I8} alt="card Images" />
                            <div className="card-body">
                                <h4 className="card-title">chandu</h4>
                                <p className="card-text">"I gained practical knowledge and leadership skills through their courses, which accelerated my career growth."</p>
                                <a href="#" >Project Manager</a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                   <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
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
            </>
            )
}
