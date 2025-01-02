import "./globals.css";
import NavigationBar from "@/components/core/navigation-bar";
import Footer from "@/components/core/footer";
export const metadata = {
  title: "Eric Zhang",
  description: "Eric Zhang's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavigationBar></NavigationBar>
        </header>
        {children}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
