import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./learning.css";

const QuizSection = () => {
    const questions = [
        {
            q: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: 1
        },
        {
            q: "Which HTML attribute is used to define inline styles?",
            options: ["style", "font", "class", "styles"],
            answer: 0
        },
        {
            q: "Which HTML element is used to define the title of a document?",
            options: ["<title>", "<head>", "<meta>", "<link>"],
            answer: 0
        },
        {
            q: "What is the correct HTML element for inserting a line break?",
            options: ["<break>", "<br>", "<lb>", "<line>"],
            answer: 1
        },
        {
            q: "Which of the following is a valid CSS selector?",
            options: [".class", "#id", "element", ".class, #id, element"],
            answer: 3
        },
        {
            q: "What is the purpose of the 'alt' attribute in an image tag?",
            options: ["To specify the image source", "To provide alternative text for the image", "To set the image width", "To link to another page"],
            answer: 1
        },
        {
            q: "Which of the following is used to create a hyperlink in HTML?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1
        },
        {
            q: "What does the 'id' attribute in HTML do?",
            options: ["Defines a class", "Identifies a unique element", "Styles an element", "Links to another page"],
            answer: 1
        },
        {
            q: "Which CSS property is used to change the text color of an element?",
            options: ["color", "text-color", "font-color", "bg-color"],
            answer: 0
        },
        {
            q: "What is the purpose of the 'meta' tag in HTML?",
            options: ["To link external stylesheets", "To provide metadata about the document", "To define the document structure", "To create a navigation menu"],
            answer: 1
        },
        {
            q: "Which HTML element is used to define an unordered list?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: 0
        },
        {
            q: "What is the correct way to comment in HTML?",
            options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "/* This is a comment */"],
            answer: 1
        },
        {
            q: "Which CSS property is used to change the background color of an element?",
            options: ["background-color", "bg-color", "color", "background"],
            answer: 0
        },
        {
            q: "What does the 'href' attribute in an anchor tag do?",
            options: ["Specifies the link destination", "Defines the link text", "Styles the link", "Sets the link target"],
            answer: 0
        },
        {
            q: "Which HTML element is used to define a table row?",
            options: ["<tr>", "<td>", "<th>", "<table>"],
            answer: 0
        },
        {
            q: "What is the purpose of the 'class' attribute in HTML?",
            options: ["To define a unique identifier", "To group elements for styling", "To create a hyperlink", "To set inline styles"],
            answer: 1
        },
        { q: "Which CSS property is used to set the font size of an element?",
            options: ["font-size", "text-size", "size", "font-style"],  
            answer: 0
        },
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [result, setResult] = useState("");

    const current = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (selected === null) 
            return setResult("Please select an answer!");

        if (selected === current.answer) {
            setResult("It's Correct!");
        } else {
            setResult("Wrong Answer, Try Aqain!");
        }
    };
    const handleNext = () => {
        if (selected === null) {
            return setResult("Please select an answer before continuing!");
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setResult("");
            setSelected(null);
        } else {
            setResult("Quiz Completed!");
            setCurrentQuestionIndex(0); // Reset to first question
        }
    };
    // if (!questions || !questions.options) {
    //     return <div className="alert alert-danger">No Quiz Data Found!!!</div>;
    // }
    return (
        <div className="quiz p-3">
            <p><strong>Q{currentQuestionIndex + 1}. {current.q}</strong></p>
            {/* {question.map((question, index) => (<QuizSection key={index} question={question} setSelected={setSelected} selected={selected} handleSubmit={handleSubmit} result={result} />))} */}
            {current.options.map((opt, index) => (
                <div className="form-check" key={index}>
                    <input
                        type="radio"
                        name="mcq"
                        className="form-check=input"
                        value={index}
                        checked={selected === index}
                        onChange={() => setSelected(index)}
                        id={`option-${index} `}
                    />
                    <label className="form-check-leabel" htmlFor={`option-${index}`}>{opt}</label>
                </div>
            ))}
            <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
            {result && (<div className="mt-3">
                <div className="mt-2 alert alert-info">{result}</div>
                {result !== "Quiz Completed!" && (
                    <button className="btn btn-secondary mt-2" onClick={handleNext}>
                        Next Question
                    </button>
                )}
            </div>
            )}
        </div>
    )
}

export default QuizSection;