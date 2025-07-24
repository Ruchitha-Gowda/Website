import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./blog.css";
import ArticleCard from "../components/articlecard";
import A1 from "../images/a1.png";
import A2 from "../images/a2.png";
import A3 from "../images/a3.png";
import A4 from "../images/a4.png";
import A5 from "../images/a5.png";
import A6 from "../images/a6.png";
import A7 from "../images/a7.png";
import A8 from "../images/a8.png";
      
export default function Blog() {
    const articles = [
        {
            image: A3,
            category: "Cloud Security",
            title: "5 Must-Know Best Practices for Cloud Security",
            description: "Learn how to secure your cloud infrastructure with these essential practices that.....",
            author: "Anika Sharma",
            date: "July 12, 2025",

        },
        {
            image: A2,
            category: "DevOps",
            title: "Implementing DevOps Practices in Your Organization",
            description: "Strategies for integrating DevOps methodologies to improve development processes.",
            author: "Zubair",
            date: "July 12, 2025",
        },
        {
            image: A1,
            category: "Web Development",
            title: "The Essentials of Modern Web Development",
            description: "Staying updated with the latest tools, frameworks, and best practices is essential....",
            author: "Jyothi",
            date: "June 18, 2025",
        },
        {
            image: A4,
            category: "Artificial Intelligence",
            title: "The Impact of AI on Everyday Life",
            description: "Explore how artificial intelligence is transforming industries like healthcare, finance, and education with smarter, automated solutions.",
            author: "Aarav Nair",
            date: "June 12, 2025",
        },
        {
            image: A5,
            category: "Cybersecurity",
            title: "Top 10 Tips to Stay Safe Online",
            description: "Learn practical cyberesecurity tips to protect your personal data, devices and online identity from threats like phishing and malware",
            author: "Ravi Kumar",
            date: "June 08, 2025",
        },
        {
            image: A6,
            category: "Cloud Computing",
            title: "Cloud vs On-Premise: Which is Better?",
            description: "Undderstand the pros and cons of cloud computing versus traditional on-premise solutions to make informed decisions for your business.",
            author: "Sneha Reddy",
            date: "March 22, 2025",
        },
        {
            image: A7,
            category: "Data Science",
            title: "Why Data Science is the Future of Decision Making",
            description: "Discover how data science helps organizations make informed decisions through data analysis, visulaization, and predictions.",
            author: "Priya Menon",
            date: "March 19, 2025",
        },
        {
            image: A8,
            category: "UI/UX Design",
            title: "5 Principles of Great UI/UX Design",
            description: "Learn the key principles that make digital products user-friendly and visually appealing, enhancing user experience.",
            author: "Vikram Desai",
            date: "March 16, 2025",
        }

    ];

    return (
        <>
            <div className="blog-container container mt-5">
                <h1 className="ms-3">BLOG</h1>
                <h2 className="ms-3">Featured Articles</h2>
                <div className="row g-0 mt-0">
                    {articles.map((article, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
                            <ArticleCard {...article} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}