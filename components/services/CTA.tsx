"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  data: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export default function ServiceCTA({ data }: Props) {
  return (
    <section id="cta" className="py-24">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white p-12 md:p-20 rounded-3xl text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{data.title}</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">{data.description}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all shadow-xl"
              >
                {data.primary}
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                {data.secondary}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
