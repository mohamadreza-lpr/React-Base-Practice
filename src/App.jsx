import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Hi this is my first react practice</h1>
            <div className="course-list">
                <div className="course-item">
                    <div className="course-item__img">
                      <img src="/images/img1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
