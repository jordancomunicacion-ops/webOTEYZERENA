export default function Footer() {
    return (
        <footer style={{ background: '#1a1a1a', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '1rem' }}>OTEYZERENA</h3>
                        <p style={{ color: '#888', maxWidth: '300px' }}>
                            Asesoría especializada en sector primario y alta gastronomía.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Contacto</h4>
                        <p style={{ color: '#888', marginBottom: '0.5rem' }}>contacto@oteyzerena.com</p>
                        <p style={{ color: '#888' }}>+34 680 657 132</p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #333', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', color: '#555', fontSize: '0.8rem' }}>
                    © {new Date().getFullYear()} Asesoría Gastronómica. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
