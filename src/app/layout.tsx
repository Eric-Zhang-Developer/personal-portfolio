import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavigationBar from "@/components/core/navigation-bar";
import Footer from "@/components/core/footer";
import MatrixRain from "@/components/core/matrix-rain";

export const metadata = {
  title: "Eric Zhang",
  description: "Eric Zhang — Software Developer Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="crt flex min-h-screen flex-col font-mono">
        <MatrixRain />
        <div
          className="scanbeam"
          aria-hidden="true"
        />
        <header>
          <NavigationBar />
        </header>
        <main className="relative z-[2] flex-1 pt-16">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
