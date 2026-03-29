import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './ProjectPage.module.css';

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <div className="container">
                    <Link href="/#projects" style={{ textDecoration: 'none', color: '#666' }}>
                        ← Volver a Proyectos
                    </Link>
                </div>
            </nav>

            <header 
                className={styles.header}
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <h1 className={styles.title}>{project.title}</h1>
                </div>
            </header>

            <div className={`container ${styles.contentWrapper}`}>
                <div className={styles.grid}>

                    {/* Sidebar / Technical Details */}
                    <aside>
                        <div className={styles.sidebarBox}>
                            <h3 className={styles.sidebarTitle}>Ficha Técnica</h3>

                            <div className={styles.detailGroup}>
                                <strong className={styles.detailLabel}>Cliente</strong>
                                {project.technicalDetails.client}
                            </div>

                            <div className={styles.detailGroup}>
                                <strong className={styles.detailLabel}>Ubicación</strong>
                                {project.technicalDetails.location}
                            </div>

                            <div className={styles.detailGroup}>
                                <strong className={styles.detailLabel}>Año</strong>
                                {project.technicalDetails.year}
                            </div>

                            <div>
                                <strong className={styles.detailLabel}>Servicios</strong>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {project.technicalDetails.services.map((service, index) => (
                                        <li key={index} style={{ marginBottom: '0.5rem' }}>• {service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <article>
                        <h2 className={styles.articleTitle}>Sobre el Proyecto</h2>
                        <p className={styles.articleText}>
                            {project.fullDescription}
                        </p>
                        {/* Placeholder for more content */}
                        <p className={`${styles.articleText} mb-2`}>
                            Aquí podríamos detallar más información específica, mostrar resultados obtenidos con gráficos, o incluir una galería de fotos extra del proyecto {project.title}.
                        </p>
                    </article>
                </div>
            </div>
        </main>
    );
}
