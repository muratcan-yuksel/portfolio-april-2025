import React from "react";
import StatCard from "./StatCard";

function UpworkHighlight() {
  const stats = [
    { number: "$30K+", label: "Earned on Upwork" },
    { number: "100%", label: "Job Success Rate" },
    { number: "12", label: "Completed Projects" },
    { number: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="upwork-highlight">
      <div className="container">
        <h2 className="section-title">Upwork Success Story</h2>
        <p>
          With a proven track record of excellence, I've established myself as a
          top-tier React developer on Upwork.
        </p>

        <div className="upwork-stats">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpworkHighlight;
