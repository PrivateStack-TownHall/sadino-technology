"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const features = [
  { title: "Clean Architecture", desc: "Maintenance-first approach ensuring your system is easy to upgrade.", color: "border-blue-600" },
  { title: "Scalable Systems", desc: "Infrastructure that grows with your user base without breaking.", color: "border-blue-600" },
  { title: "Fast Delivery", desc: "Agile methodology to get your MVP to market in record time.", color: "border-blue-600" },
  { title: "Business-Oriented", desc: "Focused on ROI and metrics that matter to your stakeholders.", color: "border-blue-600" },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#f2f4f6]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 text-gray-900">
              Why Modern Brands Choose Us
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-12 max-w-md leading-relaxed">
              We don't just write code. We architect solutions that bridge the
              gap between complex technology and your business goals.
            </motion.p>

            {/* STATS */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
              <div className="bg-white p-7 rounded-2xl">
                <h4 className="text-4xl font-bold text-blue-600 mb-1">98%</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Client Retention</p>
              </div>
              <div className="bg-white p-7 rounded-2xl">
                <h4 className="text-4xl font-bold text-blue-600 mb-1">250+</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Apps Delivered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl border-l-4 border-blue-600"
              >
                <h4 className="font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
