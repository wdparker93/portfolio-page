import "./App.css";
import "./index.css";
import python from "./images/python-icon.png";
import java from "./images/java-icon.png";
import c from "./images/c-icon.png";
import felang from "./images/fe-languages.png";
import linkedin from "./images/linked-in-icon.png";
import github from "./images/github-icon.png";
import resume from "./images/resume-icon.png";
import computer from "./images/retro-computer.png";
import arrow from "./images/arrow.png";

function App() {
  return (
    <div class="app-container">
      <div class="title-section">
        <div id="main-heading">Will Parker's Portfolio Page</div>
        <div id="main-heading-overlay">Will Parker's Portfolio Page</div>
        <div id="secondary-heading">Developer Overview</div>
        <div id="secondary-heading-overlay">Developer Overview</div>
      </div>
      <div id="content-wrapper">
        <div class="project-overview">
          <div class="window-title" id="project-window-title">
            Project Summary
          </div>
          <ul id="icon-list">
            <li>
              <img src={python} id="python-icon" alt="Python Icon" />
              <a
                class="link"
                href="https://github.com/stars/wdparker93/lists/python-projects"
              >
                Python Projects
              </a>
            </li>
            <li>
              <img src={java} id="java-icon" alt="Java Icon" />
              <a
                class="link"
                href="https://github.com/stars/wdparker93/lists/java-projects"
              >
                Java Projects
              </a>
            </li>
            <li>
              <img src={c} id="c-icon" alt="C Icon" />
              <a
                class="link"
                href="https://github.com/stars/wdparker93/lists/c-projects"
              >
                C Projects
              </a>
            </li>
            <li>
              <img src={felang} id="fe-icon" alt="HTML JS CSS Icon" />
              <a class="link" id="fe-link" href="https://codepen.io/wdparker93">
                Web Development Projects
              </a>
            </li>
          </ul>
        </div>
        <div class="professional-links">
          <div class="window-title" id="professional-window-title">
            Networking Information
          </div>
          <ul id="link-list">
            <li>
              <img src={linkedin} id="linkedin-icon" alt="LinkedIn Icon" />
              <a
                class="link"
                id="linkedin-link"
                href="https://www.linkedin.com/in/william-parker-215877aa"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <img src={github} id="github-icon" alt="Github Icon" />
              <a
                class="link"
                id="github-link"
                href="https://github.com/wdparker93"
              >
                Github Page
              </a>
            </li>
            <li>
              <img src={resume} id="resume-icon" alt="Resume Icon" />
              <a
                class="link"
                id="resume-link"
                href="https://app.pluralsight.com/id"
              >
                Resume
              </a>
            </li>
          </ul>
          <div id="down-arrow">
            <img src={arrow} id="arrow-picture" alt="Down Arrow" />
            <p id="synopsis-indicator">A bit about me</p>
            <p id="synopsis-indicator-overlay">A bit about me</p>
          </div>
        </div>
        <div id="retro-computer">
          <img src={computer} id="computer-picture" alt="Retro Computer" />
        </div>
      </div>
      <hr id="horizontal-break-1"></hr>
      <div class="synopsis-section">
        <p id="synopsis">
          Hello! <br></br>
          <br></br>My name is Will Parker. I've recently switched career paths
          from chemical engineering to software development. I'm enjoying the
          change and the process of learning new technologies. The opportunity
          to contribute to the rapidly evolving industry of information and
          computer science is exciting, and I'm thankful to have the chance to
          leave an impact.
          <br></br>
          <br></br>I hope you enjoy your visit to my web page. I can be reached
          via LinkedIn if you have any questions.
          <br></br>
          <br></br>
          -Will
        </p>
      </div>
    </div>
  );
}
export default App;
