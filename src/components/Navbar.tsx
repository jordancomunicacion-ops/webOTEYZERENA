'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={styles.nav}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <span className={styles.imagotype}>O</span>
                    <span className={styles.brandName}>OTEYZERENA</span>
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    <Link href="#methodology" className={styles.link}>Metodología</Link>
                    <Link href="#services" className={styles.link}>Servicios</Link>
                    <Link href="#apps" className={styles.link}>Apps</Link>
                    <Link href="#projects" className={styles.link}>Proyectos</Link>
                </div>

                {/* Hamburger Button */}
                <button 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileLinks}>
                    <Link href="#methodology" className={styles.mobileLink} onClick={closeMenu}>Metodología</Link>
                    <Link href="#services" className={styles.mobileLink} onClick={closeMenu}>Servicios</Link>
                    <Link href="#apps" className={styles.mobileLink} onClick={closeMenu}>Apps</Link>
                    <Link href="#projects" className={styles.mobileLink} onClick={closeMenu}>Proyectos</Link>
                    <Link href="#contact" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={closeMenu}>Contacto</Link>
                </div>
            </div>
        </nav>
    );
}
