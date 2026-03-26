function LayeredText({ text }: { text: string }) {
  return (
    <div className="relative inline-block whitespace-nowrap">
      <span className="invisible text-3xl font-bold">{text}</span>

      <span className="absolute left-0 top-0 text-3xl font-bold text-white/15">
        {text}
      </span>

      <span className="absolute left-1 top-1 text-3xl font-bold text-white/30">
        {text}
      </span>

      <span className="absolute left-2 top-2 text-3xl font-bold text-white">
        {text}
      </span>
    </div>
  );
}

export default function ProejctsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <LayeredText text="Coming Soon..." />
    </main>
  );
}