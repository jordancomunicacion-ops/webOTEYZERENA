"use client";

import Link from 'next/link';
import styles from './ProjectCard.module.css';
import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/proyectos/${project.slug}`} className={styles.card}>
            <div className={styles.imageContainer}>
                {/* 
                   Using a colored div as placeholder if image fails or isn't there yet. 
                    Ideally use Next.js Image component, but regular img for now to simplify external url handling if needed.
                */}
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#ccc',
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className={styles.image}
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                </div>
            </div>
        </Link>
    );
}
