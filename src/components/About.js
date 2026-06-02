import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-container">
        <div className="about-description">
          <p className="lead">
            Hi, I'm Will — a Software Engineer at Motion Industries in Atlanta, GA.
          </p>
          <p>
            I joined as the first engineer dedicated to Prophet 21 ERP development and
            built the team's software ecosystem from the ground up — version control,
            CI/CD pipelines, reusable libraries, and integrations across PeopleSoft,
            Microsoft D365, and Google Cloud. More recently I've been building AI
            tooling: a multi-agent system that automates backlog analysis and code
            authoring from ADO tickets, and a RAG knowledge base agent over our internal
            Confluence and ERP documentation.
          </p>
          <p>
            I'm a Google Cloud Certified Associate Cloud Engineer and have worked across
            C#/.NET, Azure DevOps, Python, Java, and PowerShell. Before software I spent
            four years as an R&amp;D semiconductor process engineer, which shapes how I
            approach complex systems analytically.
          </p>
          <p>Feel free to reach out — I'm always happy to connect.</p>
        </div>
        <div className="about-image">
          <img src={ProfilePicture} alt="Will Parker" />
        </div>
      </div>
    </section>
  );
};

export default About;
