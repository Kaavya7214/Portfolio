import React from "react";
import "./Project.css";

const projects = [
  {
    title: "spam card detection",
    description: "project aims to enand protect users from financial loss by levarging machimne learning algorithims to identify patterns hance.",
    image: "https://www.nogentech.org/wp-content/uploads/2021/07/spam-detection-solution.png", // Replace with the actual image URL
  },
  {
    title: "customer segmentation",
    description: "The project employs linear regression for accurate helium balloon predictions at cartoon character parties, with challenges related to assumed linearity and data complexity.",
    image: "https://blog.nextbee.com/wp-content/uploads/2020/01/Customer-Segmentation-in-Customer-Engagement-Strategy.jpg", // Replace with the actual image URL
  },
  // Add more project objects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects-section" style={{ backgroundImage: `url('https://wallpaperset.com/w/full/4/7/7/170846.jpg')` }}>
      <h2 style={{ color: 'white' }}>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-box" key={index} style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-content">
              <h3 style={{ color: 'white' }}>{project.title}</h3>
              <p style={{ color: 'white' }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;