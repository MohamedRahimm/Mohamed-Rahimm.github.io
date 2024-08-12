import "./App.css";
import Navbar from "./components/navbar";
export default function App() {
  const url = new URL("./assets/me.jpeg", import.meta.url).href;
  return (
    <>
      <Navbar></Navbar>
      <header>
        <div id="intro-container">
          <h1 id="intro-text">Hello! I'm Mohamed Rahim 👋</h1>
          <p id="sub-intro-text">
            An aspiring software engineer with a passion for machine learning
            and web development. I'm driven by the desire to create impactful
            solutions, whether it's through algorithms or dynamic web
            applications.
          </p>
          <button id="portfolio-button">View My Portfolio {">"}</button>
        </div>
        <img
          src={url}
          alt="A picture of Mohamed Rahim smiling with his dog"
          id="profile-picture"
        />
      </header>
    </>
  );
}
