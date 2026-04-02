import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="container">

            {/* HEADING WRAPPER */}
            <div className="projects-header">
                <h1 className="projects-title">Projects:</h1>
            </div>

            {/* PROJECT GRID */}
            <div className="grid">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>

        </div>
    );
}

export default Projects;