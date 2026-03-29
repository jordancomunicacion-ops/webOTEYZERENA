import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "OTEYZERENA | Asesoría Gastronómica de Sector Primario",
  description: "Especialistas en gestión de servicios y asesoramiento gastronómico de alto valor.",
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
        {children}
        <Script id="custom-tracking" strategy="afterInteractive">
          {`
            (function() {
              var siteId = "e4df4f42-2617-41e9-ad38-8a61fd9388e0";
              var endpoint = "https://crm.sotodelprior.com/api/analytics/track"; 

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
