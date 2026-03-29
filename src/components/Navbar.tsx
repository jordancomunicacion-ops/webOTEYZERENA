import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.imagotype}>O</span>
                    <span className={styles.brandName}>OTEYZERENA</span>
                </Link>
                <div className={styles.links}>
                    <Link href="#methodology" className={styles.link}>Metodología</Link>
                    <Link href="#services" className={styles.link}>Servicios</Link>
                    <Link href="#projects" className={styles.link}>Proyectos</Link>
                </div>
            </div>
        </nav>
    );
}
