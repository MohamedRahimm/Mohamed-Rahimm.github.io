import "./Intro.css";
import { scrollIntoProjects } from "../../helpers/scrollHelper";
export default function Intro() {
  const pfpURL = new URL("../../assets/profile_pic.jpeg", import.meta.url).href;
  return (
    <header id="intro">
      <div id="intro-container">
        <h1 id="intro-text">Hello! I'm Mohamed Rahim 👋</h1>
        <p id="sub-intro-text">
          A software engineer with a passion for machine learning and
          web development.
        </p>
      <button
        id="portfolio-button"
          onClick={(e)=> {
          const rootElemChildren = document.getElementById("root")?.children
          if(rootElemChildren){
          for(const elem of rootElemChildren){
            elem.classList.remove("hidden")
          }
          }
          scrollIntoProjects(e);
        }}
      >
        View My Portfolio {">"}
      </button>
      </div>
      <div id="pfp-container">
      <img
        src={pfpURL}
        alt="A picture of Mohamed Rahim"
        id="profile-picture"
      />
      </div>
    </header>
  );
}
