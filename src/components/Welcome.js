import React from "react";
import "../styling/welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-container d-flex align-items-center justify-content-center">
      <div className="logo-container d-flex flex-row">
        <p className="me-3">
          <span className="the-word">The</span>
        </p>
        <p className="">Hacker News</p>
      </div>
      <div className="logo-container2 d-flex flex-row">
        <p className="me-3">
          <span className="the-word">The</span>
        </p>
        <p className="">Hacker News</p>
      </div>
    </section>
  );
};

export default Welcome;
