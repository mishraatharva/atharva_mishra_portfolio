function ProjectCard({ project }) {
    return (
        <div className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech">
                {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                ))}
            </div>

            <a href={project.github} target="_blank" rel="noreferrer">
                GitHub →
            </a>
        </div>
    );
}

export default ProjectCard;