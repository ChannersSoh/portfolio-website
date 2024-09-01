import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "Welcome to my personal blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 flex flex-col min-h-screen`}>
        <header className="bg-sky-800 text-white p-4 shadow-md fixed top-0 w-full z-10">
          <nav className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <Link href="/">
                <img src="/ui/pictures/portfolio.png" alt="Logo" className="h-12 w-12" /> 
              </Link>
              <ul className="flex space-x-4 md:space-x-6">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="flex-grow mx-auto p-4 mt-16">
          {children}
        </main>
        <footer className="bg-sky-800 text-white p-4">
          <div className="max-w-4xl mx-auto text-center">
            &copy; {new Date().getFullYear()} Charnjeet's Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}