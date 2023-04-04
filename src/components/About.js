import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-description">
          <h2>About Me</h2>
          <p>Hello, and welcome to my portolio page! My name is Will Parker.</p>
          <p>
            I'm a former process engineer turned software developer with 1+
            years of development experience.
          </p>
          <p>
            The majority of my professional experience has come from Java/SQL
            backend systems, though I have also worked in Python, C/C++, C#, and
            JavaScript. With my 4+ years of process engineering experience, I
            bring a unique perspective and project management approach to my
            work as a software developer.
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

/*
function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>Hello, and welcome to my portolio page! My name is Will Parker.</p>
        <p>
          I'm a former process engineer turned software developer with 1+ years
          of development experience.
        </p>
        <p>
          The majority of my professional experience has come from Java/SQL
          backend systems, though I have also worked in Python, C/C++, C#, and
          JavaScript. With my 4+ years of process engineering experience, I
          bring a unique perspective and project management approach to my work
          as a software developer.
        </p>
        <p>Please reach out if you have any questions!</p>
      </div>
    </section>
  );
}

export default About;
*/
