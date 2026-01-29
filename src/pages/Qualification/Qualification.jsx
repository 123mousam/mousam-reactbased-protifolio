// src/components/Qualification.jsx
import React from "react";
import "./Qualification.css";

const qualifications = [
  {
    title: "Diploma in Medical Electronic",
    institute: "Kasturba institute technology , DESU, Delhi",
    year: "2021",
    description: "Learn Medical Instruments",
  },
  {
    title: "B.Tech Computer Science Engineering",
    institute: "HMR institue of technology , GGSIPU, DElhi",
    year: "2026",
    description: "Software engineering, web technologies, and data structures",
  },
];

const Qualification = () => {
  return (
    <section className="qualification-section">
      <div className="qualification-container">
        <h2>My Qualification</h2>

        <ul className="qualification-list">
          {qualifications.map((qual, index) => (
            <li key={index} className="qualification-item">
              <h3>{qual.title}</h3>

              <p>
                <span>{qual.year}</span> &nbsp;|&nbsp; {qual.institute}
              </p>

              <p>{qual.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Qualification;
