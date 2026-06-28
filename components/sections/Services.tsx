"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Globe, Palette, Database, Smartphone, FileText } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance React & Next.js applications optimized for speed and conversion.",
    href: "/services/web-development",
    icon: Globe,
    color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    title: "UI/UX Design",
    desc: "Data-driven interface design focusing on user psychology and seamless experiences.",
    href: "/services/ui-ux-design",
    icon: Palette,
    color: "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
  },
  {
    title: "Backend & API",
    desc: "Robust distributed systems and secure API architectures built on Node.js and Go.",
    href: "/services/backend-api",
    icon: Database,
    color: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
  },
  {
    title: "Mobile Apps",
    desc: "Native-feel cross-platform mobile experiences for iOS and Android using Flutter.",
    href: "/services/mobile-apps",
    icon: Smartphone,
    color: "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
  },
  {
    title: "Company Profile",
    desc: "Professional company profile websites that showcase your brand with precision.",
    href: "/services/company-profile",
    icon: FileText,
    color: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 text-gray-900">Core Expertise</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-[#f7f9fb] hover:bg-white p-7 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-50"
              >
                {/* ICON */}
                <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center transition-all duration-300 ${item.color}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-bold mb-2 text-gray-900">{item.title}</h3>

                {/* DESC */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>

                {/* LINK */}
                <Link
                  href={item.href}
                  className="text-blue-600 text-xs font-semibold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
