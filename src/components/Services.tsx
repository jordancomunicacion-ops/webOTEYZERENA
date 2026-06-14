"use client";

import { useState } from 'react';
import styles from './Services.module.css';
import Modal from './Modal';
import Contact from './Contact';

const services = [
    {
        category: "Gestión Gastronómica",
        items: ["Concepto Gastronómico", "Diseño de Cartas y Menús", "Ingeniería de Menú (Rentabilidad)", "Escandallos y Fichas Técnicas"]
    },
    {
        category: "Operaciones",
        items: ["Organización de Cocina", "Selección de Maquinaria", "Manuales de Operaciones", "Control de Mermas"]
    },
    {
        category: "Audioría y Análisis",
        items: ["Auditoría Interna/Externa", "Cliente Misterioso", "Análisis de Competencia", "Diagnóstico de Situación"]
    },
    {
        category: "Formación y Equipo",
        items: ["Selección de Personal", "Formación de Equipos", "Liderazgo en Cocina", "Protocolos de Servicio"]
    }
];

const apps = [
    {
        name: "Contabilidad",
        description: "Gestiona ingresos, gastos y rentabilidad desde un único panel, con informes claros para decidir mejor.",
        features: ["Cuadre de caja diario", "Control de costes y márgenes", "Informes y previsiones"]
    },
    {
        name: "Obrador",
        description: "Estandariza recetas, escandallos y producción. Optimiza compras y controla las mermas.",
        features: ["Escandallos y fichas técnicas", "Planificación de producción", "Control de stock y mermas"]
    },
    {
        name: "CRM",
        description: "Conoce a tus clientes, fideliza y personaliza la experiencia para que vuelvan una y otra vez.",
        features: ["Ficha y historial de cliente", "Fidelización y promociones", "Segmentación y campañas"]
    },
    {
        name: "Reservas",
        description: "Recibe y organiza reservas online 24/7, optimiza la sala y reduce los no-shows.",
        features: ["Reservas online 24/7", "Gestión de sala y turnos", "Recordatorios automáticos"]
    }
];

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className="text-center mb-4">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Servicios integrales y apps a medida</h2>
                    <p style={{ maxWidth: '640px', margin: '0 auto', color: '#666' }}>
                        Soluciones completas para transformar tu negocio desde la raíz hasta la mesa,
                        con tecnología propia que digitaliza y mejora tu gestión.
                    </p>
                </div>

                <div className={styles.columns}>
                    {/* Columna izquierda: Servicios Integrales */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Servicios Integrales</h3>
                        <div className={styles.grid}>
                            {services.map((service, idx) => (
                                <div key={idx} className={styles.card}>
                                    <h4 className={styles.cardTitle}>{service.category}</h4>
                                    <ul className={styles.cardList}>
                                        {service.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna derecha: Apps a medida */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Apps a medida</h3>
                        <div className={styles.grid}>
                            {apps.map((app, idx) => (
                                <div key={idx} className={`${styles.card} ${styles.appCard}`}>
                                    <h4 className={styles.cardTitle}>{app.name}</h4>
                                    <p className={styles.description}>{app.description}</p>
                                    <ul className={styles.featureList}>
                                        {app.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.ctaWrap}>
                    <button className={styles.ctaBtn} onClick={() => setIsModalOpen(true)}>Solicita una demo</button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Contact inModal={true} defaultService="demo_apps" />
            </Modal>
        </section>
    );
}
