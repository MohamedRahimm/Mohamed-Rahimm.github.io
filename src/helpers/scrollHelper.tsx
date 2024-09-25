export const scrollIntoProjects = (e: React.MouseEvent) => {
  e.preventDefault();
  const projects = document.querySelector("#projects");
  projects?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
