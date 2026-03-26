"use client";

import { useEffect, useRef, useState } from "react";
import LunchMap from "../../components/LunchMap";

function LayeredText({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative inline-block cursor-pointer whitespace-nowrap group"
    >
      <span className="invisible text-2xl font-bold sm:text-3xl">{text}</span>

      <span className="absolute left-0 top-0 text-2xl font-bold text-white/15 sm:text-3xl">
        {text}
      </span>
      <span className="absolute left-1 top-1 text-2xl font-bold text-white/30 sm:text-3xl">
        {text}
      </span>
      <span className="absolute left-2 top-2 text-2xl font-bold text-white transition group-hover:text-blue-400 sm:text-3xl">
        {text}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  const menus = [
    "Ramen",
    "Sushi",
    "Curry",
    "Burger",
    "Udon",
    "Tonkatsu",
    "Pizza",
    "Chicken",
  ];

  const [index, setIndex] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRolling = () => {
    if (intervalRef.current) return;

    setShowMap(false);
    setRolling(true);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % menus.length);
    }, 100);
  };

  const stopRolling = () => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRolling(false);

    setTimeout(() => {
      setShowMap(true);
    }, 150);
  };

  const toggleRolling = () => {
    if (intervalRef.current) {
      stopRolling();
    } else {
      startRolling();
    }
  };

  useEffect(() => {
    startRolling();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-10 lg:flex-row lg:justify-center lg:gap-16 lg:px-8">
        <section
          className={`flex flex-col items-center gap-6 transition-all duration-700 ease-in-out ${
            showMap ? "lg:-translate-x-6" : "translate-x-0"
          }`}
        >
          <div className="text-3xl font-bold text-white sm:text-4xl">
            {menus[index]}
          </div>

          <LayeredText
            text="What Should I Eat Today?"
            onClick={toggleRolling}
          />
        </section>

        <section
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showMap
              ? "max-h-[520px] w-full max-w-[520px] opacity-100 lg:ml-8"
              : "max-h-0 w-0 max-w-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="mb-3 text-base font-semibold sm:text-lg">
              Nearby {menus[index]} spots
            </div>

            <div className="h-[300px] overflow-hidden rounded-xl sm:h-[380px]">
              <LunchMap menu={menus[index]} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}