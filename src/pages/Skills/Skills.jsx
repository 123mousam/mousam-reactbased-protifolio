import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Icons import
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiPostgresql,
  SiDjango,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "DBMS", icon: <SiMysql /> },
        { name: "DS & Algorithms", icon: <SiJavascript /> },
        { name: "OOPS", icon: <SiPython /> },
        { name: "OS", icon: <SiCplusplus /> },
      ],
    },
    {
      title: "Technologies",
      skills: [
        { name: "Git", icon: <SiGithub /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "REST Framework", icon: <SiDjango /> },
        { name: "Django ORM", icon: <SiDjango /> },
      ],
    },
  ];

  return (
    <section className="skills-container">
      <h1 className="skills-heading">
        Technical <span>Stack</span>
      </h1>

      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skill-card">
            <h3 className="category-title">{cat.title}</h3>
            <div className="skill-icons">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="skill"
                >
                  <div className="icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
