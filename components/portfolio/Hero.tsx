"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function PortfolioHero() {
  return (
    <section className="pt-16 pb-12">
      <div className="container-custom max-w-3xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          Engineering digital{" "}
          <span className="text-blue-600">masterpieces</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-gray-500 text-lg leading-relaxed"
        >
          A collection of high-performance applications, sleek interfaces, and
          scalable architectures built for global industry leaders.
        </motion.p>
      </div>
    </section>
  );
}
