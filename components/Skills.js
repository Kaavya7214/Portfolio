import React from "react";
import "./Skills.css"; // Import your CSS file for styling

const sectionStyle = {
  background: 'url("https://wallpaperset.com/w/full/4/7/7/170846.jpg") center/cover',
  // Add any other styles you want for the section
};

function Skills() {
  const skills = [
    "C Programming",
    "Python",
    "React",
    "HTML",
    "CSS",
    "Machine Learning",
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="section" style={sectionStyle}>
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-background"></div>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;