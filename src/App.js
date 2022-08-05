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
          </li>
          <li>
            <img src={java} id="java-icon" alt="Java Icon" />
          </li>
          <li>
            <img src={c} id="c-icon" alt="C Icon" />
          </li>
          <li>
            <img src={htmljscss} id="fe-icon" alt="HTML JS CSS Icon" />
          </li>
          <li>
            <img src={react} id="react-icon" alt="React Icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
