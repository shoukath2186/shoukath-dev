import type { Metadata } from "next";
import SitemapClient from "@/app/sitemap/SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap | Shoukath Otm - MERN Stack Developer",
  description: "Sitemap for Shoukath Otm's portfolio website. Find all pages, sections, detailed services, and professional connections in one place.",
  keywords: [
    "Shoukath Otm sitemap",
    "MERN Stack Developer portfolio sitemap",
    "web development services list",
    "portfolio website pages",
    "full stack developer projects map"
  ],
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapPage() {
  return <SitemapClient />;
}
