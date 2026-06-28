"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ArticleNewsletter() {
  return (
    <motion.section variants={fadeUp} className="container-custom py-8 mb-8">
      <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 text-white text-center p-12 md:p-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Stay updated with latest tech trends
        </h2>
        <p className="text-blue-100 mb-10 max-w-md mx-auto leading-relaxed text-sm">
          Get bi-weekly insights delivered to your inbox. No spam, only
          high-fidelity engineering and design content.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-black transition whitespace-nowrap">
            Join Newsletter
          </button>
        </div>

        <p className="text-xs text-blue-200 mt-6">
          Join 5,000+ developers and designers already subscribed.
        </p>
      </div>
    </motion.section>
  );
}
