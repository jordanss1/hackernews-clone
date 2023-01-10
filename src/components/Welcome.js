import React, { useEffect } from "react";
import { useClasses } from "../contexts/classReducer";
import "../styling/welcome.css";

const Welcome = () => {
  const { logo, setLogo } = useClasses();

  useEffect(() => {}, []);

  return (
    <section className="welcome-container d-flex align-items-center justify-content-center">
      <div className="logo-container d-flex flex-row justify-content-center w-100">
        <p data-p="The" className="me-3">
          <span className="the-word">The</span>
        </p>
        <div>
          <div className="hacker-div"></div>

          <h1 data-text="Hacker News" className="">
            <span className="hacker-word">Hacker News</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
