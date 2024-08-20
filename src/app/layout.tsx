import type { Metadata } from "next";
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
        <header className="bg-blue-600 text-white p-4">
          <nav className="max-w-4xl mx-auto">
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/blog" className="hover:underline">Projects</a></li>
              <li><a href="/blog" className="hover:underline">Contact Me</a></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
        <footer className="bg-blue-600 text-white p-4 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

