import styles from './Services.module.css';

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

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className="text-center mb-4">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Servicios Integrales</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Soluciones completas para transformar tu negocio desde la raíz hasta la mesa.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.cardTitle}>{service.category}</h3>
                            <ul className={styles.cardList}>
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
