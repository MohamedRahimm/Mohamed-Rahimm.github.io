import "./App.css";
import Navbar from "./components/navbar";
import Project from "./components/project";
export default function App() {
  const pfpURL = new URL("./assets/profile_pic.jpeg", import.meta.url).href;
  const scriptalURL =
    new URL("./assets/scriptal_demo.png", import.meta.url).href;
  const nnURL = new URL("./assets/nn_demo.png", import.meta.url).href;

  return (
    <>
      <Navbar></Navbar>
      <header id="intro">
        <div id="intro-container">
          <h1>Hello! I'm Mohamed Rahim 👋</h1>
          <p id="sub-intro-text">
            An aspiring software engineer with a passion for machine learning
            and web development.
          </p>
        </div>

        <img
          src={pfpURL}
          alt="A picture of Mohamed Rahim smiling with his dog"
          id="profile-picture"
        />
        <button
          id="portfolio-button"
          onClick={(e) => {
            e.preventDefault();
            const projects = document.querySelector("main");
            projects?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          View My Portfolio {">"}
        </button>
      </header>
      <main>
        <h1 id="projects-title">Projects</h1>
        <Project
          title="Scriptal 📄"
          description="Scriptal is a dynamic programming language inspired by JS and Python. Developed without external library dependencies, it features higher order functions, closures, and native functions and methods."
          language={
            <svg
              style={{ backgroundColor: "#3178c6" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 512 512"
            >
              <rect fill="#3178c6" height="512" rx="50" width="512" />
              <rect fill="#3178c6" height="512" rx="50" width="512" />
              <path
                clipRule="evenodd"
                d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          }
          demo={<img src={scriptalURL} id="scriptal-demo"></img>}
          link="https://github.com/MohamedRahimm/custom-lang"
        >
        </Project>
        <Project
          title="Neural Network🧠"
          description="A Logistic Regression model using NumPy that predicts weight categories based on BMI data. It incorporates L2 regularization and dropout to prevent overfitting, while employing cross-validation and early stopping techniques to improve generalization performance."
          language={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              style={{ transform: "scale(2)" }}
            >
              <path
                d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                fill="url(#a)"
              />
              <path
                d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                fill="url(#b)"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="19.075"
                  y1="18.782"
                  x2="34.898"
                  y2="34.658"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#387EB8" />
                  <stop offset="1" stopColor="#366994" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="28.809"
                  y1="28.882"
                  x2="45.803"
                  y2="45.163"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE052" />
                  <stop offset="1" stopColor="#FFC331" />
                </linearGradient>
              </defs>
            </svg>
          }
          demo={
            <img src={nnURL} id="nn-demo">
            </img>
          }
          link="https://github.com/MohamedRahimm/ml-from-scratch"
        >
        </Project>
        {
          /* <Project
          title="Sentiment Analysis 📊"
          description="An LSTM sentiment analysis model using PyTorch on the IMDB movie dataset. Extensive data preprocessing was conducted to reduce training time and a custom BPE tokenizer was trained using Hugging Face to optimizing vocabulary size. "
          language={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              style={{ transform: "scale(2)" }}
            >
              <path
                d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                fill="url(#a)"
              />
              <path
                d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                fill="url(#b)"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="19.075"
                  y1="18.782"
                  x2="34.898"
                  y2="34.658"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#387EB8" />
                  <stop offset="1" stopColor="#366994" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="28.809"
                  y1="28.882"
                  x2="45.803"
                  y2="45.163"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE052" />
                  <stop offset="1" stopColor="#FFC331" />
                </linearGradient>
              </defs>
            </svg>
          }
          demo={
            <img src={nnURL} id="nn-demo">
            </img>
          }
          link="https://github.com/MohamedRahimm/torch-ML"
        >
        </Project> */
        }
      </main>
    </>
  );
}
