import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoukath Otm | MERN Stack Developer",
  description: "Portfolio of Shoukath Otm, a MERN Stack Developer passionate about building scalable, high-performance web applications with React, Node.js, MongoDB, TypeScript, and Tailwind CSS.",
  keywords: ["Shoukath Otm", "MERN Stack Developer", "Full Stack Developer", "React Developer", "Node.js Developer", "TypeScript Developer", "Calicut Developer", "Kerala India"],
  authors: [{ name: "Shoukath Otm" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
