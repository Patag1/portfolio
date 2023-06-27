import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { poppins } from "./components/ui/fonts/Fonts";
import "./globals.css";

export const metadata = {
  title: "Augusto S",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} overflow-hidden relative h-screen grid grid-cols-1 grid-rows-[auto_1.5rem]`}
      >
        <main className="grid grid-cols-[116px_1fr] grid-rows-1 bg-neutral-900">
          <div>
            <Navbar />
          </div>
          <section className="w-full px-8 py-5 animate-fade-up animate-once animate-duration-1000 animate-delay-500">
            {children}
          </section>
        </main>

        <Footer />
      </body>
    </html>
  );
}
