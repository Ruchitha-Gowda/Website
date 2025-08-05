import React from "react";
import "../pages/course.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../components/coursecard"
import Fullstack from "../images/fullstack.png";
import Datascience from "../images/datascience.png";
import Digitalmarketing from "../images/digitalmarketing.png";
import Uiux from "../images/uiux.png";
import Appdevelopment from "../images/appdevelopment.png"
import Ai from "../images/ai.png"
import Frontend from "../images/frontend.png";
import Backend from '../images/node.png';
import Cloudcomputing from "../images/cloudcomputing.png";
import Machinelearning from "../images/machinelearning.png";
import Seo from "../images/seo.png";
import Mobilegame from "../images/mobilegame.png";
import CourseCard from "../components/coursecard";

export default function Course() {
    const course = [
        {
            image: Fullstack,
            title: "Full Stack Development",
            description: "Full Stack Development refers to the development of both front end (client side) and back end (server side) portions of web applications.",
        },
        {
            image: Datascience,
            title: "Data Science with Python",
            description: "Data Science with Python tutorial will guide you through the fundamentals of both data science and Python programming.",
        },
        {
            image: Digitalmarketing,
            title: "Digital Marketing",
            description: "Learn what online marketing is, how it works, and how to develop a data-driven strategy for your business or organization.",
        },
        {
            image: Uiux,
            title: "UI & UX",
            description: "Learn how UI and UX design differ and overlap in digital product and website design.",
        },
        {
            image: Appdevelopment,
            title: "Android App Development",
            description: "Pursue Android Development courses & get tutorials to create apps at your own pace.",
        },
        {
            image: Ai,
            title: "Artificial Intelligence Webinar",
            description: "Pursue Android Development courses & get tutorials to create apps at your own pace.",
        },
        {
            image: Frontend,
            title: "Frontend Frameworks",
            description: "When it comes to modern front-end development, React and Vue.js are two of the most popular JavaScript libraries/frameworks.",
        },
        {
            image: Backend,
            title: "Backend APIs with Node,js",
            description: "In this comprehensive tutorial, we will guide you through the process of building a RESTful API with Node.js, from the basics to advanced concepts.",
        },
        {
            image: Cloudcomputing,
            title: "Cloud Computing Fundamentals",
            description: "Learn the fundamentals of Cloud Computing, its advantages, types, and key concepts.",
        },
        {
            image: Appdevelopment,
            title: "Android App Development",
            description: "Pursue Android Development courses & get tutorials to create apps at your own pace.",
        },
        {
            image: Machinelearning,
            title: "Machine Learning Basics",
            description: "This Machine Learning (ML) tutorial will provide a detailed understanding of the concepts of machine learning such as, different types of machine learning algorithms, types, applications, libraries used in ML, and real-life examples.",
        },
        {
            image: Seo,
            title: "SEO & Content Strategy",
            description: "This course shows you the key strategies for developing a content roadmap, optimizing for long-term SEO success, and measuring content performance.",
        },
        {
            image: Mobilegame,
            title: "Mobile Game Development",
            description: "Developing a mobile game is dynamic, from concept to post-launch, with each stage crucial to ensuring the game is engaging and functional.",
        }


    ]

    return (
        <>
            <div className="course-container">
                <div className="container">
                    <h1 className="ms-3">Courses we Offer!!!!</h1>
                    <div className="row g-0 mt-0">
                        {course.map((course, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                                <CourseCard {...course} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
} 