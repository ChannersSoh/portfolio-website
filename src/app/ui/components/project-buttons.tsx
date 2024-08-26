import Link from "next/link";

type ProjectButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function ProjectButton({ href, children }: ProjectButtonProps) {
  return (
    <Link href={href} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      {children}
    </Link>
  );
}