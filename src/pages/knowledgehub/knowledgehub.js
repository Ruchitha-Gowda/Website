import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../knowledgehub/learning.css";
import Learning from "./learning";
import QuizSection from "./QuizSection";
import ResourceLinks from "./resourcelink";

export default function KnowledgeHub() {
    return (
        <div className="learning">
            <div className="container">
                <h1 className="text-center ">Learning Hub</h1>
                <p className="text-center">Welcome to the Learning Hub! Here you can find a variety of resources to enhance your knowledge and skills.</p>

                <section className="mt-4">
                    <h2>Explore Topics </h2>
                    <div className="row">
                        <Learning title="Web Dev" desc="HTML, CSS, BootStrap, JavaScript" />
                        <Learning title="Cyber Security" desc="OWASP, Ethical Hacking" />
                        <Learning title="AI Tools" desc="Arrays, Trees, Graphs" />
                    </div>


                </section>

                <section className="resource mt-5 mb-5">
                    <h4 className="res-header">Resources</h4>
                    <ResourceLinks />
                </section>

                <section className="quiz-section mb-5">
                    <h4 className="quiz-header">Test Your Knowledge</h4>
                    <QuizSection />
                </section>
            </div>
        </div>
    );
};