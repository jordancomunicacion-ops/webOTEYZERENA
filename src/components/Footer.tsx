import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.brand}>OTEYZERENA</h3>
                        <p className={styles.description}>
                            Asesoría especializada en sector primario y alta gastronomía. Transformamos la tradición en excelencia operativa.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.title}>Contacto</h4>
                        <div className={styles.contactGroup}>
                            <a href="mailto:contacto@oteyzerena.com" className={styles.contactLink}>contacto@oteyzerena.com</a>
                            <a href="tel:+34680657132" className={styles.contactLink}>+34 680 657 132</a>
                            <a
                                href="https://www.linkedin.com/company/oteyzerena"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.contactLink} ${styles.socialLink}`}
                                aria-label="OTEYZERENA en LinkedIn"
                            >
                                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.title}>Legal</h4>
                        <div className={styles.contactGroup}>
                            <Link href="/privacidad" className={styles.contactLink}>Política de Privacidad</Link>
                            <Link href="/terminos" className={styles.contactLink}>Términos y Condiciones</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    © {new Date().getFullYear()} OTEYZERENA — Jordazola SL. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
