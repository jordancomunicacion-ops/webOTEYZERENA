import styles from './Contact.module.css';

interface ContactProps {
    inModal?: boolean;
}

export default function Contact({ inModal = false }: ContactProps) {
    return (
        <section
            id="contact"
            className={`${styles.section} ${inModal ? styles.modalSection : ''}`}
        >
            <div className="container">
                <div className={styles.wrapper}>
                    {!inModal && <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Hablemos de tu Proyecto</h2>}
                    <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: inModal ? '1.5rem' : '2rem' }}>
                        Cuéntanos qué necesitas y te prepararemos un presupuesto a medida.
                    </p>

                    <form className={styles.form}>
                        <div className={inModal ? styles.grid2Col : undefined}>
                            <div className={styles.group}>
                                <label className={styles.label}>Nombre completo</label>
                                <input type="text" className={styles.input} placeholder="Tu nombre" />
                            </div>

                            {inModal && (
                                <div className={styles.group}>
                                    <label className={styles.label}>Tipo de Servicio</label>
                                    <select className={styles.select}>
                                        <option value="">Elija una opción</option>
                                        <option value="gestion_gastronomica">Gestión Gastronómica</option>
                                        <option value="operaciones">Operaciones</option>
                                        <option value="auditoria_analisis">Auditoría y Análisis</option>
                                        <option value="formacion_equipo">Formación y Equipo</option>
                                        <option value="digitalizacion">Digitalización</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <div className={styles.gridResponsive}>
                            <div className={styles.group}>
                                <label className={styles.label}>Email</label>
                                <input type="email" className={styles.input} placeholder="tu@email.com" />
                            </div>
                            <div className={styles.group}>
                                <label className={styles.label}>Teléfono</label>
                                <input type="tel" className={styles.input} placeholder="+34 680 657 132" />
                            </div>
                        </div>

                        {!inModal && (
                            <div className={styles.group}>
                                <label className={styles.label}>Tipo de Servicio</label>
                                <select className={styles.select}>
                                    <option value="">Elija una opción</option>
                                    <option value="gestion_gastronomica">Gestión Gastronómica</option>
                                    <option value="operaciones">Operaciones</option>
                                    <option value="auditoria_analisis">Auditoría y Análisis</option>
                                    <option value="formacion_equipo">Formación y Equipo</option>
                                    <option value="digitalizacion">Digitalización</option>
                                </select>
                            </div>
                        )}

                        <div className={styles.group}>
                            <label className={styles.label}>Mensaje</label>
                            <textarea
                                className={styles.textarea}
                                rows={inModal ? 3 : 5}
                                placeholder="Cuéntanos más sobre tu negocio..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            style={inModal ? { marginTop: '0.5rem', padding: '1rem' } : undefined}
                        >
                            Solicitar Presupuesto
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
