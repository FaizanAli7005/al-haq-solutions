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
    id: "router-1",
    slug: "huawei-b310-4g-lte-router",
    name: "Huawei B310 4G LTE Unlocked WiFi Router (PTA Approved)",
    price: "Rs. 6,999",
    shortDescription:
      "Reliable 4G LTE router with strong WiFi coverage and support for up to 32 devices. Ideal for homes, offices and CCTV setups needing stable, always‑on internet.",
    image: "/routers/b310-1.jpg", // replace with real product photo later
  },
];

export default function RoutersPage() {
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
                Unlocked SIM Routers
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
          Unlocked SIM Routers
        </h1>
        <p className="mt-1 text-xs text-[#6a776f]">
          Tap the router to view full details and order via WhatsApp.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/routers/${product.slug}`}
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