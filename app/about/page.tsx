"use client";

import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  viewportOnce,
} from "@/lib/animations";

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface">
      {/* ================= HERO ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="pt-40 pb-24 max-w-7xl mx-auto px-8"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block py-1 px-3 bg-blue-100 text-blue-600 text-xs font-bold rounded-full mb-6"
        >
          ESTABLISHED 2019
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-7xl font-extrabold leading-tight mb-8"
        >
          Crafting the{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Future
          </span>{" "}
          of Technology
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl text-gray-500 mb-10 max-w-2xl"
        >
          We are more than a software house. We are digital architects dedicated
          to transforming complex business challenges into seamless,
          high-performance technological realities.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4">
          <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition">
            Our Ecosystem
          </Link>
          <button className="bg-[#f2f4f6] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
            Watch Film
          </button>
        </motion.div>
      </motion.section>

      {/* ================= STATS ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="py-20 bg-[#f2f4f6]"
      >
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {[
            ["100+", "Projects Delivered"],
            ["5+", "Years Excellence"],
            ["50+", "Global Clients"],
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-8 rounded-xl flex gap-6 border-l-4 border-blue-600"
            >
              <h3 className="text-4xl font-bold text-blue-600">{item[0]}</h3>
              <div>
                <p className="font-semibold">{item[1]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= STORY ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="py-32 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center"
      >
        <motion.div variants={slideRight}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            alt="office"
            width={600}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </motion.div>

        <motion.div variants={slideLeft}>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-500 mb-4">
            Founded in 2019, Sadino Technology emerged from a simple
            observation: bridging business and technology was fragmented.
          </p>
          <p className="text-gray-500 mb-6">
            Today we are a multidisciplinary team building scalable digital
            products with empathy.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-xl">
              <p className="text-blue-600 font-bold">2019</p>
              <p className="text-sm">Founded</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <p className="text-blue-600 font-bold">2022</p>
              <p className="text-sm">Global Expansion</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= VALUES ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="py-32 bg-[#f2f4f6]"
      >
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Values that Define Us</h2>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {["Innovation", "Quality", "Client-Centric"].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-2xl shadow"
            >
              <h3 className="text-xl font-bold mb-4">{v}</h3>
              <p className="text-gray-500 text-sm">
                High standard execution and forward thinking mindset.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= LEADER ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="py-32 max-w-7xl mx-auto px-8"
      >
        <div className="grid md:grid-cols-2 bg-gray-100 rounded-3xl overflow-hidden">
          <motion.div variants={slideRight}>
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="ceo"
              width={600}
              height={600}
              className="object-cover h-full"
            />
          </motion.div>

          <motion.div
            variants={slideLeft}
            className="p-16 flex flex-col justify-center"
          >
            <p className="text-blue-600 font-bold text-sm mb-2">LEADERSHIP</p>
            <h2 className="text-3xl font-bold mb-4">Alex Sadino</h2>
            <p className="text-gray-500 italic">
              “Technology is most powerful when it becomes invisible.”
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CULTURE ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="py-32 max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12"
      >
        <motion.div variants={slideRight} className="lg:col-span-5">
          <h2 className="text-4xl font-bold mb-6">Life at Sadino</h2>
          <p className="text-gray-500 mb-6">
            We build a culture of innovation and curiosity.
          </p>

          <ul className="space-y-3 mb-6">
            <li>✔ Hybrid Work</li>
            <li>✔ Innovation Retreat</li>
            <li>✔ Learning Budget</li>
          </ul>

          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Join the Team
          </Link>
        </motion.div>

        <motion.div
          variants={slideLeft}
          className="lg:col-span-7 grid grid-cols-2 gap-4"
        >
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt=""
            width={400}
            height={300}
            className="rounded-xl w-full object-cover aspect-[4/3]"
          />
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt=""
            width={400}
            height={300}
            className="rounded-xl w-full object-cover aspect-[4/3]"
          />
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt=""
            width={400}
            height={300}
            className="rounded-xl w-full object-cover aspect-[4/3]"
          />
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt=""
            width={400}
            height={300}
            className="rounded-xl w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
