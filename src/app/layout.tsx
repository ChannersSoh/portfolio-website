import type { Metadata } from "next";
import Link from "next/link"
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
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-cyan-400 text-white p-4">
          <nav className="max-w-4xl mx-auto">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            </ul>
          </nav>
        </header>
        <main className=" mx-auto p-4">
          {children}
        </main>
        <footer className="bg-cyan-400 text-white p-4 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            &copy; {new Date().getFullYear()} Charnjeet's Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

