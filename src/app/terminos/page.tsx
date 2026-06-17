import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Términos y Condiciones | OTEYZERENA (Jordazola SL)",
  description:
    "Términos y condiciones del servicio de Jordazola SL (marca OTEYZERENA / SOTO del PRIOR), incluido el uso del CRM para la gestión de redes sociales de empresas cliente.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
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
            <h1 className={styles.title}>Términos y Condiciones</h1>
            <p className={styles.updated}>Última actualización: 15 de junio de 2026</p>

            <div className={styles.entity}>
              <p><strong>Titular:</strong> Jordazola SL</p>
              <p><strong>Marcas comerciales:</strong> OTEYZERENA y SOTO del PRIOR</p>
              <p><strong>Domicilio:</strong> Calle San Nicolás 72, 31001 Pamplona, Navarra, España</p>
              <p><strong>Correo de contacto:</strong> <a href="mailto:contacto@oteyzerena.com">contacto@oteyzerena.com</a></p>
            </div>

            <p>
              Estos términos y condiciones (en adelante, los «Términos») regulan el acceso y uso
              del sitio web de OTEYZERENA y de los servicios prestados por Jordazola SL, incluida su
              aplicación <strong>Integración CRM</strong>. Al utilizar el sitio o la aplicación,
              aceptas estos Términos.
            </p>

            <h2>1. Objeto</h2>
            <p>
              Jordazola SL ofrece servicios de asesoría gastronómica y consultoría, así como la
              aplicación <strong>Integración CRM</strong>
              (<a href="https://crm.oteyzerena.com">crm.oteyzerena.com</a>), que permite a las empresas
              cliente gestionar sus propias cuentas de redes sociales (Facebook, Instagram, TikTok,
              Google y LinkedIn), publicar y programar contenido, consultar métricas y atender
              comentarios y mensajes desde un único panel.
            </p>

            <h2>2. Uso del servicio</h2>
            <ul>
              <li>El cliente es responsable de las cuentas que conecta y de contar con los permisos necesarios sobre ellas.</li>
              <li>El cliente se compromete a utilizar el servicio conforme a la ley y a las políticas de las plataformas conectadas, incluidas las de Meta.</li>
              <li>No está permitido el uso del servicio para fines ilícitos, fraudulentos o que vulneren derechos de terceros.</li>
            </ul>

            <h2>3. Cuentas y credenciales</h2>
            <p>
              El acceso al CRM requiere credenciales de usuario. El cliente es responsable de
              mantener la confidencialidad de sus credenciales y de toda actividad realizada bajo su
              cuenta.
            </p>

            <h2>4. Datos y privacidad</h2>
            <p>
              El tratamiento de datos personales se rige por nuestra{" "}
              <Link href="/privacidad">Política de Privacidad</Link>. Los datos obtenidos de las
              plataformas conectadas se tratan únicamente para prestar el servicio al cliente que
              los autoriza y no se venden ni se ceden a terceros.
            </p>

            <h2>5. Propiedad intelectual</h2>
            <p>
              Los contenidos, marcas y elementos del sitio y del servicio pertenecen a Jordazola SL
              o a sus legítimos titulares. No se autoriza su reproducción sin consentimiento previo.
            </p>

            <h2>6. Disponibilidad y responsabilidad</h2>
            <p>
              Procuramos mantener el servicio disponible y seguro, pero no garantizamos su
              funcionamiento ininterrumpido. En la medida permitida por la ley, Jordazola SL no será
              responsable de daños indirectos derivados del uso o la imposibilidad de uso del
              servicio.
            </p>

            <h2>7. Modificaciones</h2>
            <p>
              Podremos actualizar estos Términos. La versión vigente se publicará siempre en esta
              página. El uso continuado del servicio tras una modificación implica su aceptación.
            </p>

            <h2>8. Legislación y jurisdicción</h2>
            <p>
              Estos Términos se rigen por la legislación española. Para cualquier controversia, las
              partes se someten a los juzgados y tribunales que correspondan conforme a la normativa
              aplicable.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Para cualquier cuestión sobre estos Términos, escríbenos a{" "}
              <a href="mailto:contacto@oteyzerena.com">contacto@oteyzerena.com</a>.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
