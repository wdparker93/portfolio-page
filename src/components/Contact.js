import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="agent-blurb">
        Have a question about my work experience? Email me with <strong>[AGENT]</strong> in the
        subject line and an AI agent will reply with an answer.
      </p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/william-parker-215877aa/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/wdparker93"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="mailto:wdparker93@gmail.com"
          className="contact-link"
        >
          wdparker93@gmail.com
        </a>
        <a
          href={process.env.PUBLIC_URL + "/resume.html"}
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
