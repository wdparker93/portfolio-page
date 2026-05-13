import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <ul className="card">
          <li>
            <a
              href="https://www.linkedin.com/in/william-parker-215877aa/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/wdparker93" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="/resume.html" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
