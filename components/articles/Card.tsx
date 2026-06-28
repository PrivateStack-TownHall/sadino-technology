"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCard({ data }: any) {
  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="h-52 relative overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col">
        <span className="text-[10px] bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full w-fit mb-3 uppercase tracking-wide">
          {data.category}
        </span>

        <h4 className="text-base font-bold mb-2 group-hover:text-blue-600 transition leading-snug">
          <Link href={`/articles/${data.slug}`}>{data.title}</Link>
        </h4>

        <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed">
          {data.description}
        </p>

        <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
          <span>{data.date} · {data.readTime}</span>
          <Link
            href={`/articles/${data.slug}`}
            className="flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
          >
            Read More <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
