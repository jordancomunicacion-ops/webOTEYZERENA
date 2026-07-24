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
        name: "Reservas",
        description: "Herramienta propia con la que gestionas las reservas de tu negocio desde un único panel: recibe y organiza reservas online 24/7, optimiza la sala y los turnos, y reduce los no-shows con recordatorios automáticos."
    },
    {
        name: "Obrador",
        description: "Herramienta propia con la que controlas la producción de tu negocio desde un único panel: estandariza recetas y escandallos, planifica la producción, y optimiza las compras controlando el stock y las mermas."
    },
    {
        name: "CRM OTEYZERENA",
        description: "Herramienta propia con la que cada cliente conecta sus cuentas de Google y de redes sociales (Google Business Profile y Google Analytics, Facebook, Instagram) y las gestiona desde un único panel: métricas, ficha de empresa, publicaciones y mensajes."
    },
    {
        name: "Contabilidad",
        description: "Herramienta propia con la que llevas las cuentas de tu negocio desde un único panel: gestiona ingresos, gastos y rentabilidad, cuadra la caja diaria y controla costes y márgenes con informes claros para decidir mejor."
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
