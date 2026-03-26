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
      <span className="invisible text-3xl font-bold">{text}</span>

      <span className="absolute left-0 top-0 text-3xl font-bold text-white/15">
        {text}
      </span>
      <span className="absolute left-1 top-1 text-3xl font-bold text-white/30">
        {text}
      </span>
      <span className="absolute left-2 top-2 text-3xl font-bold text-white transition group-hover:text-blue-400">
        {text}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  const menus = ["Ramen", "Sushi", "Curry", "Burger", "Udon", "Tonkatsu", "Pizza", "Chicken"];

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
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="relative min-h-screen">

        <section
          className={`absolute top-1/2 left-1/2 flex flex-col items-center gap-6 transition-all duration-700 ease-in-out ${
            showMap
              ? "-translate-x-[430px] -translate-y-1/2"
              : "-translate-x-1/2 -translate-y-1/2"
          }`}
        >
          <div className="text-4xl font-bold text-white">
            {menus[index]}
          </div>

          <LayeredText
            text="What Should I Eat Today?"
            onClick={toggleRolling}
          />
        </section>

        <section
          className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out ${
            showMap
              ? "translate-x-[80px] -translate-y-1/2 opacity-100"
              : "translate-x-[220px] -translate-y-1/2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-[520px] rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="mb-3 text-lg font-semibold">
              Nearby {menus[index]} spots
            </div>

            <div className="h-[380px] overflow-hidden rounded-xl">
              <LunchMap menu={menus[index]} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}