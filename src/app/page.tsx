import Intro from "../components/Intro";
import SideMenu from "../components/SideMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-8 py-12 md:px-12">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">

          <Intro />
          <div className="border-l border-zinc-700 pl-4">
            <SideMenu />
          </div>

        </div>
      </div>
    </main>
  );
}