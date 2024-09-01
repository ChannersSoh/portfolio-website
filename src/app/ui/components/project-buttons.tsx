import Link from "next/link";
import { FaArrowDown } from "react-icons/fa"; 

type ProjectButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function ProjectButton({ href, children }: ProjectButtonProps) {
  return (
    <Link href={href} className="relative inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-sky-600 hover:to-blue-700 transition-transform transform hover:scale-105 hover:shadow-lg">
      <span className="mr-2">{children}</span>
      <FaArrowDown className="ml-2" />
    </Link>
  );
}