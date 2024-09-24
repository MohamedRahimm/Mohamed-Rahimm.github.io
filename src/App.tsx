import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Intro from "./components/Intro/Intro";
import { Meteor } from "./components/Meteor/Meteor";
import { Star } from "./components/Star/Star";
export default function App() {
  return (
    <>
    <section id="home">
      <Navbar></Navbar>
      <Intro></Intro>
     <div className="meteors">
         <Meteor number={30}></Meteor>
      </div> 
      
      <div className="stars">
      <Star number={100}></Star>
      </div>
    </section>
     <main >
        <h1 id="projects-title">Projects</h1>
        <div id="projects-wrapper">
        <Project
          title="Scriptal 📄"
          description="Scriptal is a dynamic programming language inspired by JS and Python. Developed without external library dependencies, it features higher order functions, closures, and native functions and methods."
          date="Feb 2024 - March 2024"
          imgURL={new URL('./assets/scriptal.png',import.meta.url).href}
          websiteURL="https://mohamedrahimm.github.io/Scriptal/"
          sourceCodeURL="https://github.com/MohamedRahimm/Scriptal"
        />
         <Project
          title="Weight Categorizer 🏋️"
          description="A Logistic Regression model implemented in NumPy that predicts weight categories based on BMI data, while also considering age and fitness levels. It uses L2 regularization, dropout and other techniques to prevent overfitting and optimize performance. " 
          date="April 2024 - May 2024"
          imgURL={new URL('./assets/weight_cat.png',import.meta.url).href}
          websiteURL="https://github.com/MohamedRahimm/ml-from-scratch"
          sourceCodeURL="https://github.com/MohamedRahimm/ml-from-scratch"
        />
        <Project
          title="Sentiment Analysis 📊"
          description="An LSTM sentiment analysis model using PyTorch on the IMDB movie dataset.Extensive data preprocessing reduced training time with a custom tokenizer using Hugging Face to optimize vocabulary size." 
          date="June 2024 - July 2024"
          imgURL={new URL('./assets/senti_analysis.png',import.meta.url).href}
          websiteURL="https://github.com/MohamedRahimm/torch-ML"
          sourceCodeURL="https://github.com/MohamedRahimm/torch-ML"
        />

        </div>
      </main> 
    </>
  );
}
