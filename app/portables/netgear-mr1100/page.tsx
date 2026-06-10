"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP_NUMBER = "923127795114";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function NetgearMR1100Page() {
  const product = {
    name: "Netgear Nighthawk M1 MR1100 4G LTE Unlocked Portable WiFi Router",
    price: "Rs. 15,000",
    taxNote: "Device tax is paid by the customer: Rs. 2,100",
    shortTag: "LTE Cat 16 Mobile Router with Ethernet, LCD Display and Dual-Band WiFi",
    descriptionShort:
      "The Netgear Nighthawk M1 MR1100 is a powerful portable LTE Cat 16 mobile router with dual-band WiFi, Ethernet support and a removable battery for demanding hotspot use.",
    keyFeatures: [
      "LTE Cat 16 mobile router with up to 1 Gbps theoretical download speed.",
      "Connect up to 20 WiFi devices simultaneously.",
      "Dual-band 2.4 GHz and 5 GHz WiFi support.",
      "Built-in 1G Ethernet port for wired device connectivity.",
      "5040 mAh removable battery for portable use.",
      "LCD display for network, battery and usage information.",
      "Device tax is paid by the customer: Rs. 2,100.",
    ],
    bodyText:
      "The Netgear Nighthawk M1 MR1100 is a premium portable 4G LTE router made for users who need strong mobile internet with flexible connectivity options. Its LTE Cat 16 capability supports up to 1 Gbps theoretical download speed where network conditions allow, and it can share WiFi with up to 20 devices at the same time. Dual-band 2.4 GHz and 5 GHz WiFi helps keep connected phones, laptops, cameras and tablets running smoothly. The built-in 1G Ethernet port is useful for wired devices, routers, cameras or backup internet setups, while the LCD display makes it easy to check network status, data usage and battery information. The 5040 mAh removable battery gives it strong portable runtime. Device tax is paid by the customer: Rs. 2,100.",
    video: {
      src: "/portables/netgear_vid.mp4",
      label: "Netgear MR1100 product video",
    },
    gallery: [
      {
        src: "/portables/netgear_1.jpg",
        alt: "Netgear Nighthawk M1 MR1100 front display",
      },
      {
        src: "/portables/netgear_2.jpg",
        alt: "Netgear Nighthawk M1 MR1100 ports",
      },
      {
        src: "/portables/netgear_3.jpg",
        alt: "Netgear Nighthawk M1 MR1100 back cover",
      },
      {
        src: "/portables/netgear_4.jpg",
        alt: "Netgear Nighthawk M1 MR1100 battery label",
      },
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
      `Assalam o Alaikum, I need support / details about:\n\nCategory: Unlocked Portable Devices\nProduct: ${product.name}\nPrice: ${product.price}\n${product.taxNote}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  })();

  const orderUrl = (() => {
    const text = encodeURIComponent(
      `New order from website\n\nCategory: Unlocked Portable Devices\nProduct: ${product.name}\nPrice: ${product.price}\n${product.taxNote}\n\nCustomer Name: [Your Name]\nPhone / WhatsApp: [Your Number]\n\nSpecial Instructions:\n[Write here]`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  })();

  return (
    <main className="min-h-screen bg-[#fbf6ec] text-[#0b1c12]">
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
                Unlocked Portable Devices
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/portables"
              className="text-[11px] text-[#8b7860] underline underline-offset-4"
            >
              Back to Devices
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

      <section className="mx-auto max-w-6xl px-4 py-8 md:flex md:gap-8">
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

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-xs text-white hover:bg-black/60 md:inline-block"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-xs text-white hover:bg-black/60 md:inline-block"
            >
              {">"}
            </button>

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

          <div className="mt-4 flex flex-wrap gap-3">
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

          <div className="mt-5 overflow-hidden rounded-3xl border border-[#e3d7bd] bg-[#0b1c12]">
            <video
              className="h-auto max-h-[34rem] w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              poster={product.gallery[0].src}
              aria-label={product.video.label}
            >
              <source src={product.video.src} type="video/mp4" />
            </video>
          </div>
        </div>

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

          <p className="mt-2 text-xs font-semibold text-[#815a21]">
            {product.taxNote}
          </p>

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
