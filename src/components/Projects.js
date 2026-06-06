import React from "react";

const projects = [
  {
    name: "Improv Helper",
    repo: "https://github.com/wdparker93/improvisation-helper",
    site: "https://wdparker93.github.io/improvisation-helper-site/",
    description:
      "Windows desktop app that listens to your MIDI keyboard and automatically captures improvised phrases as MIDI files — ready to import into any DAW.",
  },
  {
    name: "ReviewMiner",
    repo: "https://github.com/wdparker93/steam-review-miner",
    site: "https://steam-review-miner-tpsm.vercel.app/",
    description:
      "Web app that analyzes Steam reviews for any game — paste an App ID to get sentiment trends, tag breakdowns, and top recurring phrases from player feedback. Free tier analyzes 100 reviews; Pro unlocks 2,000.",
  },
  {
    name: "GrooveVision",
    repo: "https://github.com/wdparker93/groovevision",
    site: "https://wdparker93.github.io/groovevision-site/",
    description:
      "Chrome extension that automatically finds and opens the YouTube music video for whatever you're scrobbling to Last.fm — works with Spotify, Apple Music, YouTube Music, Tidal, and anything else that scrobbles.",
  },
  {
    name: "Lobbyist Donation Tracker",
    repo: "https://github.com/wdparker93/lobbyist-donation-tracker",
    site: "https://wdparker93.github.io/lobbyist-donation-tracker/",
    description:
      "React SPA tracking money flowing to U.S. senators from two sources: Senate LDA lobbying disclosures and FEC PAC/party contributions. Data syncs automatically each week via GitHub Actions with a 5-year lookback window.",
  },
  {
    name: "Portfolio Page",
    repo: "https://github.com/wdparker93/portfolio-page",
    description: "This site — a personal portfolio built with React and deployed via GitHub Actions.",
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
