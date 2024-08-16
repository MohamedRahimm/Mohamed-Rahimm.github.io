import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Intro from "./components/Intro/Intro";
export default function App() {
  const scriptalURL =
    new URL("./assets/scriptal_demo.png", import.meta.url).href;
  const nnURL = new URL("./assets/nn_demo.png", import.meta.url).href;
  const lstmURL = new URL("./assets/lstm_demo.png", import.meta.url).href;
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <main>
        <h1 id="projects-title">Projects</h1>
        <Project
          title="Scriptal 📄"
          description="Scriptal is a dynamic programming language inspired by JS and Python. Developed without external library dependencies, it features higher order functions, closures, and native functions and methods."
          language="ts"
          demo={scriptalURL}
          link="https://github.com/MohamedRahimm/Scriptal"
        >
        </Project>
        <Project
          title="Neural Network🧠"
          description="A Logistic Regression model using NumPy that predicts weight categories based on BMI data. It incorporates L2 regularization and dropout to prevent overfitting, while employing cross-validation and early stopping techniques to improve generalization performance."
          language="py"
          demo={nnURL}
          link="https://github.com/MohamedRahimm/ml-from-scratch"
        >
        </Project>
        <Project
          title="Sentiment Analysis 📊"
          description="An LSTM sentiment analysis model using PyTorch on the IMDB movie dataset. Extensive data preprocessing was conducted to reduce training time and a custom BPE tokenizer was trained using Hugging Face to optimizing vocabulary size. "
          language="py"
          demo={lstmURL}
          link="https://github.com/MohamedRahimm/torch-ML"
        >
        </Project>
      </main>
    </>
  );
}
