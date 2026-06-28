"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  data: {
    slug: string;
    title: string;
    description: string;
    image: string;
    category: string;
    meta?: {
      tech?: string[];
    };
  };
};

export default function PortfolioCard({ data }: Props) {
  const techStack = data.meta?.tech ?? [];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-50"
    >
      {/* IMAGE */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-7">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] px-3 py-1 bg-blue-50 text-blue-600 rounded font-semibold uppercase tracking-wide">
            {data.category}
          </span>
          {techStack.slice(0, 2).map((tech, i) => (
            <span key={i} className="text-[10px] px-3 py-1 bg-[#f2f4f6] text-gray-500 rounded font-medium uppercase tracking-wide">
              {tech}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
          {data.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">
          {data.description}
        </p>

        {/* LINK */}
        <Link
          href={`/portfolio/${data.slug}`}
          className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all"
        >
          View Details <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
