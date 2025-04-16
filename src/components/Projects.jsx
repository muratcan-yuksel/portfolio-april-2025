import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "The Standard Protocol",
      description:
        "Built a frontend based on client designs and connected it to smart contracts on the Ethereum blockchain. Implemented complex functionality while maintaining a seamless user experience.",
    },
    {
      id: "project-2",
      title: "Crypto Token - Private Sale Interface",
      description:
        "Developed a single-page interface for a crypto token private sale. Created a modern, intuitive UI that simplified the token purchase process.",
    },
    {
      id: "project-3",
      title: "Grumpy Gorillaz NFT Collection",
      description:
        "Built a React frontend for an NFT collection on Solana. Created an intuitive minting interface with wallet integration and real-time status updates.",
    },
    {
      id: "project-4",
      title: "NFT Landing Page",
      description:
        "Designed and developed a decentralized NFT landing page that showcases collections and provides information about the project.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
