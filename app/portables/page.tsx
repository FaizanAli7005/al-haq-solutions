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
    id: "portable-1",
    slug: "jazz-zte-mf673",
    name: "Jazz ZTE MF673 4G LTE Unlocked Portable WiFi Device (PTA Approved)",
    price: "Rs. 5,299",
    shortDescription:
      "Compact 4G LTE portable WiFi device that supports up to 10 users at once. Ideal for travel, CCTV setups and daily hotspot sharing.",
    image: "/portables/mf673-1.jpg",
  },
  {
    id: "portable-2",
    slug: "zong-e5573c",
    name: "Zong E5573C 4G LTE Unlocked Portable WiFi Device (PTA Approved)",
    price: "Rs. 5,499",
    shortDescription:
      "Powerful 4G hotspot for travel and professional use. Connect up to 10 devices with strong, stable WiFi coverage.",
    image: "/portables/e5573c-1.jpg",
  },
  {
    id: "portable-3",
    slug: "zong-e5573s-antenna",
    name: "Zong E5573s 4G LTE Unlocked Portable WiFi Device with Antenna Support (PTA Approved)",
    price: "Rs. 5,999",
    shortDescription:
      "4G hotspot with external antenna support for low‑signal areas. Perfect for remote locations, travel and CCTV monitoring.",
    image: "/portables/e5573s-1.jpg",
  },
];

export default function PortablesPage() {
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
                Unlocked Portable Devices
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
          Unlocked Portable Devices
        </h1>
        <p className="mt-1 text-xs text-[#6a776f]">
          Tap a device to view full details and order via WhatsApp.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/portables/${product.slug}`}
              className="flex flex-col rounded-2xl border border-[#e3d7bd] bg-white p-4 shadow-sm hover:shadow-md hover:border-[#c8a35f]/80 transition"
            >
              <div className="relative mb-3 h-75 w-full overflow-hidden rounded-2xl bg-[#f0e6d1]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-3"
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