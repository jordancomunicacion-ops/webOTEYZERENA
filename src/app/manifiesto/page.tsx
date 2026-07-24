import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactModalButton from "@/components/ContactModalButton";
import styles from "../manifiesto.module.css";

export const metadata: Metadata = {
  title: "Manifiesto | OTEYZERENA",
  description:
    "Por qué construimos así: oficio y tecnología, en ese orden. El manifiesto de OTEYZERENA sobre modernizar la hostelería sin deshumanizarla.",
  alternates: { canonical: "/manifiesto" },
};

export default function ManifiestoPage() {
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
            <p className={styles.kicker}>Manifiesto</p>
            <h1 className={styles.title}>Por qué construimos así</h1>

            <p className={styles.lead}>
              No empezamos por la tecnología. Empezamos por Carlos llevando SOTO del PRIOR, su
              hamburguesería en Navarra, desde 2019 —reconocida como la mejor hamburguesa de la
              región cinco años seguidos, entre las 15 mejores de España—. Después abrió MONTAGU,
              su segundo local. Y después pasó algo que no estaba en el plan: otros dueños de
              restaurante empezaron a pedirle consejo, y él empezó a dárselo —primero sin nombre,
              después con uno.
            </p>

            <p>
              La otra mitad de OTEYZERENA no viene del oficio, sino de años construyendo la
              tecnología que hay detrás del marketing de bancos y multinacionales: journeys de
              cliente, campañas, la fontanería técnica que decide a quién le llega qué mensaje y
              cuándo. Somos amigos, y de ahí nació todo: de las ganas de arrimar el hombro donde
              el otro flojea, poniendo cada uno sus virtudes justo donde el otro tenía carencias —lo
              que a uno le falta, el otro lo pone—. Al ver lo que Carlos sabía de un negocio
              real y compararlo con las herramientas que tenía para llevarlo, quedó clara una cosa
              simple: ese criterio de oficio, sin una herramienta a la altura, se pierde por el
              camino —y una herramienta hecha por quien no conoce el oficio casi siempre sale mal—.
              Por eso lo construimos juntos: el oficio pone el criterio, la tecnología lo sostiene.
            </p>

            <p>
              Esa pregunta —qué es lo que nunca debería dejar de hacer una persona, pase lo que pase
              con la tecnología— llevaba tiempo con nosotros. Y no somos los únicos que se la hacen.
              Hay quien, ante cada revolución técnica, insiste en que lo primero es ocuparse de la
              vida concreta de la gente: custodiar esa magnífica humanidad que ninguna máquina puede
              sustituir. Que la inteligencia artificial es, en el fondo, el asunto de siempre —cuidar
              a las personas cuando cambia el mundo— y que la técnica siempre puede tomar dos
              caminos: el del poder que se acumula y reduce a las personas a datos, o el que cuida lo
              diverso y lo concreto de cada lugar en vez de aplanarlo.
            </p>

            <p>
              Nosotros nos quedamos con el segundo camino. No es una posición confesional ni una
              bandera de OTEYZERENA: es, simplemente, que alguien puso palabras a algo que ya
              creíamos —Carlos por haber vivido el oficio; quien construye la tecnología, por haberlo
              visto de cerca en un amigo—. Que la tecnología, en algo tan humano como dar de comer a
              alguien, solo tiene sentido si hace más sitio para las personas, no menos.
            </p>

            <blockquote className={styles.thesis}>
              Modernizarse sin deshumanizarse.
            </blockquote>

            <p>
              No es un eslogan bonito sin nada detrás. Es nuestro bot de reservas por voz, que ya
              está en producción atendiendo llamadas reales: contesta el teléfono a las tres de la
              madrugada, cuando no hay nadie en sala para hacerlo, y gestiona la reserva sin que
              nadie tenga que despertarse. No sustituye a quien recibe al cliente al día siguiente:
              lo libera.
            </p>

            <p>
              Es el motor de Reservas, que ordena la sala en silencio —turnos, mesas, la lista de
              espera— para que nadie tenga que discutir con un cuaderno ni cortar una conversación en
              mitad del servicio por descolgar el teléfono. Es el CRM, que aprende los patrones de tu
              casa —quién vuelve, cuándo se llena, qué trae un sábado con partido— para que, cuando
              alguien cruce la puerta por tercera vez, alguien de tu equipo ya lo sepa sin tener que
              preguntarlo. Es el Obrador, que lleva la cuenta de cada lote, cada alérgeno, cada
              temperatura, para que quien cocina tenga las manos en el plato y no en la carpeta de la
              inspección. Y es la Contabilidad, que cuadra la caja y factura como toca, para que el
              dueño del negocio pueda estar presente en su propia sala un martes cualquiera, en vez
              de peleándose con una hoja de cálculo en la trastienda.
            </p>

            <p>
              En los cinco casos el reparto es el mismo: la máquina se queda con lo repetitivo; la
              persona, con lo que solo una persona sabe hacer —mirar a los ojos, leer una mesa,
              decidir.
            </p>

            <p>
              Y es también una promesa que cuesta más cumplir que escribir: contarte siempre qué hace
              hoy cada herramienta y qué todavía no hace, sin llamar «inteligencia artificial» a algo
              que en realidad no lo es. Ahora mismo se promete de todo con la tecnología. Nosotros
              preferimos ser de los que dicen la verdad, aunque sea menos espectacular. Para nosotros
              eso no es una letra pequeña: es, sencillamente, quiénes somos.
            </p>

            <p>
              Y por último, una cuestión de a quién le pertenecen las cosas: los datos de tu negocio
              son tuyos. Te los puedes llevar cuando quieras. No se quedan atrapados en nuestro
              sistema, ni nadie se lleva una comisión por el camino.
            </p>

            <p>
              Todo esto lo estamos construyendo pieza a pieza, empezando siempre por lo que más pesa
              en el día a día: el teléfono que no se coge, la sala que se desborda un sábado, el papel
              que se pierde entre la cocina y la caja. Cada herramienta nueva nace de un problema real
              que hemos visto de cerca, no de una lista de funciones bonitas sobre el papel. Y a
              medida que avanzamos, te contamos en qué punto está cada cosa —lo que ya funciona hoy y
              lo que todavía estamos afinando— porque preferimos ganarnos tu confianza despacio que
              prometerte de golpe algo que no es verdad. Si esto te suena más a algo que ya sabías por
              oficio que a un discurso de ventas, es porque nació así.
            </p>

            <p>
              Si quieres conocernos mejor —quiénes somos, qué hemos construido y hacia dónde vamos—
              te dejamos la puerta abierta para seguir leyendo. Y si prefieres una conversación antes
              que una web, también.
            </p>

            <p className={styles.signature}>
              OTEYZERENA
              <span className={styles.signatureTagline}>Oficio y tecnología, en ese orden.</span>
            </p>

            <div className={styles.ctaWrap}>
              <ContactModalButton className={styles.cta}>
                Hablemos
              </ContactModalButton>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
