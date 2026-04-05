"use client";

import { useState } from 'react';
import Link from 'next/link'; // Still keeping it if needed, but we might remove if unused
import styles from './Hero.module.css';
import Modal from './Modal';
import Contact from './Contact';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>de la tierra</h1>
                <p className={styles.subtitle}>
                    Optimizamos la gestión, el concepto y la rentabilidad de tu negocio hostelero con una visión enraizada en el producto y la innovación.
                </p>
                <div className={styles.actions}>
                    <button
                        className={styles.btnPrimary}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Hablemos de tu Proyecto
                    </button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Contact inModal={true} />
            </Modal>
        </section>
    );
}
