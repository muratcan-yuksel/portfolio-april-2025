import React from "react";

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3>{skill.name}</h3>
    </div>
  );
}

export default SkillCard;
