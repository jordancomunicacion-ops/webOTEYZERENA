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
                            <a href="mailto:info@sotodelprior.com" className={styles.contactLink}>info@sotodelprior.com</a>
                            <a href="tel:+34680657132" className={styles.contactLink}>+34 680 657 132</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    © {new Date().getFullYear()} OTEYZERENA Asesoría Gastronómica. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
