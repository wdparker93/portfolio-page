import React from "react";

const primary = [
  "C#", "SQL", "Azure DevOps", "Google Cloud", "AI-Assisted Development",
];

const secondary = [
  "Python", "Java", "PowerShell", "JavaScript", "React",
  "APIs", "EDI / cXML", "HTML / CSS",
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {primary.map((s) => (
          <span key={s} className="skill-badge primary">{s}</span>
        ))}
        {secondary.map((s) => (
          <span key={s} className="skill-badge">{s}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
