"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  viewportOnce,
} from "@/lib/animations";

export default function PortfolioClientDetail({ portfolio }: { portfolio: any }) {
  return (
    <div className="pt-28 pb-24">
      <div className="container-custom">
        {/* ================= HERO ================= */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-12 gap-16 items-start mb-32"
        >
          {/* LEFT */}
          <motion.div variants={slideRight} className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {(portfolio.gallery || [1, 2, 3, 4]).map((_: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:ring-2 ring-blue-500 transition cursor-pointer"
                >
                  <Image
                    src={
                      portfolio.gallery
                        ? portfolio.gallery[i]
                        : "https://placehold.co/300/png"
                    }
                    alt="thumb"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={slideLeft} className="lg:col-span-5 space-y-8">
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-[10px] font-bold uppercase bg-blue-100 text-blue-600 rounded-full">
                Case Study
              </span>
              <span className="px-3 py-1 text-[10px] font-bold uppercase bg-gray-100 rounded-full">
                {portfolio.category}
              </span>
            </div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {portfolio.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted text-lg">
              {portfolio.description}
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6">
              <Meta label="Client" value={portfolio.meta?.client} />
              <Meta label="Year" value={portfolio.meta?.year} />
              <Meta label="Role" value={portfolio.meta?.role} />
              <Meta
                label="Tech Stack"
                value={(portfolio.meta?.tech || []).join(", ")}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4 pt-4">
              <a href={portfolio.liveUrl || "#"} target="_blank" className="btn-primary hover:scale-105 transition">
                View Live Project →
              </a>
              <a href="/contact" className="btn-secondary hover:scale-105 transition">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ================= CHALLENGE ================= */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-12 gap-12 items-center mb-32"
        >
          <motion.div variants={slideRight} className="lg:col-span-5">
            <div className="w-12 h-[2px] bg-blue-600 mb-4" />

            <h2 className="heading-lg mb-4">{portfolio.challenge?.title}</h2>

            <p className="text-muted mb-6">{portfolio.challenge?.desc}</p>

            <ul className="space-y-3">
              {(portfolio.challenge?.points || []).map((p: any, i: number) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="text-sm text-gray-600"
                >
                  ✔ {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={slideLeft} className="lg:col-span-7">
            <Image
              src={portfolio.challenge?.image}
              alt="challenge"
              width={800}
              height={500}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </motion.section>

        {/* ================= SOLUTION ================= */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-12 gap-12 items-center mb-32"
        >
          <motion.div
            variants={slideLeft}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <Image
              src={portfolio.solution?.image}
              alt="solution"
              width={800}
              height={500}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={slideRight}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="w-12 h-[2px] bg-blue-600 mb-4" />

            <h2 className="heading-lg mb-4">{portfolio.solution?.title}</h2>

            <p className="text-muted mb-6">{portfolio.solution?.desc}</p>

            {portfolio.solution?.quote && (
              <motion.div
                variants={fadeUp}
                className="bg-gray-50 p-5 rounded-xl border text-sm italic"
              >
                "{portfolio.solution.quote.text}"
                <span className="block mt-3 text-xs text-blue-600 not-italic">
                  — {portfolio.solution.quote.author}
                </span>
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        {/* ================= RESULT ================= */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-gray-50 rounded-3xl p-12 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-[2px] bg-blue-600 mb-4" />

              <h2 className="text-3xl font-bold mb-6">
                {portfolio.result?.title}
              </h2>

              <p className="text-muted">{portfolio.result?.desc}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {(portfolio.result?.metrics || []).map((item: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600"
                >
                  <p className="text-3xl font-bold text-blue-600">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase text-gray-500 mt-1">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-400 uppercase">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}
