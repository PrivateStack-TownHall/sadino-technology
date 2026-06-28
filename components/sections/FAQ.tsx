"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

/* ================= DATA ================= */

const faqs = [
  {
    q: "How long does development take?",
    a: "Development usually takes 2–6 weeks depending on the complexity of the project. We always provide a clear timeline before starting.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on your requirements. We offer flexible solutions based on your business needs and budget.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes, revisions are included in our process to ensure the final product meets your expectations.",
  },
  {
    q: "Will my website be SEO friendly?",
    a: "Yes, we build all websites with SEO best practices including fast loading, clean structure, and proper meta setup.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, we offer ongoing support and maintenance to ensure your system runs smoothly after launch.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom max-w-6xl">
        {/* 🔷 HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know before starting your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* ================= LEFT ================= */}
          <motion.div
            className="space-y-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {faqs.map((item, i) => {
              const isActive = active === i;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onClick={() => setActive(i)}
                  className={`
                    cursor-pointer px-5 py-4 rounded-xl transition-all duration-200 border
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md border-blue-600"
                        : "bg-white hover:bg-blue-50 border-gray-200"
                    }
                  `}
                >
                  <p className="text-sm font-semibold flex justify-between items-center">
                    {item.q}
                    <span className="text-lg">{isActive ? "−" : "+"}</span>
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border"
          >
            <h3 className="font-semibold text-lg mb-3 text-gray-900">
              {faqs[active].q}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {faqs[active].a}
            </p>

            {/* 🔷 EXTRA TRUST */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg py-3">
                <p className="text-lg font-bold text-blue-600">2–6 Weeks</p>
                <p className="text-xs text-gray-500">Avg Timeline</p>
              </div>
              <div className="bg-gray-50 rounded-lg py-3">
                <p className="text-lg font-bold text-blue-600">Flexible</p>
                <p className="text-xs text-gray-500">Pricing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
