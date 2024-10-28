import { Inter } from "next/font/google";
import "../globals.css";
import ProjectButton from "@/app/ui/components/project-buttons";

const inter = Inter({ subsets: ["latin"] });

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectsLayout( {children} : ProjectsLayoutProps) {
  return (
    <div className={`${inter.className} bg-sky-800 min-h-screen text-white`}>
      
      <h1 className="text-6xl font-extrabold text-white mt-16 mb-12 text-center drop-shadow-4xl relative">
        Projects
      </h1>
      
      {/* Project Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <ProjectButton href="/projects/nc-news">Nc News</ProjectButton>
        <ProjectButton href="/projects/gamerly">Gamerly</ProjectButton>
      </div>

      {/* Content */}
      <div >
        {children}
      </div>
    </div>
  );
}
