import { useEffect } from "react";
import "./navbar.css";
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
      <label className="hamburger-menu">
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
              const projects = document.querySelector("main");
              projects?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              />
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/Mohameddddd/">
            <span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#B3B1B0"
                d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
              >
              </path>
              <path
                fill="#E7A41F"
                d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
              >
              </path>
              <path
                fill="#FFFFFF"
                d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
              >
              </path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://app.joinhandshake.com/profiles/49444866">
            <span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 165 165"
              fill="none"
            >
              <rect
                width="165"
                height="165"
                rx="35.61"
                fill="url(#paint0_linear_159_1360)"
              />
              <g filter="url(#filter0_i_159_1360)">
                <path
                  d="M99.5856 33.1611L92.95 70.9048L73.4585 86.8363L82.8902 33.1611H63.9964L46.521 132.161H65.4147L70.2673 104.772L89.8297 88.719L82.1101 132.161H101.014L118.479 33.1611H99.5856Z"
                  fill="url(#paint1_linear_159_1360)"
                />
              </g>
              <path
                d="M99.8512 33.1611H99.5856L92.9621 70.8361L93.2722 70.5826L99.8512 33.1611Z"
                fill="#052218"
              />
              <path
                d="M64.2618 33.1611H63.9964L46.521 132.161H65.4147L65.4718 131.839H46.8433L64.2618 33.1611Z"
                fill="#052218"
              />
              <path
                d="M70.5776 104.517L70.5896 104.45L90.152 88.3967L82.4324 131.839H101.071L101.014 132.161H82.1101L89.8297 88.719L70.5776 104.517Z"
                fill="#052218"
              />
              <path
                d="M64.0163 33.0349H63.7519L46.3438 131.654L46.6648 131.333L64.0163 33.0349Z"
                fill="#F5FFD6"
              />
              <path
                d="M99.4702 33.0349H99.2056L92.596 70.6336L92.9179 70.3696L99.4702 33.0349Z"
                fill="#F5FFD6"
              />
              <path
                d="M70.32 104.052L70.308 104.12L89.4869 88.3813L81.7981 131.65L82.1191 131.329L89.8079 88.0603L70.32 104.052Z"
                fill="#F5FFD6"
              />
              <defs>
                <filter
                  id="filter0_i_159_1360"
                  x="46.3605"
                  y="33.1611"
                  width="72.119"
                  height="99.1605"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-0.481559" dy="0.321039" />
                  <feGaussianBlur stdDeviation="0.0802598" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.00802083 0 0 0 0 0.0803289 0 0 0 0 0.0875 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_159_1360"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_159_1360"
                  x1="125.192"
                  y1="-3.30592"
                  x2="96.1385"
                  y2="189.689"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#DDFF55" />
                  <stop offset="0.865235" stopColor="#C7F542" />
                  <stop offset="0.994449" stopColor="#D3FB52" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_159_1360"
                  x1="115.447"
                  y1="40.9259"
                  x2="39.4339"
                  y2="101.237"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#052326" />
                  <stop offset="1" stopColor="#073D42" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
