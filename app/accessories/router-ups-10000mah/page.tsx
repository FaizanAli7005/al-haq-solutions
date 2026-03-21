"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP_NUMBER = "923127795114";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function RouterUpsPage() {
  const product = {
    name: "12V 2A 10000mAh Router Power Bank (UPS Backup with DC Cable)",
    price: "Rs. 2,200",
    shortTag: "Router UPS Power Backup for Load Shedding (8–10 Hours)",
    descriptionShort:
      "Keep your internet running during power outages with this 10000mAh router power bank. Provides seamless backup without disconnecting your router.",
    keyFeatures: [
      "10000mAh capacity for roughly 8–10 hours backup.",
      "12V 2A output compatible with most routers.",
      "Built‑in DC cable for easy connection.",
      "Instant automatic switch during power outage.",
      "No interruption in internet connectivity.",
      "Compact and portable design.",
    ],
    bodyText:
      "This 12V 2A router power bank is the perfect solution for uninterrupted internet during load shedding or power failures. With a powerful 10000mAh battery, it provides up to 8–10 hours of backup, depending on your router’s usage. The device automatically switches to battery mode when electricity goes out, ensuring your router stays on without even a second of downtime. Once power is restored, it resumes charging while keeping your router connected. Its built‑in DC cable makes setup simple and hassle‑free. Compact, reliable and efficient, this power backup is ideal for homes, offices and professionals who require constant internet access.",
    gallery: [
      {
        src: "/accessories/pwb-1.jpg",
        alt: "Router UPS 10000mAh power bank",
      },
      { src: "/accessories/pwb-2.jpg", alt: "Router UPS unit close up" },
      { src: "/accessories/pwb-3.jpg", alt: "Router UPS with DC cable" },
    ] as GalleryImage[],
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? product.gallery.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      setIsDragging(false);
      return;
    }
    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX;

    if (diff > 40) {
      goPrev();
    } else if (diff < -40) {
      goNext();
    }

    setIsDragging(false);
    setTouchStartX(null);
  };

  const handleTouchMove = () => {
    if (!isDragging) return;
  };

  const supportUrl = (() => {
    const text = encodeURIComponent(
      `Assalam o Alaikum, I need support / details about:\n\nCategory: Antennas, Connectors & Accessories\nProduct: ${product.name}\nPrice: ${product.price}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  })();

  const orderUrl = (() => {
    const text = encodeURIComponent(
      `New order from website\n\nCategory: Antennas, Connectors & Accessories\nProduct: ${product.name}\nPrice: ${product.price}\n\nCustomer Name: [Your Name]\nPhone / WhatsApp: [Your Number]\n\nSpecial Instructions:\n[Write here]`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  })();

  return (
    <main className="min-h-screen bg-[#fbf6ec] text-[#0b1c12]">
      {/* Header */}
      <header className="border-b border-[#e3d7bd] bg-[#f8f3e8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/logo-al-haq.png"
                alt="Al Haq Solutions"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1d4c32]">
                Al Haq Solutions
              </p>
              <p className="text-[10px] text-[#6a776f]">
                Antennas, Connectors & Accessories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/accessories"
              className="text-[11px] text-[#8b7860] underline underline-offset-4"
            >
              Back to Accessories
            </Link>
            <Link
              href="/"
              className="hidden text-[11px] text-[#8b7860] underline underline-offset-4 md:inline"
            >
              Categories
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:flex md:gap-8">
        {/* Left: swipeable gallery */}
        <div className="md:w-1/2">
          <div
            className="relative h-96 w-full overflow-hidden rounded-3xl bg-[#f0e6d1] md:h-[28rem]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            <Image
              key={product.gallery[activeIndex].src}
              src={product.gallery[activeIndex].src}
              alt={product.gallery[activeIndex].alt}
              fill
              className="object-contain transition-transform duration-300"
            />

            {/* Desktop arrows */}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-xs text-white hover:bg:black/60 md:inline-block"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-xs text:white hover:bg-black/60 md:inline-block"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/30 px-2 py-1">
              {product.gallery.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 w-3 rounded-full transition ${
                    idx === activeIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3">
            {product.gallery.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative h-24 w-24 overflow-hidden rounded-2xl bg-[#f0e6d1] border ${
                  idx === activeIndex
                    ? "border-[#c8a35f]"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: details */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h1 className="text-lg font-semibold text-[#1b3826] md:text-xl">
            {product.name}
          </h1>

          <p className="mt-1 text-[11px] font-medium text-[#ab8642]">
            {product.shortTag}
          </p>

          <div className="mt-3 flex items-baseline gap-3">
            <p className="text-lg font-bold text-[#ab8642]">
              {product.price} PKR
            </p>
          </div>

          <p className="mt-3 text-xs text-[#5c6a62]">
            {product.descriptionShort}
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-[#c8a35f] px-4 py-2 text-center text-xs font-semibold text-white hover:bg-[#b58f4b]"
            >
              Order via WhatsApp
            </a>
            <a
              href={supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-[#c8a35f] px-4 py-2 text-center text-xs font-semibold text-[#815a21] hover:bg-[#f4ebdb]"
            >
              Support
            </a>
          </div>

          <div className="mt-6 border-t border-[#e3d7bd] pt-4">
            <h2 className="text-sm font-semibold text-[#1b3826]">
              Key Features
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-[#5c6a62]">
              {product.keyFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5 border-t border-[#e3d7bd] pt-4">
            <h2 className="text-sm font-semibold text-[#1b3826]">
              Product Details
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-[#5c6a62]">
              {product.bodyText}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}