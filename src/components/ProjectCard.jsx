import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image" id={project.id}>
        {project.title}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href="#" className="project-link">
            View Project
          </a>
          <a href="#" className="project-link">
            Case Study
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
