import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ProjectButton from "@/app/ui/components/project-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects - My Portfolio",
  description: "Explore various projects on my portfolio",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-gray-100`}>
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 text-transparent bg-clip-text mt-8 mb-6 text-center">Projects</h1>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <ProjectButton href="/projects/nc-news">Nc News</ProjectButton>
          <ProjectButton href="/projects/gamerly">Gamerly</ProjectButton>
        </div>
        {children}
      </div>
    </div>
  );
}