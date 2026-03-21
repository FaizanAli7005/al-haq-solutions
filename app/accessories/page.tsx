import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: "acc-1",
    slug: "omni-antenna-sma-60ft",
    name: "Outdoor 4G/5G Omnidirectional Antenna with SMA Connector (60ft Cable)",
    price: "Rs. 3,000",
    shortDescription:
      "Outdoor 4G/5G omnidirectional antenna with SMA connector and 60ft cable. Boosts signal strength and stability for SIM routers in weak coverage areas.",
    image: "/accessories/sma-1.jpg",
  },
  {
    id: "acc-2",
    slug: "omni-antenna-ts9-60ft",
    name: "Outdoor 4G/5G Omnidirectional Antenna with TS‑9 Connector (60ft Cable)",
    price: "Rs. 3,000",
    shortDescription:
      "4G/5G omnidirectional antenna with TS‑9 connector and 60ft cable. Ideal for portable devices and supported routers in low‑signal zones.",
    image: "/accessories/ts9-1.jpg",
  },
  {
    id: "acc-3",
    slug: "router-ups-10000mah",
    name: "12V 2A 10000mAh Router Power Bank (UPS Backup with DC Cable)",
    price: "Rs. 2,200",
    shortDescription:
      "Router UPS power backup providing 8–10 hours of runtime during load shedding. Keeps your router online with zero interruption.",
    image: "/accessories/pwb-1.jpg",
  },
];

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#fbf6ec] text-[#0b1c12]">
      <header className="border-b border-[#e3d7bd] bg-[#f8f3e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
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

          <Link
            href="/"
            className="text-[11px] text-[#8b7860] underline underline-offset-4"
          >
            Back to Categories
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-lg font-semibold text-[#1b3826]">
          Antennas, Connectors & Accessories
        </h1>
        <p className="mt-1 text-xs text-[#6a776f]">
          Tap an item to view full details and order via WhatsApp.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/accessories/${product.slug}`}
              className="flex flex-col rounded-2xl border border-[#e3d7bd] bg-white p-4 shadow-sm hover:shadow-md hover:border-[#c8a35f]/80 transition"
            >
              <div className="relative mb-3 h-44 w-full overflow-hidden rounded-2xl bg-[#f0e6d1]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-[#1b3826]">
                {product.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-[#ab8642]">
                {product.price}
              </p>
              <p className="mt-2 line-clamp-3 text-xs text-[#5c6a62]">
                {product.shortDescription}
              </p>
              <span className="mt-3 text-[11px] font-semibold text-[#815a21]">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}