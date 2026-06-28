"use client";

import { motion } from "framer-motion";
import { fadeUp, slideRight, slideLeft } from "@/lib/animations";
import Link from "next/link";

type Props = {
  data: {
    badge: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    image: string;
  };
};

export default function ServiceHero({ data }: Props) {
  return (
    <section id="overview" className="pt-16 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="max-w-xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-4"
          >
            {data.badge}
          </motion.span>

          <motion.h1
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900"
          >
            {data.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-gray-500 mb-8 leading-relaxed"
          >
            {data.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200 hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              {data.primaryCTA}
            </Link>
            <button className="px-7 py-3.5 rounded-xl border border-gray-200 bg-[#f7f9fb] text-gray-700 font-semibold text-sm hover:border-blue-200 hover:text-blue-600 transition-all">
              {data.secondaryCTA}
            </button>
          </motion.div>
        </div>

        {/* RIGHT — Code snippet visual (replaces broken image) */}
        <motion.div variants={slideLeft} initial="hidden" animate="show" className="pt-8 lg:pt-0">
          <div className="bg-[#0f172a] rounded-2xl shadow-2xl shadow-blue-100/40 overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#1e293b]">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-[11px] text-gray-500 font-mono">service.ts</span>
            </div>
            {/* Code */}
            <div className="p-6 font-mono text-sm space-y-2 text-left">
              <p><span className="text-purple-400">const</span> <span className="text-blue-300">service</span> <span className="text-white">= {"{"}</span></p>
              <p className="pl-6"><span className="text-green-400">  performance</span><span className="text-white">: </span><span className="text-orange-300">"99.9%"</span><span className="text-white">,</span></p>
              <p className="pl-6"><span className="text-green-400">  architecture</span><span className="text-white">: </span><span className="text-orange-300">"scalable"</span><span className="text-white">,</span></p>
              <p className="pl-6"><span className="text-green-400">  security</span><span className="text-white">: </span><span className="text-orange-300">"zero-trust"</span><span className="text-white">,</span></p>
              <p className="pl-6"><span className="text-green-400">  delivery</span><span className="text-white">: </span><span className="text-orange-300">"on-time"</span><span className="text-white">,</span></p>
              <p><span className="text-white">{"}"}</span></p>
              <br />
              <p><span className="text-purple-400">export default</span> <span className="text-blue-300">service</span><span className="text-white">;</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
