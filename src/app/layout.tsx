import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavigationBar from "@/components/core/navigation-bar";
import Footer from "@/components/core/footer";

import ParticlesBackground from "@/components/core/particles-background";
export const metadata = {
  title: "Eric Zhang",
  description: "Eric Zhang's Personal Portfolio",
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
      <body className="flex min-h-screen flex-col">
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <main className="relative flex-1 pb-4 pt-16">
          <div className="absolute inset-0 -z-10">
            <ParticlesBackground></ParticlesBackground>
          </div>
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
      </body>
    </html>
  );
}
