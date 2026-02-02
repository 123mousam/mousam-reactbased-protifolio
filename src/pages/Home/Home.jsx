import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/mousam.png"; 
import "./Home.css";
import cvFile from "../../assets/MyCv.pdf";


const Home = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        // High-performance update of CSS variables for the glow
        glowRef.current.style.setProperty("--x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="home">
      {/* --- BACKGROUND LAYERS --- */}
      <div className="bg-grid-scrolling" />
      <div ref={glowRef} className="bg-glow-interactive" />
      {/* -------------------------- */}

      <div className="home-content">
        <h1>Hi, I'm <span>Mousam</span></h1>
            <p className="about__description">
            <strong>final-year Computer Science Engineering student</strong> 
            passionate about building modern, interactive web applications. 
            I specialize in <span className="highlight">React</span> for sleek frontends, 
            <span className="highlight"> Django</span> and <span className="highlight">Django ORM</span> 
            for robust backends, and <span className="highlight">REST APIs</span> 
            to create dynamic, user-friendly websites. I thrive in challenging environments, 
            constantly learning new technologies, and transforming ideas into fully functional projects.
          </p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        <div className="buttons">
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

      <div className="home-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
