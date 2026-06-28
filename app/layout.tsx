import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// ✅ FIXED PATH (sesuai struktur kamu)
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

// 🔤 FONT CONFIG
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // 🔥 performance optimization
});

// 🌐 METADATA (SEO READY)
export const metadata: Metadata = {
  title: {
    default: "Sadino Technology",
    template: "%s | Sadino Technology",
  },
  description:
    "Software house specializing in web development, UI/UX design, and scalable backend solutions.",
  keywords: [
    "Software House",
    "Web Development",
    "UI UX Design",
    "Backend API",
    "Mobike Apps",
  ],
  authors: [{ name: "Sadino Technology" }],
};

// 🧩 ROOT LAYOUT
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased font-[var(--font-poppins)]">
        {/* 🔝 NAVBAR */}
        <Navbar />

        {/* 📄 PAGE CONTENT */}
        <main className="flex-1">{children}</main>

        {/* 🔻 FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
