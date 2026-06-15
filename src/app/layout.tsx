import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://oteyzerena.com"),
  title: "Asesoría Gastronómica | OTEYZERENA — Consultoría de hostelería y sector primario",
  description: "OTEYZERENA: asesoría gastronómica y consultoría para hostelería y sector primario. Optimizamos servicios, cartas y gestión de restaurantes con resultados medibles.",
  keywords: ["asesoría gastronómica", "asesoramiento gastronómico", "consultoría gastronómica", "consultoría de hostelería", "asesoría para restaurantes", "asesoría de sector primario", "OTEYZERENA"],
  authors: [{ name: "OTEYZERENA" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OTEYZERENA | Asesoría Gastronómica",
    description: "Asesoría gastronómica y consultoría para hostelería y sector primario.",
    url: "https://oteyzerena.com",
    siteName: "OTEYZERENA",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://oteyzerena.com/#business",
              name: "OTEYZERENA",
              description:
                "Asesoría gastronómica y consultoría para hostelería y sector primario.",
              url: "https://oteyzerena.com",
              areaServed: { "@type": "Country", name: "España" },
              knowsAbout: [
                "asesoría gastronómica",
                "consultoría de hostelería",
                "gestión de restaurantes",
                "sector primario",
              ],
            }),
          }}
        />
        {children}
        <Script id="custom-tracking" strategy="afterInteractive">
          {`
            (function() {
              var siteId = "e4df4f42-2617-41e9-ad38-8a61fd9388e0";
              var endpoint = "https://crm.oteyzerena.com/api/analytics/track";

              function track(url) {
                if(!url) url = window.location.pathname;
                var data = {
                    websiteId: siteId,
                    url: url,
                    referrer: document.referrer,
                    userAgent: navigator.userAgent
                };
                fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                }).catch(console.error);
              }

              track();

              var pushState = history.pushState;
              history.pushState = function() {
                pushState.apply(history, arguments);
                track(window.location.pathname);
              };

              window.addEventListener('popstate', function() {
                  track(window.location.pathname);
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
