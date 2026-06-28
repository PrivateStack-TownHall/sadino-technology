"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ArticleHero() {
  return (
    <section className="container-custom mb-20">
      <motion.div variants={fadeUp} className="max-w-3xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase mb-6">
          Our Journal
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Insights from our Engineers & Designers
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl">
          Deep dives into modern software architecture, creative design systems,
          and AI evolution.
        </p>
      </motion.div>
    </section>
  );
}
