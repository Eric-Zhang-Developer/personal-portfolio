import "./globals.css";
import NavigationBar from "@/components/core/navigation-bar";
import Footer from "@/components/core/footer";
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
        <main className="flex-1 bg-gradient-to-b from-slate-200 to-slate-500 pt-16 pb-4">{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
