import React from "react";
import aboutImg from "../../assets/mousam.png";
import cvFile from "../../assets/MyCv.pdf";
import "./About.css"


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <img src={aboutImg} alt="About" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            I am a <strong>final-year Computer Science Engineering student</strong>{" "}
            passionate about building modern, interactive web applications. I
            specialize in <span className="highlight">React</span> for sleek
            frontends, <span className="highlight">Django</span> and{" "}
            <span className="highlight">Django ORM</span> for robust backends, and{" "}
            <span className="highlight">REST APIs</span> to create dynamic,
            user-friendly websites. I thrive in challenging environments,
            constantly learning new technologies, and transforming ideas into
            fully functional projects.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">08.30+</span>
              <span className="about__info-name">
                Aggregate <br /> CGPA
              </span>
            </div>

            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">Projects</span>
            </div>

            <div>
              <span className="about__info-title">06+</span>
              <span className="about__info-name">
                Months <br /> experience
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              href={cvFile}
              download
              className="button button--flex"
            >
              Download CV
              <i className="fas fa-download button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
