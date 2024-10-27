import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} text-white flex flex-col min-h-screen`}>
        <header className="bg-sky-800 text-white p-4 shadow-md fixed top-0 w-full z-20">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
  
          <div className="flex items-center">
            <Link href="/">
              <img src="/ui/pictures/portfolio.png" alt="Logo" className="h-12 w-12" />
            </Link>
          </div>

          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg font-semibold text-white hover:bg-sky-700 px-3 py-2 rounded transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg font-semibold text-white hover:bg-sky-700 px-3 py-2 rounded transition duration-300">About</Link>
            </li>
            <li>
              <Link href="/projects" className="text-lg font-semibold text-white hover:bg-sky-700 px-3 py-2 rounded transition duration-300">Projects</Link>
            </li>
          </ul>
    </nav>

        </header>
        <main className="bg-sky-800 flex-grow mx-auto p-4 mt-16 w-full">
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
