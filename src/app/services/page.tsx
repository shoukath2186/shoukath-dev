import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Web Development, SEO & Digital Marketing Services | Shoukath Otm",
  description: "Professional web development, corporate websites, portfolio sites, eCommerce solutions, SEO, digital marketing, and AI integration services. Get a custom quote today.",
  keywords: ["web development services", "corporate website development", "portfolio website design", "ecommerce website development", "SEO services", "digital marketing services", "AI integration services"],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
