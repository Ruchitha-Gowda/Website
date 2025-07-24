import React from "react";
import "./home.css";
import Explore from "../images/explore.png";

export default function Home() {
    return (
        <>
            <div className="board border border-5 rounded p-5 ">
                <div className="board-headlines">
                    <h1>Hello, Welcome to Cloudisian Website</h1>
                    <h3 className="justify-content-center text-muted d-block w-50">Transforming Ideas To Impact</h3>
                </div>
            </div>

            <div className="card mt-4 p-3" >
                <img className="card-img-top" src={Explore}></img>
                <div className="card-body">
                    <h3>Do You Wanna know more????</h3>
                    <a href="/course" className="btn btn-primary">Click Me</a>
                </div>

            </div>
        </>
    )
}