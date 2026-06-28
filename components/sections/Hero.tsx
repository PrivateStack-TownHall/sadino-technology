"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeDown, slideRight, slideLeft } from "@/lib/animations";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#f7f9fb]">
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* ===== LEFT ===== */}
        <div className="space-y-8">
          {/* BADGE */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="show"
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold tracking-widest uppercase"
          >
            Next-Gen Software House
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900"
          >
            Build Scalable <br />
            Digital Products <br />
            with{" "}
            <span className="text-blue-600">Sadino Technology</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-gray-500 text-lg max-w-lg leading-relaxed"
          >
            Helping businesses grow with high-performance web apps, intuitive
            UI/UX design, and robust backend systems tailored for scale.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:scale-[1.03] transition"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* TRUSTED */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs uppercase tracking-wider text-gray-400"
          >
            Trusted by innovators at
          </motion.p>
        </div>

        {/* ===== RIGHT ===== */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* DASHBOARD CARD */}
          <div className="bg-white p-3 rounded-2xl shadow-2xl shadow-blue-100/60 border border-gray-100">
            <DashboardSVG />
          </div>

          {/* FLOATING METRIC CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="hidden md:flex items-center gap-4 absolute -bottom-5 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Growth Rate</p>
              <p className="text-xl font-bold text-gray-900">+124%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== INLINE SVG DASHBOARD (replaces missing image) ===== */
function DashboardSVG() {
  return (
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-xl">
      <rect width="640" height="400" fill="#0f172a" rx="12" />
      {/* Sidebar */}
      <rect x="0" y="0" width="140" height="400" fill="#1e293b" rx="12" />
      <rect x="16" y="20" width="60" height="12" rx="4" fill="#3b82f6" />
      {[60, 90, 120, 150, 190, 220].map((y, i) => (
        <g key={i}>
          <rect x="16" y={y} width="16" height="16" rx="4" fill={i === 0 ? "#3b82f6" : "#334155"} />
          <rect x="40" y={y + 3} width={50 + (i % 3) * 10} height="10" rx="3" fill={i === 0 ? "#60a5fa" : "#475569"} />
        </g>
      ))}
      {/* Main content */}
      <rect x="155" y="16" width="200" height="70" rx="10" fill="#1e293b" />
      <rect x="367" y="16" width="120" height="70" rx="10" fill="#1e293b" />
      <rect x="499" y="16" width="126" height="70" rx="10" fill="#1e293b" />
      {/* Stat texts */}
      <rect x="168" y="30" width="60" height="10" rx="3" fill="#475569" />
      <rect x="168" y="50" width="100" height="18" rx="4" fill="#3b82f6" opacity="0.8" />
      <rect x="380" y="30" width="40" height="10" rx="3" fill="#475569" />
      <rect x="380" y="50" width="70" height="18" rx="4" fill="#22c55e" opacity="0.8" />
      <rect x="512" y="30" width="50" height="10" rx="3" fill="#475569" />
      <rect x="512" y="50" width="80" height="18" rx="4" fill="#a78bfa" opacity="0.8" />
      {/* Chart area */}
      <rect x="155" y="100" width="340" height="180" rx="10" fill="#1e293b" />
      <rect x="167" y="112" width="80" height="10" rx="3" fill="#60a5fa" />
      {/* Bar chart */}
      {[0,1,2,3,4,5,6,7].map((i) => {
        const heights = [60,100,75,120,90,140,80,110];
        const h = heights[i];
        return (
          <rect key={i} x={185 + i * 38} y={256 - h} width="22" height={h} rx="4"
            fill={i === 5 ? "#3b82f6" : "#334155"} />
        );
      })}
      {/* Line chart overlay */}
      <polyline points="185,220 223,190 261,205 299,170 337,185 375,150 413,165 451,140"
        fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="375" cy="150" r="5" fill="#3b82f6" />
      {/* Right panel */}
      <rect x="508" y="100" width="117" height="180" rx="10" fill="#1e293b" />
      <rect x="520" y="114" width="60" height="8" rx="3" fill="#475569" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <circle cx="530" cy={140 + i * 36} r="8" fill={["#3b82f6","#22c55e","#a78bfa","#f59e0b"][i]} opacity="0.8" />
          <rect x="546" y={133 + i * 36} width="50" height="8" rx="3" fill="#334155" />
          <rect x="546" y={145 + i * 36} width="30" height="6" rx="3" fill="#475569" />
        </g>
      ))}
      {/* Bottom row */}
      <rect x="155" y="295" width="220" height="90" rx="10" fill="#1e293b" />
      <rect x="387" y="295" width="238" height="90" rx="10" fill="#1e293b" />
      <rect x="167" y="308" width="70" height="9" rx="3" fill="#475569" />
      <rect x="167" y="325" width="130" height="40" rx="6" fill="#172554" />
      {[0,1,2,3,4].map((i) => (
        <rect key={i} x={173 + i * 26} y={335} width="18" height={[20,30,15,25,10][i]} rx="3" fill="#3b82f6" opacity={0.4 + i * 0.1} />
      ))}
      <rect x="399" y="308" width="50" height="9" rx="3" fill="#475569" />
      <polyline points="399,360 430,340 461,350 492,325 523,335 554,310 585,320"
        fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
