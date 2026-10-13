import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects({ projects }) {
    return (
        <section className="section projects" id="projects">
        <div className="container">
            <h2>className="section-tittle"Projects</h2>
            <p className="section-subtitle">
                Here are some of the projects I've worked on. Click on the links to view the code or live demos.
            </p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    </section>
    )}
    export default Projects;