import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p>
          <a
            href="https://github.com/wdparker93/lobbyist-donation-tracker"
            target="_blank"
          >
            Lobbyist Donation Tracker
          </a>
          &nbsp;: Full-stack, single-page React application built on a MySQL
          database that leverages Lobbying Disclosure data from the{" "}
          <a href="https://lda.senate.gov/system/public/" target="_blank">
            US Lobbying Disclosure Act API
          </a>{" "}
          to summarize aggregate monetary contributions made by lobbyists to
          U.S. senators.
        </p>
        <p>
          <a
            href="https://github.com/wdparker93/data-request-builder"
            target="_blank"
          >
            Data Request Builder
          </a>
          &nbsp;: Full-stack, single-page React application licensed and
          developed for a logistics consulting agency that utilizes a Python
          backend servlet to read and write user-generated database
          configurations to an Excel file.
        </p>
        <p>
          <a href="https://github.com/wdparker93/wdparker93" target="_blank">
            Movie Manager
          </a>
          &nbsp;: Java application that generates rankings of movies based on
          user-entered criteria and leverages custom implementations of the map
          and list abstract data types
        </p>
        <p>
          <a href="https://github.com/wdparker93/wdparker93" target="_blank">
            Service Manager
          </a>
          &nbsp;: Java application that manages a car service garage's clientele
          with an adaptable priority queue
        </p>
        <p>
          <a href="https://github.com/wdparker93/Connect4" target="_blank">
            Connect4
          </a>
          &nbsp;: Java application emulating the classic game Connect Four in
          which two players compete to connect four tokens.
        </p>
        <p>
          <a href="https://github.com/wdparker93/BumperCars" target="_blank">
            Bumper Cars
          </a>
          &nbsp;: Multi-threaded C program that simulates amusement park goers
          exploring a park and riding bumper cars.
        </p>
      </div>
    </section>
  );
}

export default Projects;
