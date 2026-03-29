export default function Footer() {
    return (
        <footer style={{ background: 'var(--primary)', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ minWidth: '280px', flex: '1 1 300px' }}>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '1rem' }}>OTEYZERENA</h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '350px' }}>
                            Asesoría especializada en sector primario y alta gastronomía.
                        </p>
                    </div>
                    <div style={{ minWidth: '280px', flex: '1 1 300px' }}>
                        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Contacto</h4>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
                            <a href="mailto:contacto@oteyzerena.com" style={{ color: 'inherit' }}>contacto@oteyzerena.com</a>
                        </p>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            <a href="tel:+34680657132" style={{ color: 'inherit' }}>+34 680 657 132</a>
                        </p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
                    © {new Date().getFullYear()} Asesoría Gastronómica. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
