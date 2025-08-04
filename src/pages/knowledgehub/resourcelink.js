import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  "./learning.css"

const ResourceLinks = ()=> {
    const resources = [
        {
            title: "MDN Web Docs",
            link: "https://developer.mozilla.org/en-US/docs/Web",
            description: "Comprehensive documentation for web technologies including HTML, CSS, and JavaScript."
        },
        {
            title: "W3Schools",
            link: "https://www.w3schools.com/",
            description: "A popular web development tutorial site covering HTML, CSS, JavaScript, and more."
        },
        {
            title: "FreeCodeCamp",
            link: "https://www.freecodecamp.org/",
            description: "An interactive learning platform for web development and programming."
        }
    ];

    return (
        <ul className="list-group">
            {resources.map((r, index) => (
                <li className="list-group-item" key={index}>
                    <a href={r.link} target="_blank" rel="noopener noreferer">
                        {r.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ResourceLinks;