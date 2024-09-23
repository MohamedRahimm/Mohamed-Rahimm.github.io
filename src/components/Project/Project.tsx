import {websiteSVG,sourceSVG} from "../../helpers/svgHelper"
import "./Project.css";
interface ProjectProps {
  title: string;
  description: string;
  date: string;
  imgURL: string;
  websiteURL: string;
  sourceCodeURL: string
}
export default function Project(props: ProjectProps) {
  return (
    <div className="project-container">
    <a href={props.websiteURL}>
      <img className="project-image" src={props.imgURL}></img>
    </a>
    <div className="project-text-container">
    <h1 className="project-title">{props.title}</h1>
    <h2 className="project-date">{props.date}</h2>
    <section className="project-description">
     {props.description} 
    </section>
    <div className="project-links">
      <a className="project-website" href={props.websiteURL}>
        {websiteSVG}
        Website
        </a>
      <a className="project-code" href={props.sourceCodeURL}>
        {sourceSVG}
        Source 
        </a>
    </div>

    </div>
  </div>
  );
}
