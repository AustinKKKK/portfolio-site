"use client";

import { useEffect, useState } from "react";

const words = [
  "Software Engineer",
  "Backend Builder",
  "Always Learning",
  "Curious Mind",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let speed = isDeleting ? 80 : 140;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1800;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      speed = 500;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setText(currentWord.substring(0, charIndex));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center overflow-visible">
      <div className="absolute inset-0 star-bg opacity-50" />

      <div className="relative z-10">
        <div className="relative mb-8 h-[220px] md:h-[260px]">
          <h1 className="absolute left-0 top-0 text-7xl font-extrabold leading-[0.9] tracking-tight text-white/18 md:text-9xl">
            Kyeongmo
            <br />
            Kang
          </h1>

          <h1 className="absolute left-2 top-2 text-7xl font-extrabold leading-[0.9] tracking-tight text-white/30 md:left-4 md:top-4 md:text-9xl">
            Kyeongmo
            <br />
            Kang
          </h1>

          <h1 className="absolute left-4 top-4 text-7xl font-extrabold leading-[0.9] tracking-tight text-blue-400 md:left-8 md:top-8 md:text-9xl">
            Kyeongmo
            <br />
            Kang
          </h1>
        </div>

        <p className="mt-2 text-2xl text-zinc-200">
          {text}
          <span className="ml-1 animate-pulse">|</span>
        </p>

        <div className="mt-5 space-y-5 text-zinc-500">

          <p className="max-w-[540px] text-lg text-zinc-500">
            JAPAN 🇯🇵
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2026.03 <br />
            Rakuten | Software Application Engineer
          </p>
          <br />
          <p className="max-w-[540px] text-lg text-zinc-500">
            USA 🇺🇸
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2025.06 ~ 2026.01 <br />
            Genus Technologies | Associate Support Engineer
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2024.05 ~ 2024.12 <br />
            Genus Technologies | Software Engineering Intern
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2023.08 ~ 2025.05 <br />
            University of Minnesota - Twin Cities | Computer Science
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2022.09 ~ 2022.12 <br />
            Trippian | Back-end Development Intern 
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2022.08 ~ 2022.12 <br />
            Iowa State University | Teaching Assistant
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2021.08 ~ 2021.12 <br />
            Iowa State University | Teaching Assistant
          </p>

          <p className="max-w-[540px] text-lg text-zinc-500">
            2021.01 ~ 2022.12 <br />
            Iowa State University | Computer Science
          </p>
        </div>
      </div>
    </section>
  );
}