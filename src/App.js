import "./App.css";
import "./index.css";
import python from "./images/python-icon.png";
import java from "./images/java-icon.png";
import c from "./images/c-icon.png";
import htmljscss from "./images/html-js-css-icon.png";
import react from "./images/react-icon.png";

function App() {
  return (
    <div class="app-container">
      <div class="title-section">
        <div id="main-heading">Will Parker's Portfolio Page</div>
        <div id="main-heading-overlay">Will Parker's Portfolio Page</div>
        <div id="secondary-heading">Proojet Overview</div>
        <div id="secondary-heading-overlay">Project Overview</div>
      </div>
      <div class="project-overview">
        <ul id="icon-list">
          <li>
            <img src={python} id="python-icon" alt="Python Icon" />
            <a href="https://github.com/stars/wdparker93/lists/python-projects">
              Python Projects
            </a>
          </li>
          <li>
            <img src={java} id="java-icon" alt="Java Icon" />
            <a href="https://github.com/stars/wdparker93/lists/java-projects">
              Java Projects
            </a>
          </li>
          <li>
            <img src={c} id="c-icon" alt="C Icon" />
            <a href="https://github.com/stars/wdparker93/lists/c-projects">
              C Projects
            </a>
          </li>
          <li>
            <img src={htmljscss} id="fe-icon" alt="HTML JS CSS Icon" />
            <a href="https://codepen.io/wdparker93">
              Front-End Web Development Projects
            </a>
          </li>
          <li>
            <img src={react} id="react-icon" alt="React Icon" />
            <a href="https://codepen.io/wdparker93">
              Front-End Web Development Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
