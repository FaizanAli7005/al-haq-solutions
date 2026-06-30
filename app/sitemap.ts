import type { MetadataRoute } from "next";

const baseUrl = "https://alhaqsolutions.vercel.app";

const routes = [
  "",
  "/routers",
  "/routers/huawei-b310-4g-lte-router",
  "/portables",
  "/portables/jazz-zte-mf673",
  "/portables/netgear-mr1100",
  "/portables/verizon-8800l",
  "/portables/zong-e5573c",
  "/portables/zong-e5573s-antenna",
  "/accessories",
  "/accessories/omni-antenna-sma-60ft",
  "/accessories/omni-antenna-ts9-60ft",
  "/accessories/router-ups-10000mah",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
  }));
}
