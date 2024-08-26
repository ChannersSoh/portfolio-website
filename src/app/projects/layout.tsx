import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ProjectButton from "@/app/ui/components/project-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects - My Blog",
  description: "Explore various projects on my portfolio",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-gray-100`}>
      <h1>Projects</h1>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex space-x-4 mb-4">
          <ProjectButton href="/projects/nc-news">Nc News</ProjectButton>
          <ProjectButton href="/projects/gamerly">Gamerly</ProjectButton>
        </div>
        {children}
      </div>
    </div>
  );
}