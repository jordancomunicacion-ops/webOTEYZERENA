import styles from './Services.module.css'; // Reuse basic grid styles
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Proyectos Destacados</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Casos de éxito donde la tierra y la gestión se encuentran.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
