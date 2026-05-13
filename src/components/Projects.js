import React from "react";

const projects = [
  {
    name: "Spotify YouTube Connector",
    repo: "https://github.com/wdparker93/spotify-youtube-connector",
    site: "https://wdparker93.github.io/spotify-youtube-connector-site/",
    description:
      "Python application that syncs a Spotify playlist to a YouTube playlist using the Spotify and YouTube Data APIs.",
  },
  {
    name: "Improv Helper",
    repo: "https://github.com/wdparker93/improvisation-helper",
    site: "https://wdparker93.github.io/improvisation-helper-site/",
    description:
      "Windows desktop application that listens to a MIDI keyboard and automatically captures improvised musical phrases as MIDI files.",
  },
  {
    name: "Portfolio Page",
    repo: "https://github.com/wdparker93/portfolio-page",
    description: "This site — a personal portfolio built with React and deployed via GitHub Actions.",
  },
  {
    name: "Lobbyist Donation Tracker",
    repo: "https://github.com/wdparker93/lobbyist-donation-tracker",
    description:
      "Full-stack React + MySQL application that leverages the US Lobbying Disclosure Act API to summarize aggregate contributions made by lobbyists to U.S. senators.",
  },
  {
    name: "Connect4",
    repo: "https://github.com/wdparker93/Connect4",
    description:
      "Java application emulating Connect Four in which two players compete to connect four tokens.",
  },
  {
    name: "Bumper Cars",
    repo: "https://github.com/wdparker93/BumperCars",
    description:
      "Multi-threaded C program that simulates amusement park goers exploring a park and riding bumper cars.",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-card-header">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="project-title"
              >
                {p.name}
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="project-pill"
              >
                repo ↗
              </a>
              {p.site && (
                <a
                  href={p.site}
                  target="_blank"
                  rel="noreferrer"
                  className="project-pill"
                >
                  site ↗
                </a>
              )}
            </div>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
