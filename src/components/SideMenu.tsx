import Link from "next/link";

function LayeredText({ text }: { text: string }) {
  return (
    <div className="relative h-[70px] whitespace-nowrap">
      <span className="absolute left-0 top-0 text-3xl font-bold text-white/15">
        {text}
      </span>

      <span className="absolute left-1 top-1 text-3xl font-bold text-white/30">
        {text}
      </span>

      <span className="absolute left-2 top-2 text-3xl font-bold text-white transition group-hover:text-blue-300">
        {text}
      </span>
    </div>
  );
}

export default function SideMenu() {
  return (
    <section className="flex h-full items-center justify-start">
      <div className="flex flex-col gap-10">

        <Link href="/resume" className="group">
          <LayeredText text="Resume" />
        </Link>

        <Link href="/projects" className="group">
          <LayeredText text="Projects" />
        </Link>

      </div>
    </section>
  );
}