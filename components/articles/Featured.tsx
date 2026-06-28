"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { articles } from "@/constants/articles";
import Link from "next/link";
import Image from "next/image";

export default function ArticleFeatured() {
  const featured = articles.find((a) => a.featured);

  if (!featured) return null;

  return (
    <motion.section variants={fadeUp} className="container-custom mb-24">
      <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow">
        {/* IMAGE */}
        <div className="relative h-[350px] md:h-auto">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-10 flex flex-col justify-center">
          <div className="text-sm text-blue-600 mb-3">
            {featured.category} • {featured.readTime}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {featured.title}
          </h2>

          <p className="text-gray-500 mb-6">{featured.description}</p>

          {/* AUTHOR */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img
                src={featured.author.avatar}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{featured.author.name}</p>
                <p className="text-xs text-gray-500">{featured.author.role}</p>
              </div>
            </div>

            <Link
              href={`/articles/${featured.slug}`}
              className="text-blue-600 text-sm font-semibold"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
