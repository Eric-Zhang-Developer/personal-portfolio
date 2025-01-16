import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import NavigationBar from "@/components/core/navigation-bar";
import Footer from "@/components/core/footer";

import ParticlesBackground from "@/components/core/particles-background";
export const metadata = {
  title: "Eric Zhang",
  description: "Eric Zhang's Personal Portfolio",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <main className="flex-1 pt-16 pb-4 relative">
          <div className=" absolute inset-0 -z-10">
            <ParticlesBackground></ParticlesBackground>
          </div>
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
