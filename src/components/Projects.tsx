"use client";

import { useRef } from 'react';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const trackRef = useRef<HTMLDivElement>(null);

    // Drag-to-scroll state
    const isDown = useRef(false);
    const startX = useRef(0);
    const startScroll = useRef(0);
    const dragged = useRef(false);

    const onMouseDown = (e: React.MouseEvent) => {
        const el = trackRef.current;
        if (!el) return;
        isDown.current = true;
        dragged.current = false;
        startX.current = e.pageX;
        startScroll.current = el.scrollLeft;
    };

    const onMouseMove = (e: React.MouseEvent) => {
        const el = trackRef.current;
        if (!el || !isDown.current) return;
        const distance = e.pageX - startX.current;
        if (Math.abs(distance) > 5) dragged.current = true;
        el.scrollLeft = startScroll.current - distance;
    };

    const endDrag = () => {
        isDown.current = false;
    };

    // Prevent card navigation when the user was dragging
    const onClickCapture = (e: React.MouseEvent) => {
        if (dragged.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    // Vertical wheel → horizontal scroll
    const onWheel = (e: React.WheelEvent) => {
        const el = trackRef.current;
        if (!el) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            el.scrollLeft += e.deltaY;
        }
    };

    const scrollByCards = (direction: number) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>(':scope > *');
        const amount = card ? card.offsetWidth + 32 /* gap */ : el.clientWidth * 0.8;
        el.scrollBy({ left: amount * direction, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Proyectos Destacados</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Casos de éxito donde la tierra y la gestión se encuentran.
                    </p>
                </div>

                <div className={styles.sliderWrap}>
                    <button
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={() => scrollByCards(-1)}
                        aria-label="Anterior"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div
                        ref={trackRef}
                        className={styles.grid}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={endDrag}
                        onMouseLeave={endDrag}
                        onClickCapture={onClickCapture}
                        onWheel={onWheel}
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <button
                        className={`${styles.arrow} ${styles.arrowRight}`}
                        onClick={() => scrollByCards(1)}
                        aria-label="Siguiente"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
