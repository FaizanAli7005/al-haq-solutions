"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CategoryKey = "routers" | "portables" | "accessories";

const CATEGORY_CONFIG: Record<CategoryKey, { label: string; href: string }> = {
  routers: { label: "Unlocked SIM Routers", href: "/routers" },
  portables: { label: "Unlocked Portable Devices", href: "/portables" },
  accessories: {
    label: "Antennas, Connectors & Accessories",
    href: "/accessories",
  },
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo for ~0.8s, then fade out over 0.6s
    const holdTimer = setTimeout(() => {
      setFadeOut(true);
      const hideTimer = setTimeout(() => {
        setShowIntro(false);
      }, 600); // match CSS transition
      return () => clearTimeout(hideTimer);
    }, 800);

    return () => clearTimeout(holdTimer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f3e8] text-[#0b1c12]">
      {/* Fullscreen logo intro */}
      {showIntro && (
        <div
          className={`fixed inset-0 z-30 flex items-center justify-center bg-[#f8f3e8] transition-opacity duration-600 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <Image
                src="/logo-al-haq.png"
                alt="Al Haq Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Categories screen */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
        {/* Logo (smaller at top) */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-28 w-28">
            <Image
              src="/logo-al-haq.png"
              alt="Al Haq Solutions"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold tracking-[0.15em] text-[#1d4c32] uppercase text-center">
            Al Haq Solutions
          </h1>
          <p className="mt-1 text-xs text-[#4d5c52] text-center">
            Unlocked Internet Devices • Portable Wi‑Fi • Antennas & Accessories
          </p>
        </div>

        {/* Category tiles */}
 <div className="mt-10 grid w-full max-w-5xl gap-4 md:grid-cols-3">
  {(["routers", "portables", "accessories"] as CategoryKey[]).map((key) => {
    const coverSrc =
      key === "routers"
        ? "/routers/router-cat.jpg"
        : key === "portables"
        ? "/portables/port-cat.jpg"
        : "/accessories/acc-cat.jpg";

    return (
      <Link
        key={key}
        href={CATEGORY_CONFIG[key].href}
        className="flex flex-col rounded-2xl border border-[#e0d4b8] bg-[#fbf6ec] px-4 py-5 text-left shadow-sm transition hover:border-[#c8a35f]/70 hover:shadow-md"
      >
        <div className="mb-3 h-50 w-full overflow-hidden rounded-2xl bg-[#e8ddc7]/70">
          <Image
            src={coverSrc}
            alt={CATEGORY_CONFIG[key].label}
            width={800}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm font-semibold text-[#1b3826]">
          {CATEGORY_CONFIG[key].label}
        </p>
        <p className="mt-1 text-[11px] text-[#6a776f]">
          Tap to view products and order via WhatsApp.
        </p>
      </Link>
    );
  })}
</div>

        <p className="mt-4 text-[11px] text-[#7a887f] text-center">
          Swipe back / press browser back to return to this categories screen.
        </p>
      </section>
    </main>
  );
}