"use client";

import { useState } from 'react';
import styles from './Apps.module.css';
import Modal from './Modal';
import Contact from './Contact';

const apps = [
    {
        name: "Contabilidad",
        tagline: "Control financiero en tiempo real",
        description: "Gestiona ingresos, gastos y rentabilidad de tu negocio desde un único panel. Informes claros para tomar mejores decisiones.",
        features: ["Cuadre de caja diario", "Control de costes y márgenes", "Informes y previsiones"],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 14l3-4 4 3 5-7" />
            </svg>
        )
    },
    {
        name: "Obrador",
        tagline: "Producción y fichas técnicas",
        description: "Estandariza recetas, escandallos y producción. Optimiza compras, controla mermas y mantén la calidad en cada elaboración.",
        features: ["Escandallos y fichas técnicas", "Planificación de producción", "Control de stock y mermas"],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2v6a6 6 0 0 0 12 0V2" />
                <path d="M6 8h12" />
                <path d="M9 14v8M15 14v8M9 22h6" />
            </svg>
        )
    },
    {
        name: "CRM",
        tagline: "Tus clientes, mejor atendidos",
        description: "Conoce a tus clientes, fideliza y personaliza la experiencia. Historial, preferencias y campañas para que vuelvan una y otra vez.",
        features: ["Ficha y historial de cliente", "Fidelización y promociones", "Segmentación y campañas"],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    },
    {
        name: "Reservas",
        tagline: "Gestión de mesas sin fricción",
        description: "Recibe y organiza reservas online 24/7. Optimiza la ocupación de sala, reduce no-shows y mejora la experiencia desde el primer contacto.",
        features: ["Reservas online 24/7", "Gestión de sala y turnos", "Recordatorios automáticos"],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M9 16l2 2 4-4" />
            </svg>
        )
    }
];

export default function Apps() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="apps" className={styles.section}>
            <div className="container">
                <div className="text-center mb-4">
                    <span className={styles.eyebrow}>Herramientas digitales</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Nuestras Apps</h2>
                    <p style={{ maxWidth: '640px', margin: '0 auto', color: '#666' }}>
                        Tecnología propia para digitalizar y mejorar la gestión de tu negocio.
                        Soluciones integradas que trabajan juntas para que tú te centres en lo importante.
                    </p>
                </div>

                <div className={styles.grid}>
                    {apps.map((app, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.iconWrap}>{app.icon}</div>
                            <h3 className={styles.cardTitle}>{app.name}</h3>
                            <p className={styles.tagline}>{app.tagline}</p>
                            <p className={styles.description}>{app.description}</p>
                            <ul className={styles.featureList}>
                                {app.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrap}>
                    <p className={styles.ctaText}>¿Quieres ver cómo encajan en tu negocio?</p>
                    <button className={styles.ctaBtn} onClick={() => setIsModalOpen(true)}>Solicita una demo</button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Contact inModal={true} defaultService="demo_apps" />
            </Modal>
        </section>
    );
}
