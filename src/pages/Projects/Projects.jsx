import React from "react";
import "./Project.css"; // We'll create CSS for styling
import pr1 from "../../assets/pr1.png";
import pr2 from "../../assets/pr2.png";
import pr3 from "../../assets/pr3.png";


const projectsData = [
  {
    id: 1,
    title: "Multi-Vender E-Commarce",
    image: pr2,
    description:
      "A full-featured E-commerce website using Django REST Framework as backend and React.js (Vite) as frontend. Features include authentication, cart, orders, wishlist, payment integration, vendor dashboard.",
    github: "https://github.com/123mousam/advance_multiVenders_ec_mousam_mishra",
    live: "https://yourproject1live.com",
  },
  {
    id: 2,
    title: "Learning Management System",
    image: pr1,
    description:
      "A Learning Management System for planning, delivering, managing, and tracking educational courses and training programs.",
    github: "https://github.com/123mousam/LM-system",
    live: "",
    github: "https://github.com/123mousam/LM-system",
    live: "https://yourproject2live.com",
  },
  {
    id: 3,
    title: "Phishing Detection System",
    image: pr3,
    description:
      "A security system that analyzes a given URL and determines whether it is legitimate or phishing. Helps prevent users from falling victim to fake websites.",
    github: "https://github.com/123mousam/URL-Phishing-Detection",
    live: "",
    github: "https://github.com/123mousam/URL-Phishing-Detection",
    live: "https://yourproject3live.com",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={`${project.title} Screenshot`} />
            <h3>{project.title}</h3>
            <p className="project-description">
             {project.description}
            </p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {/* <a href={project.live} target="_blank" rel="noopener noreferrer">
                See Live
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
