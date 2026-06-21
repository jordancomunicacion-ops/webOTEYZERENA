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
              var siteId = "f428747f-3833-4579-9c58-65f1ea86b6c4";
              var endpoint = "https://crm.oteyzerena.com/api/analytics/track";

              // Helper to get/create ID (Site-specific storage keys)
              function getId(key, storage) {
                  if(!storage) return "";
                  var fullKey = key + "_" + siteId.substring(0, 8);
                  var id = storage.getItem(fullKey);
                  if(!id) {
                      id = Math.random().toString(36).substring(2) + Date.now().toString(36);
                      storage.setItem(fullKey, id);
                  }
                  return id;
              }

              function track(url) {
                if(!url) url = window.location.pathname;

                var vid = getId('ana_visitor_id', localStorage);
                var sid = getId('ana_session_id', sessionStorage);

                var data = {
                    websiteId: siteId,
                    url: url,
                    referrer: document.referrer,
                    userAgent: navigator.userAgent,
                    visitorId: vid,
                    sessionId: sid
                };
                fetch(endpoint, {
                    method: "POST",
                    mode: "cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                }).catch(function(e) { console.warn("Analytics Error:", e); });
              }
              track();

              var pushState = history.pushState;
              history.pushState = function() {
                  pushState.apply(history, arguments);
                  setTimeout(function() { track(window.location.pathname); }, 100);
              };
              window.addEventListener('popstate', function() { track(window.location.pathname); });

              // Event Tracker
              window.trackEvent = function(t, d) {
                  var vid = getId('ana_visitor_id', localStorage);
                  var sid = getId('ana_session_id', sessionStorage);

                  var data = {
                      websiteId: siteId,
                      url: window.location.pathname,
                      type: 'EVENT',
                      eventType: t,
                      eventData: d || {},
                      userAgent: navigator.userAgent,
                      visitorId: vid,
                      sessionId: sid
                  };
                  if (navigator.sendBeacon) {
                      navigator.sendBeacon(endpoint, new Blob([JSON.stringify(data)], {type:'application/json'}));
                  } else {
                      fetch(endpoint, { method: "POST", mode: "cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).catch(console.error);
                  }
              };

              document.addEventListener('click', function(e) {
                  var t = e.target.closest('a, button');
                  if (t) {
                      var text = (t.innerText || t.textContent || '').trim().substring(0,50);
                      if(!text && !t.id && !t.className) return;
                      window.trackEvent('CLICK', { element: t.tagName, text: text, id: t.id, class: t.className, href: t.href });
                  }
              }, true);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
