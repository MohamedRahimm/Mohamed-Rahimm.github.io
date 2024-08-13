import "./project.css";
interface ProjectProps {
  title: string;
  description: string;
  language: React.ReactElement;
  demo: React.ReactElement;
  link: string;
}
export default function Project(props: ProjectProps) {
  return (
    <>
      <div className="project-container">
        <header className="project-header">
          <span className="project-title">
            {props.title}
          </span>
          <span className="project-language">{props.language}</span>
        </header>
        <article className="project-description">{props.description}</article>
        <a className="project-sourcecode" href={props.link}>Source Code</a>
      </div>
      <div className="project-demo">
        {props.demo}
      </div>
    </>
  );
}
