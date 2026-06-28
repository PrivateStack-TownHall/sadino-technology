"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "@/lib/animations";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  reverse?: boolean;
  badge?: string;
  badgeLabel?: string;
};

export default function ServiceBlock({ title, desc, features, tech, reverse, badge, badgeLabel }: Props) {
  return (
    <section className="py-24 bg-[#f7f9fb]">
      <div className={`container-custom grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-last" : ""}`}>
        {/* TEXT */}
        <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{title}</h2>
          <p className="text-gray-500 mb-6 leading-relaxed">{desc}</p>

          <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                <CheckCircle size={18} className="text-blue-600 shrink-0" strokeWidth={2} />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {tech.map((t, i) => (
              <span key={i} className="px-3 py-1.5 bg-[#f2f4f6] rounded-lg text-xs font-semibold text-gray-600">
                {t}
              </span>
            ))}
          </div>

          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition">
            Start Project →
          </Link>
        </motion.div>

        {/* VISUAL */}
        <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-50 p-8 border border-gray-100">
            <ServiceVisualSVG title={title} />
          </div>

          {/* FLOATING BADGE */}
          {badge && (
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-2xl font-extrabold leading-none">{badge}</p>
              <p className="text-[10px] uppercase tracking-wider opacity-80 mt-0.5">{badgeLabel}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceVisualSVG({ title }: { title: string }) {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="260" fill="#f8fafc" rx="12" />
      {/* Header bar */}
      <rect x="0" y="0" width="400" height="44" fill="#1e293b" rx="12" />
      <circle cx="20" cy="22" r="5" fill="#ef4444" />
      <circle cx="36" cy="22" r="5" fill="#f59e0b" />
      <circle cx="52" cy="22" r="5" fill="#22c55e" />
      <rect x="70" y="16" width="120" height="12" rx="4" fill="#334155" />
      {/* Content blocks */}
      <rect x="16" y="60" width="180" height="80" rx="8" fill="white" />
      <rect x="16" y="60" width="180" height="8" rx="4" fill="#3b82f6" opacity="0.2" />
      <rect x="28" y="78" width="100" height="10" rx="4" fill="#e2e8f0" />
      <rect x="28" y="96" width="140" height="8" rx="3" fill="#e2e8f0" />
      <rect x="28" y="110" width="80" height="8" rx="3" fill="#e2e8f0" />
      <rect x="28" y="124" width="120" height="8" rx="3" fill="#e2e8f0" />
      {/* Right panel */}
      <rect x="208" y="60" width="176" height="80" rx="8" fill="white" />
      <rect x="220" y="72" width="60" height="8" rx="3" fill="#94a3b8" />
      {[0,1,2,3].map((i) => (
        <rect key={i} x={222 + i * 36} y={96} width="26" height={[40,25,50,30][i]} rx="4" fill="#3b82f6" opacity={0.3 + i * 0.15} />
      ))}
      {/* Bottom row */}
      <rect x="16" y="155" width="84" height="80" rx="8" fill="white" />
      <rect x="112" y="155" width="84" height="80" rx="8" fill="#3b82f6" />
      <rect x="208" y="155" width="84" height="80" rx="8" fill="white" />
      <rect x="304" y="155" width="80" height="80" rx="8" fill="white" />
      {/* Stat texts */}
      <rect x="28" y="180" width="40" height="16" rx="4" fill="#1e293b" opacity="0.8" />
      <rect x="28" y="204" width="55" height="8" rx="3" fill="#94a3b8" />
      <rect x="124" y="180" width="40" height="16" rx="4" fill="white" opacity="0.9" />
      <rect x="124" y="204" width="55" height="8" rx="3" fill="white" opacity="0.6" />
    </svg>
  );
}
