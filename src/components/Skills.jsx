import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    { icon: "⚛️", name: "React" },
    { icon: "📱", name: "Next.js" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "🔷", name: "Material UI" },
    { icon: "📊", name: "Node.js" },
    { icon: "🔗", name: "Solidity" },
    { icon: "🗄️", name: "MongoDB" },
    { icon: "📝", name: "Express" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
