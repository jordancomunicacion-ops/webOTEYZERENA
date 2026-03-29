'use client';

import { useState } from 'react';
import {
    Ear,
    Lightbulb,
    ClipboardList,
    Rocket,
    LineChart,
    UtensilsCrossed,
    ChefHat,
    Search,
    ArrowRight
} from 'lucide-react';
import styles from './Methodology.module.css';

const steps = [
    {
        id: 1,
        title: "Escucha y Diagnóstico",
        icon: <Ear size={32} strokeWidth={1} />,
        desc: "El primer paso es entenderte. Realizamos una escucha activa para comprender tu historia y necesidades. Analizamos la situación actual, estudiamos la competencia y realizamos un 'Cliente Misterioso' para tener una visión 360º de tu negocio.",
        deliverables: ["Informe de Auditoría", "Análisis de Competencia", "Diagnóstico Diferencial"]
    },
    {
        id: 2,
        title: "Diseño y Creación",
        icon: <Lightbulb size={32} strokeWidth={1} />,
        desc: "Aportamos ideas y definimos el concepto gastronómico. Redactamos la propuesta de valor, diseñamos la oferta gastronómica inicial y estructuramos la identidad culinaria que te hará único en el mercado.",
        deliverables: ["Concepto Gastronómico", "Moodboard Culinario", "Propuesta de Carta"]
    },
    {
        id: 3,
        title: "Planificación Técnica",
        icon: <ClipboardList size={32} strokeWidth={1} />,
        desc: "Convertimos las ideas en números. Elaboramos escandallos detallados, fichas técnicas de producción y realizamos la ingeniería del menú para asegurar la rentabilidad de cada plato antes de encender los fogones.",
        deliverables: ["Escandallos", "Fichas Técnicas", "Matriz de Rentabilidad"]
    },
    {
        id: 4,
        title: "Implementación",
        icon: <Rocket size={32} strokeWidth={1} />,
        desc: "Pasamos a la acción. Realizamos pruebas de platos, formamos al equipo de cocina y sala, seleccionamos el menaje y la maquinaria necesaria. Te acompañamos en la inauguración para asegurar que todo salga perfecto.",
        deliverables: ["Training de Equipo", "Manual de Operaciones", "Protocolo de Servicio"]
    },
    {
        id: 5,
        title: "Seguimiento",
        icon: <LineChart size={32} strokeWidth={1} />,
        desc: "No te dejamos solo. Tras la apertura, monitorizamos los resultados, analizamos la satisfacción del cliente y realizamos los ajustes necesarios para mantener el rumbo hacia el éxito y la excelencia.",
        deliverables: ["Informes de Seguimiento", "Ajustes de Carta", "Auditoría Continua"]
    }
];

export default function Methodology() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="methodology" className={styles.section}>
            <div className="container">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`${styles.item} ${openId === step.id ? styles.open : ''}`}
                        onClick={() => toggle(step.id)}
                    >
                        <div className={styles.header}>
                            <div className={styles.iconWrapper}>
                                {step.icon}
                            </div>
                            <h3 className={styles.title}>{step.title}</h3>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.description}>
                                <p>{step.desc}</p>
                            </div>
                            <div className={styles.deliverables}>
                                <span className={styles.deliverablesTitle}>Resultados (Entregables)</span>
                                <ul className={styles.linkList}>
                                    {step.deliverables.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.arrowWrapper}>
                            <span className={styles.arrow}></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
