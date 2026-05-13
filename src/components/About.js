import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-description">
          <h2>About Me</h2>
          <p>
            Hello, and welcome to my portfolio page! My name is Will Parker.
          </p>
          <p>
            I'm a former process engineer turned software developer with 3+
            years of professional development experience.
          </p>
          <p>
            I'm a lead C# .NET developer specializing in ERP integrations and
            AI agent systems. My background spans Java/SQL backend development,
            Python, C#, and cloud infrastructure on Google Cloud and Azure. With
            4+ years as a semiconductor process engineer before that, I bring a
            systematic, analytical mindset to software problems.
          </p>
          <p>Please reach out if you have any questions!</p>
        </div>
        <div className="about-image">
          <img src={ProfilePicture} alt="My Image" />
        </div>
      </div>
    </section>
  );
};

export default About;
