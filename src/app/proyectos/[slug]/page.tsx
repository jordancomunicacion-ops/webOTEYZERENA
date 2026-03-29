
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
        <main style={{ paddingBottom: '5rem' }}>
            <nav style={{ padding: '1rem', background: '#f8f8f8' }}>
                <div className="container">
                    <Link href="/#projects" style={{ textDecoration: 'none', color: '#666' }}>
                        ← Volver a Proyectos
                    </Link>
                </div>
            </nav>

            <header style={{
                height: '60vh',
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${project.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '4rem',
                color: 'white'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', fontFamily: 'Playfair Display, serif' }}>{project.title}</h1>
                </div>
            </header>

            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '4rem' }}>

                    {/* Sidebar / Technical Details */}
                    <aside>
                        <div style={{ background: '#f8f8f8', padding: '2rem', borderRadius: '8px' }}>
                            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '1rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>Ficha Técnica</h3>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Cliente</strong>
                                {project.technicalDetails.client}
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Ubicación</strong>
                                {project.technicalDetails.location}
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Año</strong>
                                {project.technicalDetails.year}
                            </div>

                            <div>
                                <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Servicios</strong>
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
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>Sobre el Proyecto</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                            {project.fullDescription}
                        </p>
                        {/* Placeholder for more content */}
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginTop: '1.5rem' }}>
                            Aquí podríamos detallar más información específica, mostrar resultados obtenidos con gráficos, o incluir una galería de fotos extra del proyecto {project.title}.
                        </p>
                    </article>
                </div>
            </div>
        </main>
    );
}
