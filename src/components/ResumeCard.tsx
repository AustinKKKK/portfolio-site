import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="flex flex-col justify-center gap-4 p-10">
      <Link href="/resume" className="border p-6 text-2xl">
        Resume
      </Link>
      <Link href="/projects" className="border p-6 text-2xl">
        Projects
      </Link>
    </div>
  );
}