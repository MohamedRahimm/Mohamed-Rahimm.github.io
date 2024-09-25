import { useEffect} from "react";
import { githubSVG, handshakeSVG, linkedinSVG } from "../../helpers/svgHelper";

import "./Navbar.css";
import { scrollIntoProjects } from "../../helpers/scrollHelper";

export default function Navbar() {
  useEffect(() => {
    const elements = document.querySelectorAll("ul > li > a > span");
    const updateText = () => {
      if (window.innerWidth > 768) {
        elements.forEach((element) => {
          (element as HTMLElement).innerText = "";
        });
      } else {
        const links = ["GitHub", "Linkedin", "Handshake"];
        elements.forEach((element, index) => {
          (element as HTMLElement).innerText = links[index];
        });
      }
    };
    updateText();
    window.addEventListener("resize", updateText);
    return () => {
      window.removeEventListener("resize", updateText);
    };
  }, []);
  return (
    <nav>
      <label id="hamburger-menu">
        <input type="checkbox">
        </input>
      </label>
      <ul>
        <li>
          <a href="/portfolio/">Home</a>
        </li>
        <li>
          <a
            href="/portfolio/"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.classList.remove("hidden")
              const hamburgerMenu = document.querySelector(
                "input",
              )!;
              hamburgerMenu.checked = false;
              scrollIntoProjects(e);
            }}
          >
            Recent Work
          </a>
        </li>
        <li>
          <a id="contact" onClick={()=>{
            navigator.clipboard.writeText("mohamedsrahim2005@gmail.com");
            (document.querySelector("#contact~span")! as HTMLSpanElement).innerText = "e-mail successfully copied"
            setTimeout(()=>{
            (document.querySelector("#contact~span")! as HTMLSpanElement).innerText = "mohamedsrahim2005@gmail.com \n click to copy to clipboard"
            },2000);
          }}
          >Contact</a>
          <span>
            mohamedsrahim2005@gmail.com
            click to copy to clipboard
          </span>
        </li>
        <li>
          <a href="https://github.com/MohamedRahimm">
            <span></span>
            {githubSVG}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohamed-rahim-25240a328">
            <span></span>
            {linkedinSVG}
          </a>
        </li>
        <li>
          <a href="https://app.joinhandshake.com/profiles/49444866">
            <span></span>
            {handshakeSVG}
          </a>
        </li>
      </ul>
    </nav>
  );
}
