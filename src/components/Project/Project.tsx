import { ReactSVG } from "react";
import { pythonSVG, typescriptSVG } from "../../helpers/svgHelper";
import "./project.css";
interface ProjectProps {
  title: string;
  description: string;
  language: string;
  demo: string;
  link: string;
}
const map: Record<string, React.ReactElement<ReactSVG>> = {
  "ts": typescriptSVG,
  "py": pythonSVG,
};
export default function Project(props: ProjectProps) {
  return (
    <>
      <div className="project-container">
        <div className="project-text-container">
          <header className="project-header">
            <h2 className="project-title">
              {props.title}
            </h2>
            <div className="project-language">{map[props.language]}</div>
          </header>
          <article className="project-description">{props.description}</article>
          <a className="project-sourcecode" href={props.link}>Source Code</a>
        </div>
        <a href={props.link}>
          <img src={props.demo}>
          </img>
        </a>
      </div>
    </>
  );
}
