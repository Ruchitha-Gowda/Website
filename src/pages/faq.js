import React, { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What is a Full Stack Developer?",
    answer: "A Full Stack Developer is skilled in both front-end and back-end web development."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB."
  },
  {
    question: "How can I Contact you?",
    answer: "You can contact me via email, LinkedIn, or through my portfolio website."
  },
  {
    question: "Do you accept freelance work?",
    answer: "Yes, I am open to freelance opportunities. Feel free to reach out!"
  },
  {
    question: "Where is Cloudisian located?",
    answer: "We are headquartered in Bengaluru, India, but we operate globally through virtual platforms and cloud infrastructure."
  },
  {
    question: "Do you help with career development or placements?",
    answer: "Yes, our training programs often include placement support, resume reviews, and interview preparation to help candidates get job-ready."

  },
  {
    question: "Do you offer online training programs?",
    answer: "Absolutely! Cloudisian offers online instructor-led and self-paced training in Web Development, Cloud Computing, DevOps, Python, and more. Visit our Training section to learn more."
  }

];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently asked Questions</h2>
      <div className="faq-box">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              {/* <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span> */}
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
