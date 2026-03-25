export default function ColdBrewPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-5xl font-bold tracking-tight">
          How to Make Cold Brew
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          A simple ritual I enjoy — slow, intentional, and precise.
        </p>

        <div className="mt-12 space-y-6 text-zinc-300 leading-7">
          <p>
            1. Grind coffee beans (coarse)
          </p>
          <p>
            2. Mix with cold water (1:8 ratio)
          </p>
          <p>
            3. Let it steep for 12–24 hours
          </p>
          <p>
            4. Filter and enjoy
          </p>
        </div>

      </div>
    </main>
  );
}