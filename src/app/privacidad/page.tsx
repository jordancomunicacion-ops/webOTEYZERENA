import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidad | OTEYZERENA (Jordazola SL)",
  description:
    "Política de privacidad de Jordazola SL (marca OTEYZERENA / SOTO del PRIOR): qué datos tratamos, con qué fin y tus derechos, incluido el tratamiento de datos de las plataformas de Meta a través de nuestro CRM.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <Link href="/" className={styles.brand}>
              OTEYZERENA
            </Link>
            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <article className={styles.content}>
            <h1 className={styles.title}>Política de Privacidad</h1>
            <p className={styles.updated}>Última actualización: 15 de junio de 2026</p>

            <div className={styles.entity}>
              <p><strong>Responsable del tratamiento:</strong> Jordazola SL</p>
              <p><strong>Marcas comerciales:</strong> OTEYZERENA y SOTO del PRIOR</p>
              <p><strong>Domicilio:</strong> Calle San Nicolás 72, 31001 Pamplona, Navarra, España</p>
              <p><strong>Correo de contacto:</strong> <a href="mailto:gerencia@sotodelprior.com">gerencia@sotodelprior.com</a></p>
            </div>

            <p>
              En Jordazola SL (en adelante, «nosotros») respetamos tu privacidad y nos
              comprometemos a proteger los datos personales que tratamos. Esta política explica
              qué datos recogemos, con qué finalidad, en qué base jurídica nos apoyamos y qué
              derechos puedes ejercer, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la
              Ley Orgánica 3/2018 (LOPDGDD).
            </p>

            <h2>1. Quiénes somos y qué ofrecemos</h2>
            <p>
              Jordazola SL opera la marca OTEYZERENA (asesoría gastronómica y consultoría para
              hostelería y sector primario) y ofrece, además, un CRM en la nube
              (<a href="https://crm.oteyzerena.com">crm.oteyzerena.com</a>) que permite a cada empresa
              cliente gestionar sus propias páginas y cuentas de redes sociales desde un único
              panel. Actuamos como proveedor de tecnología para nuestros clientes.
            </p>

            <h2>2. Datos que tratamos</h2>
            <ul>
              <li>
                <strong>Datos de contacto y de cuenta:</strong> nombre, correo electrónico,
                teléfono y datos de la empresa, facilitados al contactar con nosotros o al
                contratar el servicio.
              </li>
              <li>
                <strong>Datos de navegación:</strong> información técnica básica (páginas
                visitadas, referrer, tipo de dispositivo y navegador) con fines de medición y
                mejora del sitio.
              </li>
              <li>
                <strong>Datos de plataformas de terceros (incluidas las plataformas de Meta):</strong>{" "}
                cuando un cliente conecta y autoriza expresamente sus cuentas de Facebook e
                Instagram a nuestro CRM, accedemos a la información estrictamente necesaria para
                prestar el servicio: lista de páginas que administra, métricas de interacción de
                sus publicaciones, contenido de la página, comentarios y mensajes. Solo tratamos
                estos datos por cuenta y en nombre del cliente que los autoriza.
              </li>
            </ul>

            <h2>3. Finalidades y base jurídica</h2>
            <ul>
              <li>Atender tus solicitudes de información y gestionar la relación contractual (ejecución de contrato).</li>
              <li>Prestar las funciones del CRM sobre las cuentas que el cliente conecta —ver páginas, consultar métricas, crear y programar publicaciones, y responder comentarios y mensajes— (ejecución de contrato).</li>
              <li>Medir y mejorar nuestro sitio web y servicios (interés legítimo).</li>
              <li>Cumplir obligaciones legales aplicables (obligación legal).</li>
            </ul>

            <h2>4. Uso de los datos de las plataformas de Meta</h2>
            <p>
              Los datos obtenidos a través de las API de Meta se utilizan únicamente para
              proporcionar al cliente las funciones descritas dentro de su propio CRM.{" "}
              <strong>No vendemos ni compartimos estos datos con terceros</strong> y no los usamos
              para fines de publicidad ajenos al cliente. El uso de la información de Facebook e
              Instagram se rige además por las{" "}
              <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">
                Condiciones de la Plataforma de Meta
              </a>.
            </p>

            <h2>5. Conservación</h2>
            <p>
              Conservamos los datos durante el tiempo necesario para prestar el servicio y, una vez
              finalizada la relación, durante los plazos exigidos por la legislación aplicable.
              Cuando un cliente desconecta una cuenta o solicita la eliminación, suprimimos los
              datos asociados conforme a nuestro procedimiento de eliminación de datos.
            </p>

            <h2>6. Destinatarios</h2>
            <p>
              No cedemos tus datos a terceros salvo obligación legal. Podemos apoyarnos en
              proveedores tecnológicos (alojamiento, infraestructura) que actúan como encargados
              del tratamiento bajo contrato y con las debidas garantías.
            </p>

            <h2>7. Tus derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
              limitación y portabilidad escribiéndonos a{" "}
              <a href="mailto:gerencia@sotodelprior.com">gerencia@sotodelprior.com</a>. También
              tienes derecho a reclamar ante la Agencia Española de Protección de Datos
              (www.aepd.es).
            </p>

            <h2>8. Eliminación de datos</h2>
            <p>
              Para solicitar la eliminación de los datos vinculados a las cuentas conectadas en
              nuestro CRM, escríbenos a{" "}
              <a href="mailto:gerencia@sotodelprior.com">gerencia@sotodelprior.com</a> o utiliza el
              endpoint de eliminación de datos habilitado en{" "}
              <a href="https://crm.oteyzerena.com/api/data-deletion">crm.oteyzerena.com/api/data-deletion</a>.
            </p>

            <h2>9. Cambios en esta política</h2>
            <p>
              Podremos actualizar esta política para reflejar cambios legales o en el servicio.
              Publicaremos siempre la versión vigente en esta página.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
