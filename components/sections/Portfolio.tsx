"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

import { portfolios } from "@/constants/portfolios";

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Portfolio Preview
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
          </div>

          <Link href="/portfolio" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm">
            See All Work →
          </Link>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {portfolios.slice(0, 6).map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                group relative overflow-hidden rounded-3xl
                aspect-[16/10] bg-gray-200
              "
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t from-black via-black/40 to-transparent
                flex flex-col justify-end p-8 text-white
              "
              >
                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                {/* DESC */}
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* CTA */}
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="
                    w-fit bg-white text-gray-900 px-6 py-2 rounded-xl
                    font-bold text-sm
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
