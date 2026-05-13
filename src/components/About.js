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
            I work on the Prophet 21 ERP platform in C# and SQL, building integrations
            with external systems like PeopleSoft, Microsoft D365, and Google Cloud, as
            well as backend and full-stack ERP enhancements. Recently I've been focused
            on AI tooling — I built a multi-agent system to automate parts of the
            engineering workflow and a RAG knowledge base agent on top of our internal
            documentation.
          </p>
          <p>
            I'm a Google Cloud Certified Associate Cloud Engineer and have worked across
            Azure DevOps, GCP Pub/Sub, Python, Java, and PowerShell throughout my career.
            Before software I spent four years as an R&amp;D semiconductor process
            engineer, which shaped how I approach complex systems analytically.
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
