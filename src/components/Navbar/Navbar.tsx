import { useEffect } from "react";
import { githubSVG, handshakeSVG, leetcodeSVG } from "../../helpers/svgHelper";

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
        const links = ["GitHub", "LeetCode", "Handshake"];
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
          <a href="mailto:mo319281@live.seminolestate.edu">Contact</a>
        </li>
        <li>
          <a href="https://github.com/MohamedRahimm">
            <span></span>
            {githubSVG}
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/Mohameddddd/">
            <span></span>
            {leetcodeSVG}
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
